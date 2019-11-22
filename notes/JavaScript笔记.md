###计算机基础知识
* 整数在计算机中的表示
    正数直接表达
    负数用补码表示

    用补码表示的目的是为了把减法转换为加法。

    原理类似于汽车的里程计或钟表的表盘
    即首尾相连的循环结构
    如对于表盘来说，向前拨动3个刻度的指针，相当于向后拨动9个刻度的指针
    反过来，向后拨动5个刻度相当于向前拨动7个刻度
    于是减5就可以转换为加7
    于是-5用7来表达。

    二进制中也只是周期不一样，周期为2的n次方
    最终的效果即为最左边1bit相当于符号位
    负数用补码表示，补码减1得到反码，反码取反得到原码（由二进制转回十进制时）
    由十进制转入二进制时，先写原码，然后原码取反得到反码，反码加1得到补码，即为负数在内存中的表示。

    |按位或
    &按位与
    ^按位异或
    ~按位非
    >>按位右移（保留符号位，即左边补1）
    >>>按位右移（不保留符号位，左边补0）
    <<按位左移（右边总是补0）


### 加减乘除
    * 乘法: 被分解为左移累加。如x * y, 可以理解为x*y,(x)*(2^n0+2^n1+2^n2+2^n3+2^n4)=(x*2^n0)+(x*2^n1)+(x*2^n2)+(x*2^n3)+(x*2^n4)+......即(x左移n0)+(x左移n1)+(x左移n2)+(x左移n3)+(x左移n4). x对y的二进制数逐位位移, 最后再累加起来
    * 除法: 类比手算除法, 一位一位得到结果. 

### 浮点数
    * 单精度4字节32bit, 双精度8字节64bit
    * 十进制小数转换成二进制小数采用"乘2取整，顺序排列"法。具体做法是：用2乘十进制小数，可以得到积，将积的整数部分取出，再用2乘余下的小数 部分，又得到一个积，再将积的整数部分取出，如此进行，直到积中的小数部分为零，或者达到所要求的精度为止.
    参考: https://www.cnblogs.com/xkfz007/articles/2590472.html
    * 十进制小数(含整数部分)将转换得来的整数与小数部分拼接起来, 类比十位数的科学计数法转成科学计数法的形式
    * 二进制的科学计数法第一位永远是1

    * x.toPrecision(位数)可以精确地得出一个数在内存中的存储数值
    * 二进制转十进制后小数点16位后就精度不够了. 2^53大约为10^15.9, 所以说16位后信息表达不精准
    * toFixed是四舍五入的, 有些数如(3.155)toFixed(2)却为3.15, 因为3.155在内存中的保存方式为3.154.......
    * +-INFINITY 和NaN在内存中都表示为一个数, 但是并不参与运算
    * js总表达的最大进去整数的值为2^53 -1, 表达的最大的书Number.MAX_VALUE, 
    * js中午单精度浮点数, 
    * 符号位占1bit, 指数11bit, 底数52bit, 真实指数范围为-1023到1024之间, 存入指数位的时候用+1023后的二进制存入(不是源码或者补码),范围为-1023到1024之间这是为了给定两个浮点数时从左往右逐位依次比较就可以较快地得到浮点数的大小. 
    * 一般来说, js中表示的数字最多保留17位有效数字
    * js会转换为32位整数, 再位运算?
    * 浮点数只保留整数位后位运算
    * -1到1之间是浮点数表示精度最大的地方
    * 








###
`
    document.write()// 文档里解析完成</html>, 解析流会关闭
// 重新write会导致重新打开一个解析流, 之前的内容会被完全覆盖掉
document.open() //打开解析流
document.close() //关闭解析流
`

transform属性是在布局完成之后再作用的

### 
js中所有位运算只能整数才能参与, 浮点数参与时, 保留整数部分
js中浮点数的范围远高于32位


# 布尔代数与逻辑电路

## 布尔代数

### 布尔代数其实就是命题逻辑的【形式化表达】

* 命题逻辑
	* 真命题
	* 假命题
	* 逆命题
	* 否命题
	* 逆否命题等

* 布尔代数中只有两个值，即真和假，一般表示为0和1，对应于命题逻辑里命题的真和假
* 当使用变量表示值的时候，一般使用【大写】的单个字母，如A，B等
* 布尔代数中的两个值可以进行如下简单的【基本运算】
* 逻辑与
	* 0 & 0 = 0
	* 0 & 1 = 0
	* 1 & 0 = 0
	* 1 & 1 = 1
* 或
	* 0 | 0 = 0
	* 0 | 1 = 1
	* 1 | 0 = 1
	* 1 | 1 = 1
* 非
	* !0 = 1
	* !1 = 0

* 常见非基本运算：
	* 异或
    相同为0，不同为1
		* 0 ^ 1 = 1
		* 1 ^ 0 = 1
		* 0 ^ 0 = 0
		* 1 ^ 1 = 0
	* 同或
    相同为1，不同为0
		* 异或的反运算
		* 0 ^ 1 = 0
		* 1 ^ 0 = 0
		* 0 ^ 0 = 1
		* 1 ^ 1 = 1
	* 与非
		* 先与后非
		* 0 NAND 0 = 1
		* 0 与非 1 = 1
		* 1 与非 0 = 1
		* 1 与非 1 = 0
	* 或非
		* 先或后非
		* 0 或非 0 = 1
		* 0 或非 1 = 0
		* 1 或非 0 = 0
		* 1 或非 1 = 0
		* 理论上，所有的逻辑运算都可以仅通过与非运算表达
			* https://zh.wikipedia.org/wiki/%E4%B8%8E%E9%9D%9E%E9%97%A8
      
* 逻辑非的多种表达方式：
	* V + 表示或   A+B
	* 反V AB 表示与   AB
	* 值上方加一横、或者A'、或者!A、或者﹃A，表示非A
* 通常为了方便表达、理解和书写，纯文本表达时，用加号（+）表示或，用乘号（*）表示与（有时为了方便也可省略点乘号直接写成AB），用叹号或单引号（!，'）表示非：A'，!A。手写时用上方加横表示非

* 常用运算法则(通过集合是思想去理解)
	* 幂等律
		* A + A = A
		* A * A = A
	* 有界律
		* A + 0 = A
		* A * 1 = A
		* A * 0 = 0
		* A + 1 = 1
	* 交换律
		* A + B = B + A
		* AB = BA
	* 结合律
		* A+B+C = A + (B + C) = (A + B) + C
		* ABC = A(BC) = (AB)C
	* 还原律
		* A = !!A
	* 摩根定律/反演律
		* !(A * B) = !A + !B
		* !(A + B) = !A * !B
	* 分配律
		* A * (B + C) = (A * B) + (A * C)
		* A + (B * C) = (A + B) * (A + C)
	* 其它 http://blog.csdn.net/yueniaoshi/article/details/8040119
* 逻辑表达式的真值表
	* 即把一个逻辑表达式的【所有变量的所有可能】及【此时表达式的值】全部列出来的一张表
	* A * B = ？
	* 0   0   0
	* 0   1   0
	* 1   0   0
	* 1   1   1
	* 例：
		* 用真值表证明前面各个运算法则
		* 反演律  也可以通过真值表反推运算规律
		* 分配律  
* 逻辑函数
	* 由逻辑变量组成的表达式的值
		* F = A * B + C
		* F(A,B,C) = A * B + C
* 如何由真值表反推出逻辑函数
* 如何化简逻辑函数
* 卡诺图
	* 有时真值表写成一列比较麻烦
	* 我们可以把真值表写成二维的
	* 卡诺图真正的目的是为了化简更方便
	* 例


# 逻辑电路

* 逻辑电路（logic circuit）由各种逻辑门(logic gate)组成
* 逻辑门之所以称为逻辑门，是因为它们可以实现简单的逻辑运算
* 逻辑门是如何组成的？
	* 继电器
	* 真空管
	* 晶体管
		* 三极管
		* PN结
* 基本的逻辑门有三种
	* 与门(AND Gate)
	* 或门(OR Gate)
	* 非门(NOT Gate)
