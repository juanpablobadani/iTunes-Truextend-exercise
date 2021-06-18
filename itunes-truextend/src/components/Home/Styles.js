import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    "& > *": {
      margin: theme.spacing(1),
      width: "10ch",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  divider: {
    height: 28,
    margin: 3,
  },
  spacingForm: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginRight: '5px' 
  },
  tyStyle: {
    textAlign: "center",
    marginTop: "125px",
    marginBottom: "10px",
  },
  gridStyle: {
    backgroundColor: "white",
    height: "50vh",
    textAlign: "center",
    margin: "100px 50px 50px 50px",
  },
  styleHome: {
    backgroundColor: "#E2E0DF",
  }
  
}));

export default useStyles;
