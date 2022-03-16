import { MineSweeperClient } from "../utils/Client";
import { Button } from "@mui/material";
import { useGameTableStyles } from "./styles";

interface Props {
  boardData: string[];
}

export function MineBoard({ boardData }: Props) {
  const classes = useGameTableStyles();

  const onCellClick = (y: number, x: number) => {
    MineSweeperClient.socket.send(`open ${x} ${y}`);
  };

  const makeBoardMap = (items: any) => {
    return items.map((item: any, lineIdx: number) => {
      const squares = item.split("");
      const row = squares.map((square: any, colIdx: number) => {
        const key = `square-${lineIdx}-${colIdx}`;
        const testId = `square-${lineIdx}-${colIdx}`;
        if (square !== "□") {
          return (
            <Button
              variant="contained"
              color={square === "*" ? "warning" : "info"}
              onClick={() => onCellClick(lineIdx, colIdx)}
              key={key}
              className={classes.cell}
              data-testid={testId}
            >
              <p className={classes.text}>{square === "*" ? "X" : square}</p>
            </Button>
          );
        }
        return (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onCellClick(lineIdx, colIdx)}
            key={key}
            className={classes.cell}
            data-testid={testId}
          />
        );
      });
      return (
        <div key={`line${lineIdx}`} className={classes.line}>
          {row}
        </div>
      );
    });
  };

  if (boardData.length) {
    return <>{makeBoardMap(boardData)}</>;
  }

  return <div>No Board</div>;
}
