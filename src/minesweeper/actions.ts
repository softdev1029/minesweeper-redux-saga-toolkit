import { take, put, call, apply, fork } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { MineSweeperClient } from "../utils/Client";
import { setMap, updateMessage } from "./reducers";

function* fetchBoardMap(socket: any) {
  yield apply(socket, socket.send, ["map"]);
}

function makeEventChannel(socket: any) {
  return eventChannel((emit) => {
    const handleOnMessage = (event: any) => {
      emit(event.data);
    };

    const errorHandler = (errorEvent: any) => {
      emit(new Error(errorEvent?.reason || "UKNOWN"));
    };

    socket.addEventListener("message", handleOnMessage);
    socket.addEventListener("error", errorHandler);

    const unsubscribe = () => {
      socket.removeEventListener("message", handleOnMessage);
    };

    return unsubscribe;
  });
}

export function* handleChannelEvent(): any {
  const socket: any = yield call(MineSweeperClient.createConnection);
  const chn = yield call(makeEventChannel, socket);

  while (true) {
    try {
      const data = yield take(chn);
      if (data.includes("map:")) {
        yield put(setMap(data));
      }
      if (data.includes("new:")) {
        yield fork(fetchBoardMap, socket);
      }
      if (data.includes("open:")) {
        yield put(updateMessage(data.split("open: ")[1]));
        yield fork(fetchBoardMap, socket);
      }
    } catch (err) {
      console.error("socket error:", err);
      chn.close();
    }
  }
}

export function* makeNewBoard(action: any) {
  yield apply(MineSweeperClient.socket, MineSweeperClient.socket.send, [
    action.payload,
  ]);
}
