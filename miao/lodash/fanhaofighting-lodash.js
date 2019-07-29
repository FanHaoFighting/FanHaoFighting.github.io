var fanhaofighting = function () {
  return { compact, chunk }


  
  function difference(arr, ...values) {
    return arr.filter(item => values.every(value => !value.includes(item)))
  }


  /**
   * Creates an array with all falsey values removed. The values `false`, `null`,
   * `0`, `""`, `undefined`, and `NaN` are falsey.
   * @param {*} ary 
   */
  function compact(ary) {
    // filter返回布尔值, it中的null, undefined, ""会被返回false
    return ary.filter(it => it)
  }

  /**
   * Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining elements
   * @param {*} arr
   */
  function chunk(arr, size = 1) {
    let res = [];
    for (let i = 0; i < arr.length;) {
      if (i + size - 1 < arr.length && size > 1) {
        let temp = [];
        let count = size;
        while (count--) {
          temp.push(arr[i]);
          i++;
        }
        res.push(temp)
      } else {
        res.push([arr[i]]);
        i++
      }
    }
    return res;
  }


}();

