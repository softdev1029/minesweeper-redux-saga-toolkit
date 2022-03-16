export const SOCKET_ENDPOINT = "wss://hometask.eg1236.com/game1/";

type Socket = WebSocket;
class MineSweeperClient {
  private static _socket: Socket;

  public static get socket() {
    return this._socket;
  }

  public static set socket(socketConnection: Socket) {
    this._socket = socketConnection;
  }

  public static createConnection(url: string = SOCKET_ENDPOINT) {
    if (MineSweeperClient.socket) {
      return MineSweeperClient.socket;
    }
    const socketConnection = new WebSocket(url);
    MineSweeperClient.socket = socketConnection;
    return MineSweeperClient.socket;
  }
}

export { MineSweeperClient };