* 复合逻辑门
	* 异或门(XOR Gate)
	* 与非门(NAND Gate)
		* 其中仅用与非门即可模拟出所有其它的逻辑门
		* https://zh.wikipedia.org/wiki/%E4%B8%8E%E9%9D%9E%E9%97%A8
	* 等等
* 如果我们把相应的逻辑运算表达成逻辑函数，然后构造一个与逻辑函数对应的逻辑电路，则该电路即可表达我们的逻辑
* 由此我们可以使用电路实现任意的逻辑，实际上计算机电路中所有的逻辑门也都是用与非门来表达的
   

# javascript笔记
## UTF8编码规则
  * 第一个字节前面若干bit表示需要几个字节，以1开头0结尾，没有用到的bit位储存数据
     * 11110开头  需要4个字节
     * 1110开头  需要3个字节
     * 110开头  需要2个字节
     * 0 开头  需要1个字节    和ASCII规则一致
  * 第二个字节开始以10开始 ，后面的6位储存数据
     *  11110开头    11110--- 10------ 10------ 10------   21个bit储存数据
     *  1110开头     1110---- 10------ 10------            16个bit储存数据 
     *  110开头      110----- 10------                     11个bit储存数据
     *  0 开头       0-------                              7个bit储存数据
  *  字符数据填入方式
     * 字符对应的Unicode编码转化为2进制，2进制从左往右，依次从左边开始填入到存储数据的bit位上
     * 如128523 转化为2进制1 1111 0110 0000 1011 ，一共需要17个bit位，需要4个字节
       所以填入方式为11110000  10011111  10011000  10001011    前面没填满的数据字节补零
  * 变长编码，根据符号所需字节的大小调整编码长度，可以节省字节储存空间
  * 兼容标准ASCII，当字符只需要1个字节时，以0开头
  * 容错 第二个储存字节开始都是以10开头，计算机可以识别出是否有字节丢失，最小的减少损失


## 整数在计算机中的表示和运算
  * 整数在计算机中的表达类似于时钟表盘。如对于表盘来说，向前拨动3个刻度的指针，相当于向后拨动9个刻度的指针；反过来，向后拨动5个刻度相当于向前拨动7个刻度，于是减5就可以转换为加7，于是-5用7来表达，二进制中也只是周期不一样，周期为2的n次方，最高位1表示负数，0表示正数；
  * 原码 1101        12568
    反码 0010        87431 
    补码 0011        87432
    补码=周期-原码
    为了计算方面，通过周期-1-原码+1的方式计算补码（这样做减法不会借位,计算机是通过这样求反码的）
    或者通过（周期-1）-（原码-1）的方式计算补码（结果一样，思路不一样）
  *  位运算符
    - 其它基本类型参与位运算时也会先转换为number类型
    - 位运算只对整数有效，遇到小数时，会将小数部分舍去，只保留整数部分
    - js语言中的整数在参与位运算时用4个字节表示，即32bit
    - 如果整数部分超出4个字节（溢出），取整数右边32位。
      |按位或     2|3=3   双方化为2进制每bit位进行或运算，任何数和0按位或都得到其本身整数部分
      &按位与     2&3=2   双方化为2进制每bit位进行与运算
         -  n & (n - 1)  把二进制最右边一位的1化为0
      ^按位异或 
         - 双方化为2进制每bit位进行异或运算
         - 不同为1.相同为0；
         - 任何数和自身异或都为0，任何数和0异或都为自身； 2^2==0；2^0==2;
         -  两个整数交换的方法
            a = a^b
            b = a^b
            a = a^b   
      ~按位非   ~2==-3    数字化为2进制每bit位进行非运算
      符号>>按位右移（保留符号位） 15>>3==1;   n>>1==Math.floor(n/2)    n>>2==Math.floor(n/4)  n>>3==Math.floor(n/8)
      符号>>>按位右移（不保留符号位，左边补0） -15>>>3==536870910
      <<按位左移（右边总是补0） 15<<3==120
  *  ** 次方    2**5==32  
  *  x.toFixed(n)可以让x保留小数点后n位，4舍5入,返回的是一个字符串
  *  将其他进制数转化为字符串再转化为Number后就变为10进制数了
  *  x.toString().length   可以判断x的位数，如果x为负值，那么- 号也要算一位，结果比正常值多1  
     数字直接转化为字符串，需要在数字后面加个. ,在加上toString方法；
     123..toString == "123"  第一个.号让计算机确认123为数字，第二个.号表示调用toString()方法
  *  逗号表达式：对它的每个操作数求值（从左到右），并返回最后一个操作数的值
     var x =1;  x = (x++,x++) =>x=3
     x = (2 ,3) => x = 3
  * 使用~, >>, <<, >>>, |来取整
  ``` js
    console.log(~~ 6.83)    // 6
    console.log(6.83 >> 0)  // 6
    console.log(6.83 << 0)  // 6
    console.log(6.83 | 0)   // 6
    // >>>不可对负数取整
    console.log(6.83 >>> 0)   // 6
  ```
  

## 浮点数在计算机中的表示和运算
   * 单精度储存 float 4个字节    js中的整数在参与位运算时用4个字节储存
     双精度储存 double 8个字节   js中的浮点数是用8个字节储存，整数也是以浮点数的方式储存；当整数要参与位运算时，将二进制的整数部分右边的32位取出，与0按位或得到其在4个字节时的值；如Number.MAX_SAFE_INTEGER | 0 = -1 ，Number.MAX_SAFE_INTEGER在二进制中是53个1，参与位运算时取出32个1与0按位或得到32个1，整数的32个1在4个字节里转化为10进制的值就是-1
   * 有符号整数：即有原码和补码的概念，最左边一位表示正负
     无符号整数：没有原码和补码的概念，只能用+/-表示正负
     number>>>0 将结果以以无符号整数输出
   * 运算结果以32位有符号整数理解,除了>>>运算符，它的运算结果以无符号整数理解  
   * JS中浮点数以8个字节储存，64个bit，以2进制的科学计数法储存（整数部分永远转化为1），形式如下
    * 1bit(符号位) + 11bit(指数位) + 52bit(底数位)
      * （1 + 底数位）* 2**（指数位）
      * 符号位，占用1个bit ，正数为0，负数为1
      * 指数位，占用11个bit，指数大小分布-1023~1024之间，分别用0~2047来表达，用科学计数法算出的指数+1023得出的数值储存在这11bit里面，即-1023次方在11bit里面写作0,1024次方写作2047
      * 底数位，底数小数部分直接填在52bit里面
        - 直接填在左边，右边多余的bit都填0 
        - 对于无限循环的小数部分（如0.2），第53位如果为1就进1给第52位， 第53位如果为0直接舍去
    * 这样表示的原因：当比较两个浮点数大小时 计算机从左往右读取数据，读到符号位时，谁是0谁大；读到指数位和底数为，谁先遇到1谁打大；这样计算机就可以更快判断两个浮点数的大小
    * 因为有的浮点数在计算机里面不够精确，所以一般比较浮点数的大小时用如下方法：
      |a-b|<阈yu值Number.EPSILON  为true时 ，我们可以认为a和b相等
    * 计算机里面10进制小数后面的第16位开始不够精确，因为计算机的最大精度为2的-52次方，这个数值在10^-15 ~ 10^-16 之间，比最大精度还小的数在计算机里面表示不精确
    * number.toPrecision(位数)  浮点数精确到小数点后面多少位时的值
    * 越接近0的浮点数越精确，因为底数位一共只有52bit，转化为2进制科学计数法时，整数部分右移，整数部分越大，右移的bit位越多，表示小数位的bit位也就越少，越不精确
    * NaN +0 -0 Infinity -Infinity 这几个特殊值不符合上面规律
    * 几个常见的Number方法
      - Number.EPSILON == 2**(-52) 即1和大于1的最小浮点数之间的差值 ，<Buffer 3c b0 00 00 00 00 00 00> ， 如果|a-b|< Number.EPSILON，则a和b相等 
        在0~1之间，也有比Number.EPSILON更小的精度值，比如Number.Min_value,但是计算机在此时已经失真，如果|a-b|< Number.EPSILON，也可以近似认为a和b相等
      - Number.MAX_SAFE_INTEGER == (1 + [1 - 2**(-52)])* 2**(52) == 2**53 - 1；<Buffer 43 3f ff ff ff ff ff ff>；
        计算机中表示的最大的精确整数，即整数位转化为科学计数法时右移占满52个bit，且每个bit值都为1；
      - Number.Max_value,表示js中最大的正数，<Buffer 7f ef ff ff ff ff ff ff>；即(1 + (1 - 2**(-52))* 2**(1023)
      -Number.MIn_value,来表示js中最小的正数，<Buffer 00 00 00 00 00 00 00 01> ; 即 （1 + 2**(-52))*2**（-1023）,这个值比Number.EPSILON还小，计算机也计算失真
    * <Buffer 7f ff ff ff ff ff ff ff> 这个值没有确定的函数方法，计算是Infinity
    * 大于Number.MAX_SAFE_INTEGER的所有数字可以使用BigInt表达；BigInt(1321233123131313312321312n) == BigInt("1321233123131313312321312") ；BigInt(1321233123131313312321312n) * 2n
      BigInt 可以和  +、`*`、`-`、`**`、`%` 一起使用；  BigInt里面和外面是纯数字时数字后面加个n


       
