import {Grid, makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {updateGridArray} from "redux/actions/Grids.js";
import {darken} from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  cell: {
    height: 17,
    width: 40,
    border: "1px solid #157EB7",
    textAlign: "center",
    boxShadow: "2px 1px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(21,126,183,0.5) !important"
    }
  },
  animate: {
    backgroundColor: "green !important"
  }
});

/**
 * Renders cell.
 * @param row index of the row.
 * @param col index of the column
 * @param value object value of the cell.
 * @returns {JSX.Element}
 */
const Cell = ({row, col, value}) => {
  const {gridArray} = useSelector(({grids}) => grids);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClick = () => {
    dispatch(updateGridArray(gridArray, row, col));
  };

  return (
    <Grid
      item
      className={clsx(classes.cell, {
        [classes.animate]: value.isReset
      })}
      style={{
        backgroundColor: darken("#FFFFE0", value.value ? value.value / 100 : 0)
      }}
      onClick={handleClick}
    >
      {value.value ? value.value : ""}
    </Grid>
  );
};

export default Cell;

Cell.prototype = {
  value: PropTypes.object.isRequired,
  col: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired
};
