import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Material UI
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

// Component
import { MineBoard } from "../minesweeper/MineBoard";

// Context
import { newBoard, initBoard } from "../minesweeper/reducers";
import { RootState } from "../store/store";

// Style
import { useMainStyles, BoardCell, boardTheme } from "./styles";

const showNotification = (message: string) => {
  return message !== "OK" ? message : "";
};

function App() {
  const dispatch = useDispatch();
  const classes = useMainStyles();
  const [level, setLevel] = useState(1);
  const boardState = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(initBoard());
  }, []);

  const onChangeLevel = (event: SelectChangeEvent) => {
    const newLevel = Number(event?.target?.value);
    setLevel(newLevel);
  };

  const onStartMinesweeper = () => {
    dispatch(newBoard(`new ${level}`));
  };

  const makeLevels = () => {
    return [1, 2, 3, 4].map((level) => (
      <MenuItem value={level}>Level {level}</MenuItem>
    ));
  };

  const drawHeader = () => {
    return (
      <div className={classes.header}>
        <FormControl className={classes.lvl} fullWidth>
          <InputLabel>Select a level</InputLabel>
          <Select
            id="level-com"
            value={`${level}`}
            label="Select a level"
            onChange={onChangeLevel}
          >
            {makeLevels()}
          </Select>
        </FormControl>
        <Button
          data-testid="btn-com"
          variant="contained"
          color="info"
          className={classes.btn}
          onClick={onStartMinesweeper}
        >
          {boardState.map.length ? "Again" : "Go"}
        </Button>
      </div>
    );
  };

  const drawBoard = () => {
    return (
      <div
        className={
          boardState.map.length <= 10
            ? `${classes.content} ${classes.smallContent}`
            : classes.content
        }
      >
        <MineBoard boardData={boardState.map} />
      </div>
    );
  };

  return (
    <>
      <ThemeProvider theme={boardTheme}>
        <div className={classes.main}>
          <BoardCell className={classes.container} elevation={2}>
            {drawHeader()}

            {drawBoard()}

            <div className={classes.footer}>
              <p className={classes.message}>
                {showNotification(boardState.message)}
              </p>
            </div>
          </BoardCell>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
