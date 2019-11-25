var fanhaofighting = function () {
  return {
    compact, chunk, difference, differenceBy, drop, dropRight, dropWhile, dropRightWhile, isMatch, matches, matchesProperty, last, bindAll,
    flatten, flattenDepth, flattenDeep, identity, iteratee, property, get, toPath, orderBy, sortBy, isArray,
    differenceWith, isEqual, isObject, isObjectLike, negate, isString, isFunction, isNaN, isNumber, isPlainObject, fill, findIndex,
    findLastIndex, fromPairs, toPairs, head, indexOf, initial, intersection, join, lastIndexOf, pull, forOwn, reverse, curry,
    sortedIndex, zip, unzip, cloneDeep, countBy, every, filter, find, flatMap, flatMapDepth, flatMapDeep, forEach, groupBy, map,
    isBoolean
  }


  /**
   * 检查 value 是否是原始 boolean 类型或者对象。
   * @param {*} value 
   */
  function isBoolean(value) {
    if (value === true || value === false) {
      return true
    }
    return false
  } 
  /**
   * 创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 
   * iteratee（迭代函数）调用3个参数：
   * @param {Array|Object} collection 
   * @param {*} predicate 
   * @return {Array}
   */
  function map(collection, predicate) {
    let res = [];
    predicate = iteratee(predicate)
    // Object.keys(collection)， collection 为数组时， 返回["0", "1"...]， 要单独讨论
    if (Array.isArray(collection)) {
      return collection.map((value, index) => predicate(value, index, collection));
    } else {
      return Object.keys(collection).map(key =>
        predicate(collection[key], key, collection),
      );
    }
  }

  /**
   * 创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。 
   * 分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的。
   * 每个键对应的值负责生成 key 的元素组成的数组。iteratee 调用 1 个参数： (value)。
   * @param {(Array|Object)} collection 
   * @param { (Array|Function|Object|string)} predicate 
   */
  function groupBy(collection, predicate) {
    predicate = iteratee(predicate)
    let map = {}
    for (let key in Object.keys(collection)) {
      let mapKey = predicate(collection[key])
      if (map[mapKey]) {
        map[mapKey].push(collection[key])
      } else {
        map[mapKey] = [collection[key]]
      }
    }
    return map
  }

  // todo
  /**
   * 调用 iteratee 遍历 collection(集合) 中的每个元素， 
   * iteratee 调用3个参数： (value, index|key, collection)。 
   * 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。
   * @param {(Array|Object)} collection 
   * @param {Function} predicate 
   * @returns {Array|Object} 返回 `collection`.
   */
  function forEach(collection, predicate) {
    predicate = iteratee(predicate)
    for (let key in Object.keys(collection)) {
      if (predicate(collection[key], key, collection) === false) {
        break
      }
    }
    return collection
  }

  /**
   * 这个方法类似 _.flatMap 不同之处在于， _.flatMapDeep 会继续扁平化递归映射的结果。
   * @param {*} collection 
   * @param {*} predicate 
   */
  function flatMapDeep(collection, predicate) {
    return flatMapDepth(collection,predicate, Infinity)
  }

  /**
   * 该方法类似 _.flatMap，不同之处在于， 
   * _.flatMapDepth 会根据指定的 depth（递归深度）继续扁平化递归映射结果。
   * @param {*} collection 
   * @param {*} predicate 
   * @param {*} depth 
   */
  function flatMapDepth(collection, predicate, depth) {
    predicate = iteratee(predicate);
    let res = [];
    let keys = Object.keys(collection);
    for (let key of keys) {
      res.push(predicate(collection[key]));
    }
    return flattenDepth(res, depth);
  }

  /**
   * 
   * @param {*} collection 
   * @param {*} predicate 
   */
  function flatMap (collection, predicate) {
    predicate = iteratee(predicate);
    let res = [];
    let keys = Object.keys(collection);
    for (let key of keys) {
        res.push(...predicate(collection[key]));
    }
    return res;
  }

  /**
   * 遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。
   * predicate（断言函数）调用3个参数： (value, index|key, collection)。
   * @param {*} collection 
   * @param {*} predicate 
   * @param {*} fromIndex 
   */
  function find(collection, predicate, fromIndex = 0) {
    predicate = iteratee(predicate)
    let keys = Object.keys(collection)
    for (let i = fromIndex; i < keys.length; i++) {
      if (predicate(collection[keys[i]])) {
        return collection[keys[i]]
      }
    }
    return undefined
  }

  /**
   * 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 
   * predicate（断言函数）调用三个参数：(value, index|key, collection)。
   */
  function filter(collection, predicate) {
    predicate = iteratee(predicate)
    let res = [];
    for (let key of Object.keys(collection)) {
        if (predicate(collection[key], key, collection)) {
            res.push(collection[key]);
        }
    }
    return res
  }

  /**
   * 创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，
   * 每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（迭代次数）。 
   * iteratee 调用一个参数：(value)。
   * @param {*} obj 
   * @param {*} predicate 
   */
  function countBy(obj, predicate) {
    let map = {}
    predicate = iteratee(predicate)
    for (let key of Object.keys(obj)) {
      let mapKey = predicate(obj[key])
      if (map[mapKey]) {
        map[mapKey]++
      } else {
        map[mapKey] = 1
      }
    }
    return map
  }

  /**
   * 通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。
   * 一旦 predicate（断言函数） 返回假值，迭代就马上停止。
   * predicate（断言函数）调用三个参数： (value, index|key, collection)。

   * @param {*} collection 
   * @param {*} predicate 
   */
  function every(collection, predicate) {
    predicate = iteratee(predicate)
    let entries = Object.entries(collection);
    return entries.reduce((res, entry) => {
      return res && predicate(entry[1], entry[0], collection)
    }, true)
  }

  /**
   * 使用递归深度克隆一个对象
   * 测试集中对象有可能是一个值, 一个数组, 一个JSON对象, 一个正则
   * @param {*} obj 
   */
  function cloneDeep(obj) {
    // todo 正则, date类没有考虑
    // 防止环形引用
    let cacheMap = new Map()

    return clone(obj)

    function clone(obj) {
      if (cacheMap.has(obj)) {
        return cacheMap.get(obj)
      }
      // 判断对象是否正则类
      if (obj instanceof RegExp) {
        return new RegExp(obj)
      }
      // 判断对象是否是Date类
      if (obj instanceof Date) {
        return new Date(obj)
      }
      let ret
      // isArray要在isObject前判断
      if (isArray(obj)){
        ret = obj.slice()
        // obj为普通值
      } else if (isObject(obj)) {
        ret = {}
        cacheMap.set(obj, ret)
        for (let key in obj) {
          ret[key] = clone(obj[key])
        }
      } else {
        ret = obj
      }
      return ret
    }
  }

  /**
   * 这个方法类似于 _.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。
   * （返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）
   * @param  {...any} arr
   */
  function unzip(arr) {
    let res = new Array(arr[0].length).fill(0).map(item => item = new Array(arr.length))
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res[0].length; j++) {
        res[i][j] = arr[j][i]
      }
    }
    return res
  }

  /**
   * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
   * @param {*} arr 
   */
  function zip(...arrs) {
    // 输入的字数组可能长度不一, 取最大长度的子数组
    let maxLen = arrs.reduce((prev, curArr) => Math.max(prev, curArr.length), 0)
    let res = new Array(maxLen).fill(0).map(it => it = new Array(arrs.length))
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res[0].length; j++) {
        res[i][j] = arrs[j][i]
      }
    }
    return res
  }

  /**
   * 使用二分查找来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
   * @param {*} arr 
   * @param {*} value 
   */
  function sortedIndex(arr, value) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
      let mid = (left + right) / 2 | 0
      if (arr[mid] >= value) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }

  /**
   * 创建一个函数，该函数接收 func 的参数，要么调用func返回的结果，如果 func 所需参数已经提供，
   * 则直接返回 func 所执行的结果。或返回一个函数，接受余下的func 参数的函数，
   * 可以使用 func.length 强制需要累积的参数个数。
   * @param {*} func 
   * @param {*} length 
   */
  function curry(func, length = func.length) {
    return function(...args) {
      if (args.length >= length) {
        return func(...args)
      } else {
        return curry(func.bind(null, ...args), length - args.length)
      }
    }
  }
  /**
   * 使用 iteratee 遍历自身的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。
   * @param {*} obj 
   * @param {*} func 
   */
  function forOwn(obj, func) {
    func = iteratee(func)
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (func(obj[key], key, obj) === false) {
          break
        }
      }
    }
    return obj
  }

  /**
   * 反转数组
   * @param {} arr 
   */
  function reverse(arr) {
    let i = 0
    let j = arr.length - 1
    while (i < j) {
      let temp = arr[i]
      arr[i++] = arr[j]
      arr[j--] = temp
    }
    return arr
  }

  /**
   * 类似indexOf ，区别是它是从右到左遍历array的元素。
   * @param {*} array 
   * @param {*} value 
   * @param {*} fromIndex 
   */
  function lastIndexOf(arr, value, fromIndex=arr.length-1) {
    for (let i = fromIndex; i >= 0; i--) {
      if(isEqual(arr[i], value)) {
        return i
      }
    }
    return -1
  }

  /**
   * 移除数组array中所有和给定值相等的元素
   * @param {*} arr 
   * @param {*} values 
   */
  function pull(arr, ...values) {
    let judgeValues = [...values]
    return arr.filter(item => !judgeValues.includes(item))
  }

  /**
   * 将 array 中的所有元素转换为由 separator 分隔的字符串。
   * @param {*} arr 
   * @param {*} separator 
   */
  function join(arr, separator=',') {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
        // 防止出现数值计算
        res += '' + arr[i] + separator
      } else {
        res += '' + arr[i]
      }
    }
    return res
  }

  /**
   * 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（可以理解为给定数组的交集）
   * @param {*} arrs 
   */
  function intersection(...inputArrs) {
    let arrs = [...inputArrs]
    let res = arrs[0]
    for (let i = 1; i < arrs.length; i++) {
      let compareArr = arrs[i]
      res = res.filter(item => compareArr.includes(item))
    }
    return res
  }

  /**
   * 获取数组array中除了最后一个元素之外的所有元素（去除数组array中的最后一个元素）。
   * @param {*} arr 
   */
  function initial(arr) {
    return arr.slice(0, arr.length - 1)
  }


  /**
   * 返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
   * @param {*} arr 
   * @param {*} value 
   * @param {*} fromIndex 
   */
  function indexOf(arr, value, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex = arr.length - 1 > -fromIndex ? arr.length - 1 -fromIndex : 0
    }
    for (let i = fromIndex; i < arr.length; i++) {
      if (isEqual(arr[i], value)) {
        return i
      }
    }
    
    return -1
  }
  /**
   * 返回数组的第一个元素
   * @param {*} arr 
   */
  function head(arr) {
    return arr[0]
  }
  /**
   * 创建一个object对象自身可枚举属性的键值对数组。这个数组可以通过 _.fromPairs撤回。如果object 是 map 或 set，返回其条目。
   */
  function toPairs(obj) {
    let res = []
    for (let [key, val] of Object.entries(obj)) {
      res.push([key, val])
    }
    return res
  }
  
  /**
   * 与 _.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象
   * @param {*} pairs 
   */
  function fromPairs(pairs) {
    let obj = {}
    for (let [key, val] of pairs) {
      obj[key] = val
    }
    return obj
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
        // 递归在这一层发生, 不是数组不用递归, 所以flattenDepth可以用depth为Infinity
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
   * 这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素。
   * @param {*} arr 
   * @param {*} predicate 
   * @param {*} fromIndex 
   */
  function findLastIndex(arr, predicate, fromIndex = arr.length - 1) {
    predicate = iteratee(predicate)
    for (let i = fromIndex; i >= 0;i--) {
      if (predicate(arr[i]) === true) {
        return i
      }
    }
    return -1
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
      if (predicate(arr[i]) === true) {
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
    return arr
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
    return proto === null || proto.constructor === Object
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

  /**
   *创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用1个参数： (value)。
   * @param {} collection 
   * @param {*} iteratees 
   */
  function sortBy(collection, iteratees) {
    return orderBy(collection, iteratees)
  }

  /**
   * 此方法类似于 _.sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。 
   * 如果没指定 orders（排序），所有值以升序排序。 否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。
   * @param {*} arr 
   * @param {*} func 
   */
  function orderBy(collection, iteratees, orders = []) {
    let comapre = toCompareFunc(iteratees, orders)
    return collection.sort((obj1, obj2) => comapre(obj1, obj2))
  }

  /**
   * 返回一个函数, 讲一组比较函数iteratees和比较顺序order合并成一个函数返回, 用于sortBy和OrderBy方法的实现
   * @param {} iteratees 
   * @param {*} orders 
   */
  function toCompareFunc(iteratees, orders) {
    let funcs = iteratees.map(item => iteratee(item))
    return (obj1, obj2) => {
      for (let i = 0; i < funcs.length; i++) {
          // orders为空数组, 则
          const flag = orders[i] === "desc" ? -1 : 1;
          // 只对大于和小于的两种情况返回值(所以不能用三目运算符), 等于则继续进行for循环
          if (funcs[i](obj1) > funcs[i](obj2)) {
            return flag
          }
          if (funcs[i](obj1) < funcs[i](obj2)) {
            return -flag
          }
      }
      return 0;
    };
  }

  /**
   * 将字符串形式路径值如'a.b.c','a[0].b.c'转换为数组
   * @param {*} val 
   */
  function toPath(val) {
    // 正则模式要写全, a.b.0.c[fooo][bar].d
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


}();

