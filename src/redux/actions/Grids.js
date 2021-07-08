import {
  CLEAR_RESET_VALUE,
  SET_GRID_ARRAY
} from "redux/constants/ActionTypes.js";

/**
 * Updates the grids 2d array. Increments each cell value on the same row and the same column that clicked cell.
 * Checks the Fibonacci sequences, if exists resets them.
 * @param array to be updated.
 * @param rowIndex row index of the cell that clicked.
 * @param colIndex column index of the cell that clicked.
 * @returns {(function(*): void)|*}
 */
export const updateGridArray = (array, rowIndex, colIndex) => {
  array = array.map((row, i) =>
    row.map((cell, j) => {
      if (i === rowIndex || j === colIndex) {
        return {
          ...cell,
          value: cell.value ? cell.value + 1 : 1
        };
      }
      return cell;
    })
  );
  array = findAllFibonacciArrays(array);
  return dispatch => {
    dispatch({type: SET_GRID_ARRAY, payload: array});
    setTimeout(() => {
      dispatch({type: CLEAR_RESET_VALUE});
    }, 100);
  };
};

/**
 * Finds and resets all Fibonacci 5 length long sequences.
 * @param array to be searched.
 * @returns [array] updated array.
 */
const findAllFibonacciArrays = array => {
  array = slidingWindow(array, 5);
  array = transpozeArray(slidingWindow(transpozeArray(array), 5));

  return array;
};

/**
 * Transpoze array.
 * @param array to be transpozed.
 * @returns [array] transpozed array.
 */
const transpozeArray = array => {
  return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
};

/**
 * Traverse array using sliding window with the given length. Reset Fibonacci sequences.
 * @param array to be traversed.
 * @param length of the sliding window.
 * @returns [array] updated array.
 */
const slidingWindow = (array, length) => {
  return array.map(row => {
    for (let i = 0; i < row.length - length; i++) {
      if (checkIfFibonacci(row.slice(i, i + length))) {
        let temp = [];
        row = temp.concat(
          row.slice(0, i),
          new Array(length).fill({value: null, isReset: true}),
          row.slice(i + length, row.length)
        );
      }
    }
    return row;
  });
};

/**
 * Check if the array is Fibonacci.
 * @param arr to be checked.
 * @returns true if array is Fibonacci
 * @retuns false if array is not Fibonacci
 */
const checkIfFibonacci = arr => {
  if (
    !arr[0].value ||
    !arr[1].value ||
    !arr[2].value ||
    !arr[3].value ||
    !arr[4].value
  ) {
    return false;
  } else {
    if (
      arr[0].value + arr[1].value === arr[2].value &&
      arr[1].value + arr[2].value === arr[3].value &&
      arr[2].value + arr[3].value === arr[4].value
    ) {
      return true;
    } else
      return (
        arr[4].value + arr[3].value === arr[2].value &&
        arr[3].value + arr[2].value === arr[1].value &&
        arr[2].value + arr[1].value === arr[0].value
      );
  }
};
