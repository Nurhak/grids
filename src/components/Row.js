import Cell from "components/Cell.js";
import {Grid, makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  row: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    flex: 1,
    marginBottom: 2
  }
});

/**
 * Renders rows as containers.
 * @param row, array of the grid row.
 * @param rowIndex, indef of the row.
 * @returns {JSX.Element}
 */
const Row = ({row, rowIndex}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.row}>
      {row.map((cell, colIndex) => {
        return (
          <Cell key={colIndex} row={rowIndex} col={colIndex} value={cell} />
        );
      })}
    </Grid>
  );
};

export default Row;

Row.prototype = {
  row: PropTypes.array,
  rowIndex: PropTypes.number
};