##  js编码规范
  * js代码是由表达式和语句组成，表达式有求值结果，一般配合=使用，语句（var/for/while/if/switch/return/debugger/do）没有求值结果
  * js中回车时解析器会自动加上分号 ，当一行的第一个字符是+，-，/,[,( 这5个字符时，他前面一行必须加分号。
  * 编程语言中不能省略*乘号 ，因为它会把2个变量当做一个新的整体变量  
  * 比较符>= 或者 <=之间不能有空格
  * top 和 name是运行环境中默认已经生成的变量，不能用这两个变量名于赋值
  * typeof(null) === 'object', typeof(undefined) === 'undefined'

## 字符串
  * trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。
    var orig = '   foo  '; console.log(orig.trim()); // 'foo'
  * String.fromCharCode(Unicode码)  将 Unicode码  转化为对应字符
  * String.charCodeAt(索引) 将第几个字符转化为Unicode码  
  * String.endsWith(value)  字符串是否以value结束
  
  

  

## 作用域
  * js属于静态作用域语言，只有函数才能创造作用域；调用函数时要回到创造函数的位置调用，函数里面变量的值不会因为调用函数的位置而发生改变，其初始值是固定的
  * 内部作用域可以读取外部作用域里面的变量，外面的作用域不能读取内部作用域里面的变量
  * 在任何作用域里面写有一个不用var声明的赋值表达式，f = 2 ,那么该变量相当于一个全局变量，相当于       window.f = 2
  * 用let声明的变量相当于声明了一个块级作用域，即只在离它最近的语句块{}里面生效，外面的语句块无法访问；块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。
  * 用var声明的变量会提到var所在函数作用域的最前面，但是不赋值，到了赋值那一行才赋值
    用let声明的变量不会提前，在那行声明就在那行赋值；而且在同一个块级作用域里面同一个变量只能用let声明一次；
    const声明的变量是一个常量，变量的指向不能改变，如果变量指向一个对象，对象里面的内容可以变；同一个变量只能用const声明一次；
  * 用let和const在全局作用域声明的变量也不能通过window.属性访问到  
  * 函数的【function 函数名{}】形式定义在js中也会提前赋值，会提到函数所在函数作用域的最前面
    函数的【var 函数名 = function{}】形式也会提前声明，但不不赋值，到了赋值那一行才赋值

## 闭包    
  * 可以访问其他函数内变量的函数，叫做闭包。
  * 闭包可以理解为作用域嵌套。作用域里面的函数要访问作用域里面的变量，作用域不能销毁，作用域里面的函数在调用时会产生新的作用域，嵌套在当前作用域里面；
  * 函数本身处在哪个作用域（A），它运行时创建的作用域（B）就在哪个作用域（A）内部;函数本身也是处于一个作用域的。是创建它的函数运行时所创建的作用域。
  * 函数运行时创建作用域，函数结束时作用域不一定销毁；函数不产生闭包会在结束时销毁；如果还有代码使用作用域里面的变量值，产生了闭包，作用域不会销毁，里面的变量值还是可以被调用它的函数使用；



##  栈
  * 单边进，单边出；后进先出，先进后出
  * 调用栈：函数遇到其内部函数时先会进入到内部函数里面执行内部函数的代码，等到内部函数的代码执行完毕，再接着执行下面的代码；这种逻辑结构就是调用栈；
  * 调用栈的深度：函数的内部函数的内部函数的内部函数这种调用方式体现了调用栈的深度，即函数展开的层次；如果调用栈超过了其深度会发生栈空间溢出；
  * 调用栈不一定产生闭包，因为兄弟函数之间也可以互相调用，此时他们共用一个父函数的作用域
  * 调用栈展开的层次也是一种树状结构



## 函数
  * 副作用：打印了一段输出或者修改了全局变量
    返回值：纯函数，通过参数产生值，不读取全局变量，值仅由其参数决定 
  * ducument.write()  向文档的解析流里写于内容  ，文档一解析完</html>，解析流关闭；重新document.write会导致重新打开一个解析流，之前html的内容会被冲掉，js运行后创建的函数及变量是没有冲掉的
    ducument.open()   打开解析流，打开页面时默认打开 
    ducument.close()   关闭解析流，关闭页面时默认关闭
  * 形参 ：函数定义的参数
    实参 ：函数实际传递的参数  
  * 函数的相关方法
    fun = function(){}
    - fun.apply(null,array) ==fun(...array) 
      将数组里面的参数一次性传递给函数
    - fun.length =>形参的个数
    - fun.toString()函数的源代码
    - fun.name  =>函数的名字  


## JSON  一种数据结构 
   * 一段储存数据的字符串，类似js的数据类型
     https://www.json.org/json-zh.html   每种js值对应着每种json结构   
     JSON.stringify(值) =>JSON格式
     JSON.parse(JSON格式) =>值
   * JSON里面的属性名都要加双引号，属性值不能是表达式，只能是最终结果 
   * 双引号之间不能有特性字符(需要转义 \\t )，不能出现任意的多余逗号，不能有undefined值
   * 序列化：链表结构在储存时会转化为一种其它的数据结构（如json),该结构是连续储存的，这就是序列化 
     反序列化：链表结构在运行中就是反序列化的，不同的节点在不同的内存中，不连续储存





## 代码的调试
  * debugger  在调试代码最前面加一个断点debugger；
  * 在sources栏里面鼠标指定断点位置;
  * google同一时间同一个页面只能debugger一个地方
  * 在sources栏里面snippet选项里可以执行代码（Ctrl + enter），也可以格式化代码



## 对象  
 * 数组是值的有序集合
    对象是值的具有名字的集合
 * null 和 undefined没有属性，其它所有数据类型的值都有属性
 * 包含函数的属性称为某个值的方法 
 * obj[表达式]：表达式的返回值作为对象选中的属性名，也可以传递一个变量；obj[变量]  
   object.property
   object['property'] 注意里面是个字符串
 * 用==或者===判断对象是否相等时，只有两个对象都指向同一个内存地址的对象实体才为true，其它的即使两个对象内容，值一样但是指向的对象实体不一样会返回false；
   而原始数据类型Number ，String，Boolean 作相等比较时只比较值，而不管指向地址
* obj1 = obj2   这句代码是使obj1指向obj2的对象实体，所以obj1 === obj2；这种情况改变对象实体里面的内容，两个对象都发生了改变 
* 把原始数据类型Number ，String，Boolean的值是固定的，不能再添加属性，但是添加了也不会报错
* 把原始数据类型Number ，String，Boolean直接当做对象来添加属性"XX"时，会短暂的生成一个新的对象A,在A中添加属性"X"，之后A会被清理掉；当要读取这个添加的属性"X"时，又会短暂的生成一个新的对象B,在B中读取属性"X",返回undefined，之后B被清理掉；
   如：123.ab = 1    会在A对象中添加ab属性,之后消失
       console,log(123.ab)  会在B对象中寻找ab属性，返回undefined
* 包装对象：1个真实的对象包装了一个原始数据，Objiect()函数强行将其他类型转化为对象； Object(1);Object("123"}) 
  原始对象/原生对象：直接声明的对象   ；asd = {}    
