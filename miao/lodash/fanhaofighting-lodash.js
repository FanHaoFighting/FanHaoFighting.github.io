
var fanhaofighting = function () {
  return {compact, chunk}


  function compact(ary) {
    return ary.filter(it => it)
  }



  /**
   * Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining elements
   * @param {*} array 
   */
  function chunk(array) {
    size = Math.max(size, 0)
    const length = array == null ? 0 : array.length

    if (!length || size < 1) {
      return []
    }

    let index = 0
    let resIndex = 0
    var resIndex = new Array(Math.ceil(length / size))

    while (index < length) {
      result[resIndex++] = slice(array, index, (index += size))
    }
    
    return result
  }

  
}

