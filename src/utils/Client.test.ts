import { MineSweeperClient } from "./Client";

describe("MineSweeperClient", () => {
  test("createConnection should connect to socket with valid url", () => {
    const url = "invalid_url";
    function createConnection() {
      MineSweeperClient.createConnection(url);
    }
    expect(createConnection).toThrow(new Error(`The URL '${url}' is invalid.`));
  });
  test("createConnection should connect to socket with valid url", () => {
    const socket = MineSweeperClient.createConnection();
    expect(socket).toBe(MineSweeperClient.socket);
  });
  test("createConnection should return socket instance if it exist", () => {
    const socket = MineSweeperClient.createConnection();
    expect(socket).toBe(MineSweeperClient.socket);
  });
});
