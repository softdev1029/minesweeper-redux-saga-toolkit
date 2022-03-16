import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import { createTheme, styled } from "@mui/material/styles";

export const useMainStyles = makeStyles({
  main: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    border: "2px solid gray",
    background: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
  },
  header: {
    marginTop: 100,
  },
  content: {
    display: "flex",
    // overflow: "scroll",
    flexDirection: "column",
    margin: 30,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  smallContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  btn: {
    minWidth: "150px !important",
    minHeight: "55px !important",
  },
  lvl: {
    maxWidth: "150px !important",
    minHeight: "70px !important",
    marginRight: "15px !important",
  },
  message: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
});

export const boardTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const BoardCell = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
