import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import App from ".";
import { cleanup, render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../store/saga";

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

describe("<App />", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it("renders correctly and to match snapshot", () => {
    const initialState = {
      game: {
        map: [],
        message: "",
      },
    };
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Start button appears in first render", async () => {
    const initialState = {
      game: {
        map: [
          "□□□□□□□□□□",
          "□□□□□□□□□□",
          "□□□□□□□□□□",
          "□□□□□□□□□□",
          "□□□□□□□□□□",
          "□□□□□□□□□□",
          "□□□□□□□□□□",
          "□□□□□□□□□□",
          "□□□□□□□□□□",
          "□□□□□□□□□□",
        ],
        message: "",
      },
    };
    const store = mockStore(initialState);
    sagaMiddleware.run(watcherSaga);

    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.getByText("Play again")).toBeTruthy();
  });
});
