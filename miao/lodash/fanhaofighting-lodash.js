var fanhaofighting = function () {
  return {
    compact, chunk, difference, differenceBy, drop, dropRight, isMatch, matches, last, bindAll,
    flatten, flattenDepth, flattenDeep, identity, iteratee, property, get, toPath,orderBy, sortBy, isArray
  }

  /**
   * 将数组一层展开
   */
  function flatten(arr) {
    return flattenDepth(arr)
  }

  /**
   * 将数组深层展开
   * @param {*} arr 
   */
  function flattenDeep(arr) {
    return flattenDepth(arr, Infinity)
  }


  /**
   * 按照给定深度展开数组
   * @param {*} arr 
   * @param {*} depth 
   */
  function flattenDepth(arr, depth = 1) {
    if (depth == 0) {
      return arr.slice();
    }
    let res = []
    arr.forEach(it => {
      if (Array.isArray(it)) {
        res.push(...flattenDepth(it, depth - 1))
      } else {
        res.push(it)
      }
    });
    return res
  }

  /**
   * 
  返回数组最后一个元素
   */
  function last(arr) {
    const length = arr === null ? 0 : arr.length
    return length ? arr[length - 1] : undefined
  }

  function matches(src) {
    // return bind(isMatch, null, _, src)
    // src是否是obj的子集
    return function (obj) {
      return isMatch(obj, src)
    }
  }

  /**
   * 在objecet和source进行部分深度对比
   * @param {*} obj 
   * @param {*} src 
   */
  function isMatch(obj, src) {
    for (let key in src) {
      // 分为数组和对象两种情况, 注意null的情况
      if (typeof src[key] == 'object' && src[key] !== null) {
        if (!isMatch(obj[key], src[key])) {
          return false
        }
      } else {
        if (obj[key] != src[key]) {
          return false
        }
      }
    }
    return true
  }

  function dropRight(arr, n = 1) {
    var length = arr.length
    return n > arr.length ? [] : arr.slice(0, arr.length - n)
  }

  function drop(arr, n = 1) {
    return arr.slice(n)
  }


  // todo
  /**
   * 
   * @param {*} arr 
   * @param  {...any} values 
   */
  function differenceBy(arr, ...values) {
    if (Array.isArray(values)) {
      return difference(arguments)
    }
    let pridicate = values.pop
    if (typeof(pridicate) == 'String') {
      return arr.filter(item => values.every(value => !value[pridicate].includes(item[pridicate])))
    } else {
      return arr.filter(item => values.every(value => !pridicate(value).includes(pridicate(item))))
    }
    
  }

  /**
   * 
   * @param {*} arr 
   * @param  {...any} values 
   */
  function difference(arr, ...values) {
    return arr.filter(item => values.every(value => !value.includes(item)))
  }

  /**
   * 返回接收到的第一个参数
   * @param  {...any} args 
   */
  function identity(...args) {
    return arguments[0]
  }

  // todo
  /**
   * 创建一个返回给定对象的 path 的值的函数。
   * @param {*} path 
   */
  function property(path) {
    return function (obj) {
      return get(obj, path)
    }
  }

  function iteratee() {

  }

  /**
   * 判断输入的对象是否是array
   * @param {*} obj 
   */
  function isArray(obj) {
    return Array.isArray(obj)
  }

  /**
   * 根据给定属性路径返回对象的属性, 不存在则返回defaultValue
   * @param {*} object 
   * @param {*} path 
   * @param {*} defaultValue 
   */
  function get(object, path, defaultValue) {
    let pathArr
    // path可能为数组或者字符串
    if (isArray(path)) {
      pathArr = path.slice()
    } else {
      pathArr = toPath(path)
    }
    for (key of pathArr) {
      if (object === undefined) {
        return defaultValue
      }
      object = object[key]
    }
    return object
  }

  // todo
  function sortBy(arr, func) {

  }

  /**
   * 
   * @param {*} arr 
   * @param {*} func 
   */
  function orderBy(arr, funcs, orders = []) {
    // 利用归并排序的稳定性, 依次排序
    return mergeSort(arr, func)
  }

  function toCompareFunc(funcs, orders) {

  }

  /**
   * 将字符串形式路径值如'a.b.c','a[0].b.c'转换为数组
   * @param {*} val 
   */
  function toPath(val) {
    // 正则模式要写全a[0][c]要考虑
    return val.split(/\.|\[|\]\.|\]\[/g)
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

  /**
   * 绑定一个对象的方法到对象本身，覆盖现有的方法。 
   * @param {*} object 
   * @param {*} names 
   */
  function bindAll(object, methodNames) {
    if (Array.isArray(methodNames)) {
      methodNames.forEach(methodName => object[methodName] = object[methodName].bind(object))
    } else {
      object[methodNames] = object[methodNames].bind(object)
    }
  }

  /**
   * 归并排序, 稳定的排序
   * @param {*} arr 
   * @param {*} compare 
   */
  function mergeSort(arr, compare) {
    if (compare == undefined) {
      compare = function (a, b) {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return 0;
        } else {
          return -1;
        }
      }
    }

    if (arr.length < 2) {
      return arr.slice()
    }

    let mid = arr.length >> 1
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    mergeSort(left, compare)
    mergeSort(right. compare)


    let i = 0
    let j = 0
    let k = 0
    while (i < left.length && j < right.length) {
      if (compare(left[i], right[j]) < 0) {
        arr[k++] = left[i++]
      } else {
        arr[k++] = right[j++]
      }
    }
    while (i < left.length) {
      arr[k++] = left[i++]
    }
    while (j < right.length) {
      arr[k++] = right[i++]
    }
    return arr
  }

}();

