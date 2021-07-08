import React from "react";
import {useSelector} from "react-redux";
//import makeStyles from "@material-ui/core/styles/makeStyles.js";
import {Grid, makeStyles} from "@material-ui/core";
import Row from "components/Row.js";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "1vh",
    marginLeft: "2vw",
    width: "95vw",
    height: "98vh",
    flexDirection: "column",
    flexWrap: "nowrap",
    flex: 1
  }
}));

/**
 * Renders main grids container.
 * @returns {JSX.Element}
 */
const Grids = () => {
  const {gridArray} = useSelector(({grids}) => grids);
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {gridArray.map((row, rowIndex) => {
        return <Row key={rowIndex} row={row} rowIndex={rowIndex} />;
      })}
    </Grid>
  );
};
export default Grids;
