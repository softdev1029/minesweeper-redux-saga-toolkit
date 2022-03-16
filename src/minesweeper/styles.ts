import { makeStyles } from "@mui/styles";

export const useGameTableStyles = makeStyles({
  cell: {
    width: 60,
    height: 60,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: "0px !important",
  },
  text: {
    fontWeight: "bold",
    margin: 0,
  },
  line: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
