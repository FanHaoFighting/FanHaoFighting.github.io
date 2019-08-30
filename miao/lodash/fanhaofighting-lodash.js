var fanhaofighting = function () {
  return {
    compact, chunk, difference, differenceBy, drop, dropRight, dropWhile, dropRightWhile, isMatch, matches, matchesProperty, last, bindAll,
    flatten, flattenDepth, flattenDeep, identity, iteratee, property, get, toPath, orderBy, sortBy, isArray,
    differenceWith, isEqual, isObject, isObjectLike, negate, isString, isFunction, isNaN, isNumber, fill, findIndex
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

  /**
   * 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。 如果是返回 true ，否则返回 false 。
   * @param {*} path 
   * @param {*} srcValue 
   */
  function matchesProperty(path, srcValue) {
    return function (obj) {
      let func = property(path)
      return isEqual(func(obj), srcValue)
    }
  }

  /**
   * 返回一个深比较的方法, 比较给定的对象和 source 对象。 如果给定的对象拥有相同的属性值返回 true，否则返回 false。
   * @param {*} src 
   */
  function matches(src) {
    // return bind(isMatch, null, _, src)
    // src是否是obj的子集
    return function (obj) {
      return isMatch(obj, src)
    }
  }

  /**
   *执行一个深度比较，判断 object 是否是 source 的超集。 
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

  /**
   * 该方法类似 _.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
   * @param {*} arr 
   * @param {*} predicate 
   * @param {*} fromIndex 
   */
  function findIndex(arr, predicate, fromIndex = 0) {
    predicate = iteratee(predicate)
    for (let i = fromIndex; i < arr.length;i++) {
      if (predicate === true) {
        return i
      }
    }
    return -1
  }

  /**
   * 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
   *  这个方法会改变 array（不是创建新数组）。
   * @param {*} arr 
   * @param {*} value 
   * @param {*} start 
   * @param {*} end 
   */
  function fill(arr, value, start = 0, end = arr.length) {

    for (let i = start; i < end; i++) {
      arr[i] = value
    }
  }

  /**
   * 创建一个针对断言函数 func 结果取反的函数。
   * @param {*} pridicate 
   */
  function negate(pridicate) {
    return function (...arg) {
      return !pridicate(...arg)
    }
  }

  /**
   * 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
   * 这个过程从右往左开始
   * @param {*} arr 
   * @param {*} pridicate 
   */
  function dropRightWhile(arr, pridicate) {
    // pridicate不是函数的时候将pridicate转化为一个函数
    pridicate = iteratee(pridicate)

    for (let i = arr.length - 1; i >= 0; i--) {
      if (pridicate(arr[i]) === false) {
        return arr.slice(0, i + 1)
      }
    }
  }

  /**
   * 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
   * @param {*} arr 
   * @param {*} n 
   */
  function dropRight(arr, n = 1) {
    return n > arr.length ? [] : arr.slice(0, arr.length - n)
  }

  /**
   * 创建一个切片数组，去除array从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。
   * @param {*} arr 
   * @param {*} pridicate 
   */
  function dropWhile(arr, pridicate) {
    pridicate = iteratee(pridicate)
    for (let i = 0; i < arr.length; i++) {
      if (pridicate(arr[i]) === false) {
        // 注意, 是去除!!
        return arr.slice(i)
      }
    }
  }

  /**
   * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
   * @param {*} arr 
   * @param {*} n 
   */
  function drop(arr, n = 1) {
    return arr.slice(n)
  }

  /**
   * 判断两个对象是否相等
   * @param {*} value 
   * @param {*} other 
   */
  function isEqual(value, other) {
    if (value === other) {
      return true
    }
    // NaN == NaN为false
    if (isNaN(value) && isNaN(other)) {
      return true
    }
    if (isObjectLike(value) && isObjectLike(other)) {
      let keys1 = Object.keys(value)
      let keys2 = Object.keys(other)
      if (keys1.length !== keys2.length) {
        return false
      }
      for (const key of keys1) {
        if (other[key] !== undefined) {
          if (isEqual(value[key], other[key]) === false) {
            return false
          }
        } else {
          return false
        }
      }
      return true
    }
    return false
  }

  /**
     * 判断一个值是否是 NaN
     * @param {*} value
     * @returns {boolean}
     */
  function isNaN(value) {
    // 如果是 new Number()构造出的数字, 先将其转为原始类型的数字
    return isNumber(value) && +value !== +value 
  }

  /**
   * 判断一个值是否是 Number 类型. Infinity -Infinity NaN 都返回 true
   * @param {*} value 
   */
  function isNumber(value) {
    return typeof value === 'number' || (isObjectLike(value) && nativeToString(value) === '[object Number]')
  }

  /**
   *  即原生的 ES 方法 Object.prototype.toString
   * @param {*} val 
   */
  function nativeToString(value) {
    return Object.prototype.toString.call(value);
  }

  /**
   * 判断从参数是否为object, null不算
   * @param {*} value 
   */
  function isObject(value) {
    if ((typeof value === 'object' || typeof value == 'function') && value !== null) {
      return true
    }
    return false
  }

  /**
   * 判断值是狭义上的对象, 即 字面量对象, Object 构造函数创建出的对象 或 __proto__ 为 null 的对象(object.create(null))
   * @param {*} value 
   */
  function isPlainObject(value) {
    let proto = Object.getPrototypeOf(value)
    return proto === null || proto.constructor === object
  }

  /**
   * 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。
   * @param {*} value 
   */
  function isObjectLike(value) {
    if (typeof value === 'object' && value !== null) {
      return true
    }
    return false
  }


  /**
   * 这个方法类似 _.difference ，除了它接受一个 comparator （比较器），它调用比较array，values中的元素。
   *  结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。
   * @param {*} arr 
   * @param  {...any} values 
   */
  function differenceWith(arr, ...values) {
    let comparator = values.pop()
    // 要比较的是多个数组, 每个数组都是筛选条件
    return arr.filter(arrVal => flatten(values).every(value => !comparator(value, arrVal)))
  }

  /**
   *  调用array 和 values 中的每个元素以产生比较的标准。 结果值是从第一数组中选择。
   * @param {*} arr 
   * @param  {...any} values 
   */
  function differenceBy(arr, ...values) {
    // 判断values中是否含有iteratee
    if (Array.isArray(values[values.length - 1])) {
      return difference(arr, ...values)
    }
    let pridicate = values.pop()
    if (typeof pridicate == 'string') {
      return arr.filter(item => values.every(value => !value.map(it => it[pridicate]).includes(item[pridicate])))
    } else {
      return arr.filter(item => values.every(value => !value.map(it => pridicate(it)).includes(pridicate(item))))
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

  /**
    * Creates a function that invokes func with the arguments of the created function. 
    * 如果 func 是属性名, 返回一个 返回其属性值 的函数
    * 如果 func 是对象或数组, 返回一个 判断对象/数组 成员是否包含于参数的 的函数
    * func 数组的第一项被当成对象的 key 解析, 第二项被当成对象的值进行解析. 会忽略多余的参数
    * @param {string|Array|object} value
    * @returns {Function} 
    */
  function iteratee(value) {
    if (isString(value)) {
      return property(value)
      // Array也是object对象, 所以在判断是否为object前判断
    } else if (isArray(value)) {
      return matchesProperty(value[0], value[1])
      // 为object的情况(排除null和function)
    } else if (isObjectLike(value)) {
      return matches(value)
    }

    return value
  }

  function isString(obj) {
    if (typeof obj === 'string') {
      return true
    }
    return false
  }

  function isFunction(obj) {
    if (typeof obj == 'function') {
      return true
    }
    return false
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
  function get(object, path, defaultValue = undefined) {
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
    for (let i = 0; i < funcs.length; i++) {
      let func
      if (typeof funcs[i] == 'function') {
        func = funcs[i]
      } else if (typeof funcs[i] == 'String') {
        func = property(funcs[i])
      }
      if (orders.length == 0 || orders[i] == 'asc') {
        mergeSort(arr, func)
      } else {
        mergeSort(arr, negate(func))
      }
    }
    return arr
  }

  function toCompareFunc(funcs, orders) {
    return function (obj1, obj2) {
      let res1
      let res2
      for (let i = 0; i < funcs.length; i++) {
        let func
        if (typeof funcs[i] == 'function') {
          func = funcs[i]
        } else if (typeof funcs[i] == 'String') {
          func = property(funcs[i])
        }
        obj1 = orders === "desc" ? negate(func)(obj1) : func(obj1)
        obj2 = orders
      }
    }
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
    mergeSort(right.compare)


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