* 全局作用域中只有一个全局对象window,所有的全局属性都在window对象里面，window对象的任何属性都指向属性本身，window对象的window属性指向window对象本身
  window.window===window
  window.console===console
* 对象的浅对比：===是作浅比较,只检查左右两边是否是同一个对象的引用
  对象的深对比：不仅是同一个对象的引用，而且是同一个链表


##  数组
  * 判断两个纯数字数组里面的内容是否相同，先array.sort(function(a,b){return a - b})  从小到大排序，再join()转化为字符串作全等判断
  * 数组相关方法
    * arr = Array.from(arrlike) 将类数组对象转化为数组
    * Array.isArray(arr) 判断arr是否是数组
    * arr.fill(value ，start，end)用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
    * arr.flat(depth)    flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并 为一个新数组返回;depth默认1
    *arr.includes(value) 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。注意：对象数组[{},{}]不能使用includes方法来检测。
  * 数组的冒泡排序最优解
    function swap(ary, i, j) {
    if (i != j) {
      var t = ary[i]
      ary[i] = ary[j]
      ary[j] = t
    }
    }
    function bubbleSort(ary) {
      for(var j = ary.length - 2; j >= 0; j--) {
        var swapped = false
        for(var i = 0; i <= j; i++) {
          if (ary[i] > ary[i + 1]) {
            swap(ary, i, i + 1)
            swapped = true
          }
        }
        if (!swapped) {
          break
        }
      }
      return ary
    }
  * 数组的归并排序
    ```
    function mergeSort(ary) {
    if (ary.length < 2) {
      return ary.slice()
    }
    var mid = ary.length >> 1
    var left = ary.slice(0, mid)
    var right = ary.slice(mid)

    mergeSort(left)
    mergeSort(right)

    var i = 0
    var j = 0
    var k = 0

    while(i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        ary[k++] = left[i++]
      } else {
        ary[k++] = right[j++]
      }
    }
    while (i < left.length) {
      ary[k++] = left[i++]
    }
    while (j < right.length) {
      ary[k++] = right[j++]
    }
    return ary
    }
    ```
    * 扩展运算符（spread）是三个点（...）。
      - 作用一: 替代函数的 apply 方法,
      - 复制数组(浅拷贝), 如: const a2 = [...a1];
      - 合并数组: [...arr1, ...arr2, ...arr3]
  
  

## 循环
  * for循环中var定义的变量是循环所在作用域变量，即作用域里面循环后面的代码可以引用i的值
    如果想变量只对for循环生效，用let定义for循环的变量，let定义的变量属于严格模式，只在对应的区域块生效。
  * for in 循环 
    for(let 变量 in obj){}  将对象里面的变量名依次赋值给变量，每赋值一次循环一次

## 链表结构
  * 数组转化为链表
    * 方法1
      * 首先遍历数组一次创造n个节点对象node，value = Arr[i],next = null,node全部push到数组nodes中
      * 接着再遍历数组nodes一次，将节点链接在一起，nodes[i].next=nodes[i+1]
    * 方法2
      * 创建一个头部节点，使其next属性指向下标为i的节点，一次循环下去
      function arrTolist(arr) {
        let head = {
            value: undefined,
            next: null
        }
        let remmber = head
        for (let i = 0; i < arr.length; i++) {
            node = {
                value: arr[i],
                next: null
            }
            head.next = node
            head = node
        }
        return remmber.next
    }
    * 方法3 递归
      * function arrayToList(arr){
           if(arr.length==0){
              return null
            }
            return {
              value:arr[0],
              next:arrayToList(arr.slice(1))
            }
       }
  * 链表转化为数组
    *   function listToArray(list){
          let result = []
          while(list != null){
              result.push(list.value)
              list = list.next
          }
          return result
       } 

    *  function  listToArray2(list){  
          if(list == null){
              return []
          }
          let tail = list.next
          return [list.value,...listToArray2(tail)]
       }     
  * 在某个节点前面插入一个值为value的新节点(index是下标号)
    function insert(list, index, value) {
      if (index < 0) {
        index = 0
      }
      下标小于0时就相当于0
      if (!list) {
        return {
          value: value, next: null
        }
      }
      如果list是空节点，那就是在null前面加入一个新节点，index只能为0，返回其值
      if (index == 0) {
        return {
          value: value,
          next: list
        }
      }
      如果index为0，即在list前面加一个节点
      var head = list    用head保存头节点
      var idx = -1    用idx记录下标

      while (idx != index - 1 && list.next) {
        idx++
        list = list.next
      }
      如果下标没有到达目标位置且list.next不为null
      循环idx递增,list=list.next

      list.next = {
        value: value,
        next: list.next,
      }
      指针到达目标位置时，list.next指向新节点,新节点又指向原来list.next的值
      return head
    }
## 算法技巧
   * 进制转换
     var n = 3123
     while(n > 0){
       var digit = n % 2
       console.log(digit)
       n = (n - digit)/2
     }    
    *  判断素数的简化方法
      - 遍历到根号n即可 
      - 前面再加一些判断缩小范围，比如能不能被2,3,5，7等整除
      var isPrime = function(n) {
      if (n < 2) {
        return false
      }
      var sqrt_n = Math.floor(Math.sqrt(n))
      for(var i = 2; i <= sqrt_n; i++) {
        if (n % i == 0) {
          return false
        }
      }
      return true
    }
    * 素数两性定理
      把素数分为6列，素数全部存在于第1列和第5列（2和3除外）；第2，4列全部能被2整除。第3，6列全部能被3整除
    * 算法中递归优雅易懂，但是耗时；超时可以转化为循环语句  

## ES6相关知识 
   * 剩余参数(参数1， ...剩余参数)只能写在最后
      function addEntry(squirrel, ...events) {
          return {
          squirrel: squirrel,
          events: events,
          }
        } 
   * 参数的默认值 (属性 = 默认值)    
      function slice(array,start = 0,end = array.length){}
   * 展开运算符(...将数组两边的[号和]号中合掉)  不能单独使用，作为参数使用
      Math.max(...[1,2,3]) == Math.max(1,2,3) =>3


