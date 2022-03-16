import { takeLatest } from "redux-saga/effects";
import { handleChannelEvent, makeNewBoard } from "../minesweeper/actions";
import { newBoard, initBoard } from "../minesweeper/reducers";

export function* watcherSaga() {
  yield takeLatest(initBoard.type, handleChannelEvent);
  yield takeLatest(newBoard.type, makeNewBoard);
}
