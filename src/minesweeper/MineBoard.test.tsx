import renderer from "react-test-renderer";
import { MineBoard } from "./MineBoard";
import { cleanup } from "@testing-library/react";

describe("<MineBoard />", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it("renders correctly and to match snapshot", () => {
    const boardData: string[] = [];
    const tree = renderer.create(<MineBoard boardData={boardData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