## 高阶函数

   * forEach函数  
     array.forEach(function(){}) 方法从头至尾遍历数组，为每个元素调用指定的函数。ES6 的 => 语法可以让匿名函数更简洁，取代 function 关键词。
     最多可以传递3个有效的参数(函数，索引，数组)
     只有一个参数时，即每个元素的处理函数。
     <!--  var numbers = [1, 2, 3];      
      numbers.forEach(x => console.log(x));
      // 同等于
      numbers.forEach(function (x) {
          console.log(x); -->

   * filter函数   返回新数组
      array.filter(function(){})  filter函数的作用是遍历该集合，然后将该集合中符合某些特定条件的元素组成新的数组，并返回该新数组.
      最多可以传递3个有效的参数(函数，索引，数组)
      只有一个参数时，即判断所有元素是否符合条件的处理函数。
      <!--  var digits = [1, 4, 5, 10, 15]
      var even = digits.filter(function (number) { return number % 2 == 0 })
      console.log(even))
      // [4, 10] -->

   * map函数  返回新数组
     array.map(function(){})  对数组的每个元素调用定义的回调函数并返回包含结果的数组  
     最多可以传递3个有效的参数(函数，索引，数组)
     只有一个参数时,及给出映射关系的处理函数
      <!-- var array = [16,25,36];
      array.map(Math.sqrt);
      //array = [4,5,6]

      var array = [11, 22, 33, 44, 55];
      console.log(array.map(function (n) { return n % 10 }))
      //array = [1,2,3,4,5] -->

    * reduce函数 返回最终运算的结果
      * reduce源函数
          function reduce(arr, reducer,initalVal=arr[0] ) {
            var  i = 0
            if (argument.length===2){
              i=1
            }
            for (; i < arr.length; i++){
                initalVal = reducer(initalVal,arr[i]，index,arr)
            }
            return initalVal 
          }
      * reduce可以接受3个参数，数组（作为数组的方法时可以省去），reducer函数，初始值（不设置时默认为数组第一项）； reducer是必要参数，其它可选
      * 执行函数reducer接受4个参数，initalVal（上一次执行结果，第一次为初始值）arr[i]数组的第i项，数组下标，数组本身（作为数组的方法时可以省去）；initalVal和arr[i]是必要参数，其它可选
    
      Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，其效果就是：
      [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
     <!--  var arr = [1, 3, 5, 7, 9];
      arr.reduce(function (x, y) {
      return x + y;
      }); // 25 -->

    * sort函数
      用于数组的排序，返回值大于0交换位置，其它位置不变
      array.sort(function(a,b){return a - b})  从小到大排序
      array.sort(function(a,b){return b - a})  从大到小排序

    * ES6数组去重的最佳实践：Set结合Array.from()  
      var  a = [1,1,2,2,4,4]
      var  b = new Set(a)
      var  c = Array.from(b) =>[1,2,4]
      var  d = b.size  =>3(不同项个数)
 ## 对象原型
   
  * 基本关系
    构造函数Perser, function  Person(参数){}
    Person的实例person1 ,var person1 = new Person(实参)
    _proto__（隐式原型）与prototype（显式原型），隐式原型指向创建这个对象的函数(constructor)的prototype；
    JavaScript中我们在定义构造函数的时候就会默认有一个prototype的属性。每个对象实例化后其实就是拷贝构造函数中除开prototype属性之外的所有方法和属性，其中会生成一个__proto__属性。
    prototype是站在构造函数的角度讨论原型对象的，用来实现基于原型的继承与属性的共享。__proto__是站在实例对象的角度讨论原型对象，构成原型链，同样用于实现基于原型的继承。

    person1的__prototype__属性等于构造函数Person的prototype属性， person1.__prototype__ == Person.prototype ,都指向了person1的原型；
    person1的原型的原型等于Object的prototype属性，Person.prototype.__prototype__ == Object.prototype.
    person1的原型的原型的原型是Null. Object.prototype.__proto__ == Null

    构造函数Person也是对象,也有__proto__属性,等于它的构造函数Function的prototype属性.Person.__prototype__ == Function.prototype.Function是所有函数的根构造函数.
    构造函数Person的原型也是对象,也有__proto__属性,等于它的构造函数Object的prototype属性Function.prototype.__prototype__ == Object.prototype. Object是所有对象的根构造函数。
    Object里面的的原型对象没有原型了，所以 Object.prototype.__proto__ == Null 


  * Object.create(新创建对象的原型对象)  即为新创建的对象指定一个原型对象
    <!-- var person2 = Object.create(person1);
    person2.__proto__ ；
    // person1 -->

  * constructor 属性  每个实例对象都从原型中继承了一个constructor属性，该属性指向了用于构造此实例对象的构造函数。

      原型对象有一个constructor属性，指向该原型对象对应的构造函数
      function Foo(){};

      console.log(Foo.prototype.constructor === Foo);//true

      由于实例对象可以继承原型对象的属性，所以实例对象也拥有constructor属性，同样指向原型对象对应的构造函数
      function Foo(){};
      var f1 = new Foo;
      console.log(f1.constructor === Foo);//true (f1中没有constructor属性，会到f1.__proto__ 中寻找，即f1.__proto__.constructor === Foo)



### 二叉树
  * 完全二叉树与满二叉树, 

  ```
    // 递归时获取二叉树数的深度
    function traverse(root) {
      d++
      if (root) {
        console.log(root.val)
        traverse (root.left)
        traverse (root.right)
      }
      d--
    }
  ```
  * 使用[p, q] == [q, p], 可以交换两棵树
### 待了解的问题
    



### 堆排序
  * heap(堆)是一中数据结构, 也叫Priority Queue, 与堆内存有区别
  * 堆是一颗完全二叉树, 其中隐含了顺序, 每个节点都比它的子节点大/小, 称为最大堆/最小堆, 最值一定处于堆顶, 这个最值也是我们最关注的
  * 二叉堆中, 节点的父节点的位置为(n - 1) / 2 详细取整
  * 完全二叉树中没有子节点的节点数为n / 2, n为总节点数
  * 堆的最差效率为O(nlogn),
  * 完全二叉树的深度一定为logN
  * 堆只考虑父子节点, 不考虑兄弟节点  


### 哈希表
  * es6里新增了Map
  ```
    
  ```
  * 核心思路: 直接根据key的内容计算出它应该存放在哪里.
  * 哈希算法有以下特点: 
    - 相同的key值一定计算出相同的index
    - 不同的key值最好能算出不同的index
    - 不同的key值计算得出的index能够尽量均等地分布
  * 问题: 由于key的序列无法预测, 哈希算法一定会遇到冲突: 即不同对的Key计算得出了相同的index
  * 解决冲突: 
    - 开放地址法


### 正则表达式
  * 9.1 创建正则表达式
  ```
    var re1 = new RegExp("abc")
    var re2 = /abc/
  ``` 
    - 包含斜杠, 需要在斜杠前加上反斜杠
    - \符号永远表达自己, 但字母, 数字和空格加斜杠要注意
  * 匹配字符集
  * /bo*/中, *表示匹配器前一个表达式0次或者多次, 表示o可以出现0次或者多次
  * ?紧跟在任何量词 *、 +、? 或 {} 的后面，将会使量词变为非贪婪的（匹配尽量少的字符），和缺省使用的贪婪模式（匹配尽可能多的字符）正好相反。
  * \b匹配一个词的边界(词和词之间可以有空格)


  * /\w+foo(bar)+/ 等同于new RegExp("\\w+foo(bar)+"), 多重转义, 用两个双反斜杠
  * test在右边字符串的任意位置匹配到对应内容就可以, 如果想要从头开始匹配的话
  * [0-9][a-z]之类只能正序, 不能倒序
  * 重复* + ? 
  * 非捕获分组, ?:表示括号不在分组里计数
  * es9中(存疑), 正则提供了一个新内容, ?<>为括号起名,<>中写上组名, 在exec返回数组的groups属性中体现
  * 后项引用. 例: 正则表达式中找一个人的名字为ABB形式的, ,/.(.)\1/exec('薄西西 李一一 赵敏'), '薄西西 李一一 赵敏'.match(/.(.)\1/g), \1出现在1所对应的括号之后,匹配前一个括号中的内容, 最多可以用到/9. 
  * 单词边界就是一种零宽断言
  * 字符串都有replace方法
  * tagged string 和模板字符串
  * String.raw  `\d+`, 注意是反引号, 和直接写 `\d+`控制台打印结果不一样
  * 反引号字符串也叫模版字符串
  * $ {}出现在开头或者结尾, 会补充''空字符串
  ```
  foo`${a}xxxx${b}yyyy`    ['', 'xxxx', 'yyyy'],  1, 2
  foo`xxxx${a}yyyy${b}`	 ['xxxx', 'yyyy', ''],  1, 2
  ```
  * raw数组里放的是没有转义的字符串
  * 空正则任意位置都可以匹配到, 是一个特例

  * match,不考虑正则表达式的lastIndex属性。
  * 当正则表达式有g标志的时候，匹配出所有能够满足整条正则表达式的内容
  * 当没g标志的时候，匹配出第一条能满足的内容，同时把分组捕获到的内容也放入结果数组
  * replace(RegExp|String, String|Function)
  * 两个参数都是字符串：匹配第一次出现的内容为目标内容
  * 首参为正则
    - 次参为字符串，里面的$&,$1,$2是特殊内容，表示匹配到匹配到的内容以及各个分组捕获到的内容
    - 次参为函数，把整个匹配到的内容以及各分组捕获到的内容传给函数做为参数，把函数返回值插入被替换位置
      有多少次匹配，函数就会调用多少次
  * re.exec(str)方法
    - 如果re不带g标志，则完全等同于str.match(re)
    - 如果re带有g标志，则从str的re.lastIndex位置开始查找，查找成功后把re.lastIndex置为匹配位置的后一个位置
      - 查找不成功的时候，返回null，把lastIndex置为0
  * str.split(String|RegExp)
    - 当参数是字符串时，按字符串把原字符串拆成数组
    - 当参数为正则时，按正则把原字符串拆成各部分的数组，但是
    - 当正则里有捕获分组时，分组捕获到的内容也会出现在结果数组的相应位置


  * 零宽断言：匹配两个符号之间的一个位置而不是一个符号（宽度为零）
  * 匹配发生时，光标不会移动，所以可以对同一个位置执行多个零宽断言匹配，只有当每个断言都成功时才可以
  * 有4种零断言：
    - (?=expr) 正预测零宽断言，这个位置的右边满足expr
    - (?!expr) 负预测零宽断言，这个位置的右边不满足expr
    - (?<=expr) 正回顾零宽断言，这个位置的左边满足expr（旧版JS不支持）
    - (?<!expr) 负回顾零宽断言，这个位置的左边不满足expr（旧版JS不支持）
    - 

    - ^ === /(?<![^])/
    - $ === /(?![^])/
    - \b === /(?<=\w)(?=\W)|(?<=\W)(?=\w)|(?<![^])|(?![^])/


### JS正则表达式完整教程读书笔记
* 一, 基本匹配规则
  * 1 两种模糊匹配
    - 1.1 横向模糊匹配, 一个正则可匹配字符串长度不是固定的
      - 实现方式为使用量词, 如{m, n}
      ```
        var regex = /ab{2, 5}c/g;
        var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
        console.log( string.match(regex) ); // g表示全局匹配
        // => ["abbc", "abbbc", "abbbbc", "abbbbbc"]
      ```
    - 1.2纵向模糊匹配
      - 使用字符组, 如[abc]
  * 2 字符组
    - 2.1范围表示法, 如[0-9a-zA-Z], 如果要匹配“a”、“-”、“z”这三者中任意一个字符, 可写成[-az]或[az-]或[a\-z]
    - 2.2排除字符组, 如[^abc]，表示是一个除"a"、"b"、"c"之外的任意一个字符。
    - 2.3 常见的简写形式
    ```
    \d就是[0-9]。表示是一位数字。记忆方式：其英文是digit（数字）。
    \D就是[^0-9]。表示除数字外的任意字符。
    \w就是[0-9a-zA-Z_]。表示数字、大小写字母和下划线。记忆方式：w是word的简写，也称单词字符。
    \W是[^0-9a-zA-Z_]。非单词字符。
    \s是[ \t\v\n\r\f]。表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。记忆方式：s是space character的首字母。
    \S是[^ \t\v\n\r\f]。 非空白符。.就是[^\n\r\u2028\u2029]。通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符除外。
    ```
      - 如果表示匹配任意字符, 可以使用[\d\D]、[\w\W]、[\s\S]和[^]中任何的一个。
  * 3 量词
    - 3.1 简写形式
      ```
      {m,} 表示至少出现m次。
      {m} 等价于{m,m}，表示出现m次。
      ? 等价于{0,1}，表示出现或者不出现。记忆方式：问号的意思表示，有吗？
      + 等价于{1,}，表示出现至少一次。
      * 等价于{0,}，表示出现任意次，有可能不出现。
      ```
    - 3.2贪婪匹配和非贪婪匹配
      - 量词如果不加特殊处理, 极可能少的匹配, 通过在两次后加问号就能实现惰性匹配
      ```
      {m,n}?  {m,}? ?? +? *?
      ```
  * 4 多选分支
    - 例如/good|nice/, 
    ```
      // 如下说明分支结构是惰性的
      var regex = /good|goodbye/g;
      var string = "goodbye";
      console.log( string.match(regex) ); 
      // => ["good"]
    ```

* 二 位置匹配
  * 1 位置: 指相邻字符之间的位置
  * 2 如何匹配位置? 在ES5中，共有6个锚字符： ^ $ \b \B (?=p) (?!p)
    - 2.1 ^和$
      * ^（脱字符）匹配开头，在多行匹配中匹配行开头。
      * $（美元符号）匹配结尾，在多行匹配中匹配行结尾。
      * 多行匹配模式时，二者是行的概念
    - 2.2  \b和\B
      * \b是单词边界, \B就是\b的反面的意思，非单词边界。
    - 2.3 (?=p)和(?!p)
      * (?=p)，其中p是一个子模式，即p前面的位置。(?!p)就是(?=p)的反面意思, 二者的学名分别是positive lookahead和negative lookahead。正预测零宽断言和负预测零宽断言
  * 3 对于位置的理解，我们可以理解成空字符""。
* 三 正则表达式括号的作用
  * 1 分组和分支结构
    - 分组
    - 分支结构: (p1|p2)
  * 2 引用分组
    - 2.1 提取数据
    ```
    var regex = /(\d{4})-(\d{2})-(\d{2})/;
    var string = "2017-06-12";
    console.log( string.match(regex) ); 
    // => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]
    // 或者使用正则对象的exec方法
    console.log( regex.exec(string) ); 
    // => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]
    // 也可以使用构造函数的全局属性$1至$9来获取：
    regex.test(string); // 正则操作即可，例如
    //regex.exec(string);
    //string.match(regex);

    console.log(RegExp.$1); // "2017"
    console.log(RegExp.$2); // "06"
    console.log(RegExp.$3); // "12"
    ```
    - 2.2 替换
    ```
    var regex = /(\d{4})-(\d{2})-(\d{2})/;
    var string = "2017-06-12";
    var result = string.replace(regex, "$2/$3/$1");
    console.log(result); 
    // => "06/12/2017"
    // 等价于
    var result = string.replace(regex, function() {
      return RegExp.$2 + "/" + RegExp.$3 + "/" + RegExp.$1;
    });
    console.log(result); 
    // => "06/12/2017"
    // 也等价于
    var result = string.replace(regex, function(match, year, month, day) {
      return month + "/" + day + "/" + year;
    });
    console.log(result); 
    // => "06/12/2017"
    ```
  - 3 反向引用
    * \1表示引用之前那个分组, \2和\3分别指代第二个和第三个分组
    - 3.1 括号嵌套
      ```
      var regex = /^((\d)(\d(\d)))\1\2\3\4$/;
      var string = "1231231233";
      console.log( regex.test(string) ); // true
      console.log( RegExp.$1 ); // 123
      console.log( RegExp.$2 ); // 1
      console.log( RegExp.$3 ); // 23
      console.log( RegExp.$4 ); // 3
      ```
      * 看"("出现的顺序
    - 3.2 \10表示第十个分组, 而不是\1和0
    - 3.3 引用不存在的分组, 不会报错, 匹配反向引用的字符本身
  - 4 非捕获分组: 如果只想要括号最原始的功能，但不会引用它，即，既不在API里引用，也不在正则里反向引用。此时可以使用非捕获分组(?:p)




###
 * a.js和b.js交叉引用不会无限递归, a.exprot的空的情况会放在缓存里, 第二次请求a.js
 * 面试题, 怎样实现循环依赖




### ES6中生成器函数
  * 函数带* 和yeild
  * 对象上有属性next
  * 可以类比有yeild的函数返回多个值
  * 在yield停住, 下一次调用函数, 传入的参数会成为yeild的值
  * return, return返回传入的参数, 再掉next就失效了
  * throw, 让暂停的yeild抛出一个错误
  * Symbol()是es6中的原始类型
  * Symbol能实现一定程度的私有属性
  * Symbol不能隐式类型转换, 不能拼接字符串, 但是可以通过toString()方法转换



  * this变量不能赋值
  * for in 会迭代原型链上的可枚举属性, 一个原则: 不要在js自带的原型上增加方法


### DOM
  * $0 $1只是在浏览器里用, 写代码时并没有什么用
  * Object中的frezee seal preventExtension让对象无法改变
  * matches很重要
  * querySelect('#list')可以选中id

  * 事件原型
    - 捕获, 目标, 冒泡
    - 在目标元素上, 不区别冒泡与捕获
    - 从外向内, 执行每一个元素的捕获, 从内向外执行每一个元素的冒泡阶段
    - stopPropagation(不是冒泡!!), 传播到下一个元素, 阻止事件传播到下一个元素, 当前元素上会执行完
    - stopImediatelyPr...., 一个元素上函数执行一部分停止
    - js中除非抛出错误或者死循环, 不然一个函数执行不能 阻止后面的函数无法执行
    - 事件对象, 一般用e, 还有一个隐藏参数this, this表示
    - a.addEventListener('click', f) a.addEventListener('click', f), p中放了a, 两次的this不一样
    - 箭头函数的this函数看的是外面, 所以想用到this, 必须要用function的模式
    - js里this是动态作用域
    - 不冒泡的事件普遍是可以捕获的
    - 脚本的执行顺序非常重要
      * body里写的script会先执行, 再依次解析dom树
      * async defer表示js文件不必在此时执行(基本没用), 多个async, async执行的顺序还是按照排列的顺序, defer不按照顺序来
      * DOMContentLoaded页面的结构已经完全解析完成了
      * 大写的DOM Level 3, 目前的最高级别, 不同时期新增的接口
      * document.readyState

### this绑定全面解析


### 计算机网络
  * 载波监听
  * 通过网线连接的叫以太网
  * 以太网帧
  * ip报头放在以太网帧的负载部分
   - ip报头中总长度为16位, 最大可以表示65535, 但以太网的数据包只能发1500个字节, 这里的总长度指的是会做IP分片,标识指的是这是第几个分片(总长度和标识都很少用), 第二行中的标志和分段偏移都是和ip分片相关的
   - TTL表示中转次数, 为0的时候停止中转, 最多255的次数已经足够了(多的30次就能到达目的地), 这时为了防止包在网络中转圈
   - 协议值得是数据里存放的数据是什么格式(TCP或者UDP), 首部校验和类似于算一遍hash
   

# Http
  ```
  GET 12
  Host: 
  User-Agent: 
  ```

  * node的req.on('data')data为解析完请求头的数据
  * ajax 的interceptors, 可能的面试题

  * awiat接受promise只能是浏览器自带的promise类型, 自己实现的不行
  * 区分是在node中运行还是浏览器中运行
  * koa和express最大区别: express.use()里可以接同步函数也可以接异步函数, 而koa只能接异步
  * express不能通过等待后面中间件执行再执行现在的代码, koa可以
  * 9.26 16:30 class的难点
  * JSONP原理, 现在用得很少, 一般用cors
  * todo为例在dom树中找差异比在字符串中找差异简单很多, 找出dom树的差异
  * 函数通过数据 => vDom => 渲染, 之后, 对比数据改变后第二次的vDom, 把差异渲染到页面上
  * v-show v-if区别为元素是否存在

  * 对比虚拟DOM, 操作真实DOM
  * 函数其实可以写在data里, 写在methods里会有优化
  * v-on:后面甚至可以写代码, 如v-on:click="i++, $event"
  * 表达式求值结果是一个函数
  * 由model驱动整个页面的ui, 双向绑定
  * {{}}只能在标签之间使用, 不能在标签内部使用
  * vue的data里所有对象都是getter和setter
  * computed属性里可以缓存值, 第一次变化函数运行, 不变化的话之后直接从缓存中取值
  * 两个独立的页面之间可以发post message
  * csrf的功能
  * :class里可以放一个字符串求值结果, 可以放一个对象
  * v-for和v-if在同一个标签里, v-for优先级高于v-if优先级. 如果想先判断v-if在执行v-for, 则需要用template包裹起来, 在template标签里写v-if. 
  * 不推荐上面的方法, 直接过滤出结果就好.
  * vue和react必考题, key是做什么用的
  * 如果添加了key, dom中只有相同的元素会做对比, 提高了运行效率
  * 只有computed属性有缓存, 别的都不会
  * v-on: click里可以写的东西比较有争议, 写一个单词, click绑一个方法, 其他情况(包括单词后加括号)就是直接执行代码
  * v in 和v of在vue里完全没有任何区别
  * .passive和.prevent不要一起用
  * 多年前有建议不要在html中写事件监听, 因为方法需要被声明在全局, 建议的方式使用dom的query选择器找到元素, 但这个说法并不准确 1005-15:11
  * 声明式和代码式?
  * 如果v-if不好使, 使用v-show, 优先用v-if
  * data你的所有属性都会被转换为getter setter, 大批量的数据不适合放在data里
  * computed里的属性不会被抓换为getter setter, 更节约空间开支
  * 计算属性被返回的东西不会被转换为getter setter属性
# 1006
  * Shadow DOM, 想象成一个小宇宙, 如input元素, 浏览器设置里打开Show agent shadow DOM可以看到vue的input内部的元素. 1006-10:37 
  * 原生html中, template会被解析, 但是不会被展示 1006-10:41 
  * #document-fragment是用来存放并列DOM节点的一个容器
  * html组件不分大小写?
  * Vue在原生的html里不能使用大写, 其他的地方可以使用大写 14:43
  * 不是组件props属性的将会被转移到组件根元素上 14:57
  * 属性接受参数必须要声明props, 1006-14:58
  * 麻烦的是props声明的时候使用驼峰式, 使用时使用中划线式 14:58
  * props可以写上对应类型的构造函数
  * html代码中的双引号是可以打回车的
  *  数据是单向的, 子组件没有数据能传给父组件, 上层通过事件来监听来获取下层数据的值
  * 转移到组件模版的根元素上? 1006-1519 
  * 20191528 很大的坑, 事件必须使用kebab-key格式
### 1007
  * slot功能如果不是为了写组件库的话可能用得不多 10:46
  * 作业: element评分
  * slot这个东西不知道最好 10:54
  * 循环对[某数组]做[某件事情]

  * 依赖注入不知道为好? 12:03
  * vue跨域的css都可以到, 元素有一组时间和缓动相关, 16:22
  * 选项合并也许会消失, react已删除 16:46
### 1009
 * 面试可以吹牛, 虚拟dom 12:11
 * tr td 等可以用is属性解决模板bug
 * 提出了一个问题,并在随后提出了业界的解决方案 15:29

 * Vuex
 * 面试题mapGetters mapState 14:58

## 1010
 * 框架中对象一般不会主动复制 9:40
 * 子路由的path要么写上完整路径(包括斜杠),要么就只写名称, 不写斜杠 15:03
 * 懒加载 16:10
 * history模式, 老板不提, 永远不要用 16:11
 * 常见面试题 16:38


 ## 1011
  * 现代开发的前端模式 14:42
  * 组件化文件
  * stylus很少用, 两年前社区的就已经是用sass了 14:51
  * imoprt进去的组件需使用的话需要在components里申明
  * windows文件名不区分大小写, 但别的系统区分
  * js自带的import是不支持vue文件的, 会被转化为js, 然后打包, 这个工具叫vue CLI 14:58
    - babel可以用最新的js语法 15:16
    - 建议不要用history模式
    - css建议: node-sass经常会下载失败(不在npm在github上), 选第一个sass
    - 社区里用爱彼迎代码风格的比较多的比较多
    - 面试题 16:11
    - runtime版本和完整版的区别 16:20

### 1014
  * script便签引入的文件是全局变量
  * import是引入文件, 被同一个作用域中的变量给指向了. 9:19 
  * 路由里的路径写法 9:23 
  * html中路由的写法 9:30
  * react比vue轻量一点 9:35
  * react.....js是自己的虚拟dom的实现, react-dom.js是把虚拟dom绘制到真实dom上去 9:42
  * react的dom可以画在canvas上, react.canvas 9:46
  * react-native, vue的类似功能veex 9:55
  * vue根组件替换掉挂载点的元素, react则是将虚拟dom绘制在里面 10:29
  * react自己的组件需要大写, 大小写一定要注意!!!!小写会被转化为字符串写在react.createElement中 10:37
  * 用sourceMap调试源代码而不是转义后的代码 10:40
  * react中className, htmlFor
  * react里的this很绕, 箭头函数里的this要看更外面, 为了this不丢设置为箭头函数?? 11:52
  * 一个需要记住的操作 11:55
  * JSX用小驼峰式来命名属性
  * html里非自闭和一定要写开始标签和结束标签, 而JSX都可以
  * class ...之后叫组件, 自己写出的变量叫元素, 一层一层展开才叫虚拟dom? 14:57
  * React.Component, 组件的基类
  * setState为什么是异步的?连续多次改动完成之后再更新(vue也是这样), 注意一个迷惑问题 16:15
  * key相同的元素进行对比


# 1015
 * es6中不写super会自动给你创造一个构造函数 9:32
 * 累计使用state里数据的方法, 读箭头函数的参数, 不要用this 9:38
 * 如何多次只触发一次dom更新?用observe函数 9:41
 * 该语法可能会被废弃 9:53
 * input checkbox有value属性就一定要写onchange 10:03
 * react几乎不用继承, 用组合
 * sytle里外层大括号是插值, 里面的大括号是对象 10:40
 * react里必须给style传对象, 不能传字符串
 * 行中间的空格不会被清楚, 但是行首行位的空格被去除了. 不过这种情况很少见 11:34
 * 目前react可以返回并列的数组了
 * react中箭头函数与普通函数的区别?? 14:59
 * 这种写法, 箭头函数是重新创建的 15:00
 * 原则上render里是不能连修改state的 15:03
 * 要让原函数对对象解绑, 可以另写一个函数, 把函数直接传进来. 多打几个随机数的调试方法看一下 15:12
 * react第三种ref的方式, 组件发现ref是个的对象, 组件会把自己挂在对象的current属性上 15:15
 * 函数组件是没有实例的 15:25
 * react函数组件和非函数组件
 * react的treeDiff算法 16:20
 * key的diff, 面试的高频问题 16:33
 * react的生命周期 17:07
 * 改了子组件自己的状态, 外层的dom树不会去对比 17:12
 * 根组件发生变化, 如果不做操作, 确实会从上到下render. 重新的属性完全一样, 不需要render, 可以通过shouldComponentUpdate来处理 17:16
 * 


 # 1016
  * render的时候是不能setState的, render是同步返回的, setState可能是异步返回的 9:12
  * 在箭头函数里调用 9:16 函数名不加括号就不运行, 只是读了一个函数 9:18
  * 判断函数是否被new调用, new.target. 箭头函数不能 new, 没有propetype, 没有arguments 9:29
  * 
  ``` js
  funtion DataProvider (props) {
    let result = props.rend
  }
  ```
``` js
  class MouseTracker extends React.Component {
    constructor(props) {
      super(props)
      
      this.statte = {
        pos: {
          x: 0,
          y: 0
        }
      }
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.mouseMove)
    }

    componetWillUnmount() {
      window.removeEventListener
    }

    render() {
      return this.props.render(this.state.pos)
    }
  }

  ReactDOM.render(
    document.querySelector("#root")
  )

```

* 错误边界作用也就报一下错误信息 15:10
* portals, 让
* 把函数放在reactDOM里需要意会下 15:33

* context
  - 解决多层次组件之间传递数据, 跨组件层级传递数据 15:53
  - 15:55
  - vue没有这个功能 16:20
  - e.persist(), 是否是同一个对象的问题 16：46

### 10:30
  * lazy组件的简单实现
  ``` js
    function lazy(f) {
      return class lazy extends React.Component {
        constructor(props) {
          super(props)
          this.state = {
            loading: true
          }
          f().then(Comp => {


            this.Comp = Comp
            this.set(sta)
          })
        }

        render() {
          if (this.state.loading) {
            return null
          } else {
            let Comp = this.Comp
            let [children, ...props] = this.props
            // 把自己的属性原样穿袄下面去
            return <Comp {...props}>{children}</Comp>
          }
        }
      }
    }

  ```


  * canvas就是内存对应的一部分数据
  * 闪的话说明组件刷新了一下 11:47
  * key和shouldComponentUpadate一起使用可以极大地提升效率
  * 组件化性能优化, 结构共享, 框架优化, Immutable 12:07
  * lodash的merge也能达到结构共享的目的 14:50
  * proxy功能 15:02
  * proxy不会挨个创建getter和setter 15:24
  * 项目视频如果用immutable, 改为imer?,  把老师这个例子搞明白 15:26
  
  * 函数组件 15:49
  * 不用生命周期都可以用函数组件 16:40
  * 为何会越来越快? 17:06
  * count的作用域? 17:34
  * useEffect, 写参数, 函数运行次数? 17:37
  * 预习useCallback, useRef 17:40

## 1017
  * hooks相关
    - 函数组件与class组件不同, 重刷必须是函数重新运行, class组件可以只掉render() 16:00      
    - 同一个组件, 每一次返回的setCount函数是相同的
    - setCount总是会完全覆盖原来的对象, 而class组件会和原来的对象做合并, 所以如下写法,  每一个状态都要设置
    - 有多少state, 就用多少次useState(), 
      ``` js
        setState({
          ...state,
          count: count + 1
        })
      ```
    - 拿到调用栈上最顶层的组件, hooks返回的东西就和谁绑在一起 16:28
    - 两个useState前后调用顺序要保持一致, 也不要写在if里 16:35


## 1018
  * imer几乎使用原生方法来创建不可变?? 9:24
  * hooks为函数组件带来状态, 函数组件原来叫无状态组件, 有了hooks后就不再是 9:37
  * 从上级组件祖先组件中接受context的值, 9:42

  * useEffect同一个作用域 , 数组是上一次执行和下一次执行之间传递的参数 9:43
  * useRef和createRef区别,  9:45
  * useCallback 除非出现性能问题, 一般也不需要用 9:56
  * 接下来这几个真的可能用不到 10:37
  * 自定义hook

  * redux解决组件跨层级传输, vuex和redux很像 14:46
  * redux是比较底层的框架, 源代码只有300行左右 14:48
  * 面试问题: connect怎么实现的?   16:10


  ## 1021
  * 跨域和cookie的问题, 一般在网页开发阶段有问题, 设置cors 9:36
  * 客户代理, 需要一个api的配置 9:39
  * todoApp为例的刷新 9:58

  * suspense在promise拿到数据确认成功后会重新渲染组件 10:48
  * Suspense中的fallback可以是一个组件 10:50
  * createFetcher(getUserInfo), 其中getUserInfo是自己写的一个promise, 把缓存以后的promise给返回
    ``` js
      let userFetcher = createFetcher(getUserInfo)
      // props.id会传递给getUserInfo
      let info = userFetcher.read(props.id)
    ```
  * unsafe面试高频题 12:01'
  * webpack的最简实现 14:42
   - 打包
   - 将除js以外的其他资源也可以当成可以require的资源
      如图片, css, json, svg, 字体,
      它通过把这些非js资源转换为等价的js文件来实现.
      这些转换工具在webpack里被称为loader
        即使是js文件, 也会金国babel-loader转换
    - plugin在webpack则是对整体的打包结果进行处理的一种插件机制
      如压缩, 混淆, 处理通用(vendor)模块的抽离
      自动生成入口html页面
    
  * webpack的代码分割功能 15:27
  ## 1022
    * 强缓存与更新的矛盾 16:03

## 1023
  会被webpack打包的可以用import, 不会的需要用node的require 10:54


  ``` js
 (function(){
  var age = Symbol()

  window.People = class People {
    constructor(name, gender, theAge) {
      this.name = name
      this.gender = gender
      this[age] = theAge      
    }
    getAge() {
      if (this.gender = 'f') {
        return 18
      } else {
        return this[age]
      }
    }
  }
())
  ```

  ``` js
  // 深度克隆, 环形克隆
  function cloneDeep(obj) {
    let cacheMap = new Map()
    
    return clone(obj)

    function clone(obj) {

      if (cacheMap.has(obj)) {
        return cacheMap.get(obj)
      }
      let ret = {}

      cacheMap.set(obj, ret)

      for (let key in obj) {
        let val = obj[key]
        if (typeof val == 'object') {
          ret[key] = clone(val)
        } else {
          ret[key] = val
        }
      }

      return ret
    }
  }
  ```

  ``` js
    var origCache = []
    var cloneCache = []

    function clone(obj) {
      var idx = origCache.indexOf(obj)

      if (idx >= 0) {
        return cloneCache[idx]
      }
      var ret = {}

      origCache.push(obj)
      cloneCache.push(ret)

      for(let key in obj) {
        let val = obj[key]
        if (typeof val == 'object') {
          ret[key] = clone(val)
        } else {
          ret[key] = val
        }
      }
      return ret
    }
  ```