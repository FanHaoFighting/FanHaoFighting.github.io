# 常用软件及开发工具使用说明
  ## 版本控制系统（git）
  ### 上传远程
  * gitbash操作流程及browser开发同步知识
    * git init(创建git）——git remote add origin URL（关联仓库）——git remote -v（检查当前关联的网址）——git pull origin master（将远程文件拉到本地）——git add（把文件修改添加到暂存区）——git commit（把暂存区的所有内容提交到当前分支）——git log（检查当前修改版本）——git push -u origin master（上传到远程）
    * 返回上一版本git reset --hard HEAD^ ，HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本

  * 常用git命令   
    *  直接命名 git commit -m ""
    *  查看分支：git branch
    *  创建分支：git branch <name>
    *  切换分支：git checkout <name>
    *  关联仓库 git remote add origin URL
    *  修改远程地址 git remote set-url origin URL
    *  创建+切换分支：git checkout -b <name>
    *  合并某分支到当前分支：git merge <name>
    *  删除分支：git branch -d <name>
    *  分支合并图：git log --graph
    *  普通模式合并，合并后的历史有分支:git merge --no-ff <name>
    *  合并冲突git会在本地修改文件里面给出提示，手动选择修改文件， 然后Git add ，Git cm, 再删除另外一个分支，git branch -d <name>。

  * browse同步
    * npm install -g browser-sync 安装
    * browser-sync start --server --directory -f "*.html" 安装同步html
    * browser-sync start --server --directory -f "*.html,*.js"  安装同步HTML和js
    * browser-sync start --server --directory --file "*"  安装同步当前文件夹内容
    * browser-sync start --server --directory --file "/*"  安装同步文件夹子文件夹


## 开启本地服务器（http网络服务）
  * npm install http-server -g  通过npm安装
  * http-server   使用命令

   
 

## 其他常用命令
  * 命令行基础
    * prompt 命令 提示符
    * 工作目录，Current Directory
      * pwd可以显示当前工作目录
    * 命令的格式
      * 命令名 参数1 参数2 参数3 参数4 ...
      * 参数是可选的
      * 
    * 一般命令，裸命令
        * pwd, cls/clear, ls,cd
        * print working diretory

    * 带选项/参数的命令
        * ls --long-output
        * ls -l
        * ls --help
        * ls -h
        * <input>
        * <input type="password" required>

    * 选项的简写与完整写法
      * command -a
      * command --append
      * command -abc <==> comamnd -a -b -c
      * 例： tar -xv    -fc ./foo.tar
    * 选项带值的命令
        * chrome.exe --proxy-pac-url "xxx"
        * chrome.exe --proxy-pac-url=https://xrlovefruits.com:5050/pac.js
        * babel a.js -o=a.compiled.js
        * babel src/a.js --output=dist/a.compiled.js
    * 将命令的输出到文件
        * echo abc > foo.txt（可输出编辑内容到文件）
    * 将命令的追加到文件
        * echo def >> foo.txt
    * pipe 前一个命令的输出(Output)做为后一个命令的输入(Input)
        * 管道符
        * IO  xxx.io  Google I/O 大会
        * input output
        * pm2 | grep "to" | lolcat    vertical bar
    * 命令行里按tab
      * 自动补全
    * ctrl+C  换行

  * 常用命令
      * ls     list （不打开以.开头的文件，使用ls -a可以显示）
      * ls -lah(显示所有文件详细内容)
      * cat,   con cate nate（查看文件内容，可一次查看多个）
      * echo （后面跟提示文字，用于脚本执行前的提示） 
      * echo 文字>a.text     将文字输入到a.text
      * cd   change directory
        * cd 相对路径（相对于当前工作目录）
          * ../表示当前文件夹的父文件夹 （中合路径中的上一个文件夹）anv/.. =0
          * ./ 表示当前文件夹，可忽略
        * cd 绝对路径，,以/开头； （cd - 上一个文件夹）
        * 补充：
          * 路径
          * 相对路径

      * sudo /super user do  超级管理员
      
      * mkdir 创建文件夹（目录）thedir // make directory/folder/path
      * rmdir 删除文件夹 只能删除空的 remove directory
      * rm 删除文件
      * rm -r thedir 删除thedir及其内容 ，递归删除
      * cp a.txt b.txt 复制
      * mv old new 移动（相当于剪切） 
      * touch a.txt 创建（空）文件
      * //chmod 文件权限控制
      * time command
      * 计算某命令的运行时间
      * date
      * 显示时间和日期
      * cal
      * 显示日历
      * //scp
      * //ping ip 测试与目标ip的连通性 （ping baidu.com)
        * sudo mkdir dir
        * gitlab删库事件
    
### vi编辑器
  * 基础使用
  * 达到可以在vps上编辑文本文件即可
  * esc 从编辑模式返回常规模式
  * i 常规模式下进入编辑模式
  * :wq 常规模式下输入

        
        
    
   
## vscode的常用快捷键 
 
* 注释快捷键
  *  单行注释：[ctrl+k,ctrl+c] 或 ctrl+/
  *  取消单行注释：[ctrl+k,ctrl+u] (按下ctrl不放，再按k + u)
  *  多行注释：[alt+shift+A]
  *  多行注释：/**
* 其他快捷键
  * Ctrl shift L 选中所有光亮区域
  * 移动行：alt+up/down
  * 代码格式化：shift + alt +f
  * HOME 调转到行头
  * end  调转到行尾
  * 显示/隐藏左侧目录栏 ctrl + b
  * 复制当前行：shift + alt +up/down
  * 删除当前行：shift + ctrl + k
  * 行增加缩进: ctrl + [
  * 行减少缩进: ctrl + ]
  * 删除行 ： ctrl + shift + d
  * 折叠代码： ctrl + k + 0-9 (0是完全折叠)
  * 展开代码： ctrl + k + j (完全展开代码)
  * 快速回到顶部 ： ctrl + home
  * 快速回到底部 : ctrl + end
  * 回到撤销之前：Ctrl +Y
  * 控制台终端显示与隐藏：ctrl + ~
  * 查找文件/安装vs code 插件地址：ctrl + p
  * 新建一个窗口 : ctrl + shift + n
  * 字体放大/缩小: ctrl + ( + 或 - )
  * 裁剪尾随空格(去掉一行的末尾那些没用的空格) : ctrl + shift + x
  * 拆分编辑器 : ctrl + 1/2/3
  * 切换窗口 : ctrl + shift + left/right
  * 关闭编辑器窗口 : ctrl + w
  * 关闭所有窗口 : ctrl + k + w
  * 切换全屏 : F11
  * 自动换行 : alt + z
  * 显示git : ctrl + shift + g
  * 全局查找文件：ctrl + shift + f
  * 显示相关插件的命令(如：git log)：ctrl + shift + p
  * 选中文字：shift + left / right / up / down
  * 快速切换主题：ctrl + k / ctrl + t
  * 格式化选定代码 ：ctrl + k / ctrl +f







# HTML补充知识
  ## name and id
   * name只有一些标签可以使用，可重复。可配合target使用，使新网页的地址为name的父标签（eg <iframe name="sfds"> <a target="sfds"> 
   * ID每一个标签都可以，不可重复。重复只调用前面的ID
   * class可以重复，而且只可以为多个，表示属于多个类 (class ="asdf  sfsdf  fsfsa") 

## 常见属性配合
   * <label for="iso"> <input  id="iso">
   * <a target="xm">  <iframe name="xm" >
   * <form action="https://www.google.com/search" target="_blank" method="get">
     <input type="text" name="q" >  <!-- 谷歌的默认name为q -->
     <input type="submit">
     <!-- 其他页面引入Google搜索 -->
   * <a href="#whoami">跳转本页的底部</a> <input id="whoami">  <!-- 指定跳转位置 -->
   * <img usemap="#somemap"> <map name="somemap">

 ## 小技巧   
   * 可以为一些元素增加一个自己的属性，名字和值都由自己决定（abc=123），然后可以用属性选择器击中该元素[abc=123]

# CSS知识汇总
 ## CSS编写规范
   * CSS外部文件修改完后在}后面加回车键，方便后期git diff 查看准确的修改提示（Windows换行符CRLF ，Linux换行符LF）
     * 换行在开发中本身就是一个字符，CSS代码写完之后不加换行符，在下面的新代码开头写换行符时，相当于在CSS代码后面直接加换行符，这样在开发git diff 检查代码时会给开发人员造成困扰.
   *  CSS中，  ，号前后的选择器没有任何联系.  div>a , p{}  div的子元素和p标签，而不是div后代中的(p和a),CSS中不能有改变优先级的（）。
   *  CSS属性选择器中， 冒号描述的是紧挨着其前面元素，如果前面紧挨着空格，则描述的是某元素的后代。如果前面紧挨着class或者ID，先选择元素再在元素中寻找对应的类或者ID。
      *  div .bat.adf:first-of-type   先寻找div后代中的first-of-type ，再在筛选出的标签中寻找符合.bat.adf的类标签
   * a标签的伪类最好顺序  link visited focus hover active  ,为了a标签的每一种状态都有交互效果（这几个优先级一样，但是浏览器会先执行后面的伪类）
   * nth-child(n)中的"n"应该理解为任意的意思
   * 属性类选择器[属性=值]
     :not  选择器取反    not紧后面不写层级选择器的空格和其他表示层级的符号
     $=   结尾=
     ^=   开头=
     *=   任何位置=
     ~=   完整单词=
     [lang|= "en"]等同于 [lang="en"]+[lang="en-"]  ，表示以en开头或者以en-开头
   * CSS选择器只能由前面的元素选择后面的元素，不能反过来。

##  层级选择器
     . 表示类选择权
     ## 表示ID选择器
      .foo.bar  值为foo且为bar的类(class="foo bar")
      .foo .bar空格表示后代选择器
      div > p     >号表示子元素选择器
      div + p + p  邻接选择器，只选择1个紧邻着的兄弟标签
      div ~ p      div后面的所有兄弟p标签

 ## 选择器的优先级
  *  第一：!important(优先级最高)
      第二：(内联样式，   #，     类选择器/属性选择器/伪类选择器,   元素选择器（标签选择器）/伪元素选择器)
      第三：继承（即使是继承下来的！important也是没有优先权的）          
  * 优先级的定义，四个数
      * 0,3,3,10
      * (0，4，4，29)
      * (0, 6, 1, 0)
      * 四位的无穷进制数
      * p63页
  * id选择器    #foo #bar #baz {} 
      * 0，1，0，0
  * 类选择器，属性选择器，伪类选择器
      * 0，0，1，0
  * 元素选择器（标签选择器），伪元素选择器
      *
      * 0，0，0，1
  * 连接符如 > + ~ 等不参与优先级的计算
      * 于是 p a 与 p > a 的优先级是一样的
  * 通配符 *
      * 0，0，0，0
      * 所以以下选择器的优先级是一样的
          * div p      div的所有后代的p元素
          * div * p      div的孙子及其后代的p元素
  * 连接符 combinators，无优先级
  * 内联样式/行内样式/行间样式/inline style
      * 1，0，0，0
      * <p style="color: green;">
  * ！important
      * p {color: red !important;}
      * 有与important冲突的属性，important都会占上风
  * 继承
      * 没有优先级，比【*】的优先级还要小

* 层叠样式
            双方选择器优先级排序一样时，看important的来源
      * 第一：最终用户important样式
      * 第二：网站作者important样式 authored style
            
            双方选择器优先级排序一样时，没有important时，看样式来源
      * 第三：作者普通样式
      * 第四：用户普通样式 Custom.css

      * 第五 默认样式，浏览器内置样式，User Agent Style（最低）

       * 浏览器HTML默认body大小为16px 
* 调整优先级的小技巧（重复就完事了）
     #AA可以写作#AA#AA#AA  (0,1,0,0)变为(0,3,0,0)
    .AA可以写作.AA.AA.AA  (0,0,1,0)变为(0,0,3,0)
    .a:hover可以写作.a:hover:hover:hover   (0,0,2,0)变为(0,0,4,0)

## 盒子模型
  * 左边界+左边框+左填充+content box+右填充+右边框+右边界=父元素内容区宽度
    上边界+上边框+上填充+content box+下填充+下边框+下边界=父元素内容区高度
  * content box（文本盒子，没有文本时其尺寸为0）--padding box--border box（可见区域）----margin box（不可见，不可交互）  
  *  width的默认值为auto，margin一般默认为0；
     标题，列表，表格等元素一般有默认的margin或者padding
  * background-color说的是border box的背景颜色
  * background-image默认从padding box的左上方开始平铺背景图片
  * outline属性，位于border外围，紧贴着外边框，可起到突出元素的作用，不影响网页布局。
  * padding/border的值不能为负值,margin可以为负值 
  * width/height默认设置的是content box的宽度
    * box-sizing：border box/content box , 默认值为content box，声明宽高是哪部分盒子的尺寸（目前只有2种盒子可选）
  * 边框的其它样式设置了但是颜色没有设置，这时边框颜色默认为元素内容的前景色（即字体颜色，不是背景色）
  * 包含块：一个元素的包含块是离该元素最近的块级祖先的content  box
    * 初始包含块： viewport(html的包含块)
  * 正常流： Normal Flow，从左往右，由上往下
  * 如果border-left足够粗，是一个梯形，内容区为0时变成了一个三角形。
  * 在CSS中，两个或多个毗邻（父子元素或兄弟元素）的普通流中的块元素垂直方向上的 margin 会发生叠加。这种方式形成的外边距即可称为外边距叠加(collapsed margin)。
    两个盒子相邻，两个正margin重合，取其中最大的margin为合并后共用的margin.
    两个盒子相邻，两个负margin重合，取其中绝对值最大的margin为合并后共用的margin.
    两个盒子相邻，两个正负margin重合，取正负相加的值为合并后共用的margin.
    _创建BFC和通过对父元素建立border，padding，或者间隔可以使外边距不合并；_
    水平方向margin不会合并
  * 一个块元素没有内容时，默认margin padding border content都为0 
  * margin-left无法被计算为负值
  * padding box是可视盒子，不影响布局 margin box是布局盒子
    举例：两个float left的元素，第一个占满一行，第二个元素本来在第二行， 给它设定负margin使它的布局盒子变成零，它就会到上一行的右边
    float元素不能高过自己前面的元素

## HTML行内元素、块状元素、行内块状元素的区别
  * 三种属性可以通过display:inline;display:block;display:inline-block;相互转换
  * 行内元素
  ```
  行内元素最常使用的就是span，其他的只在特定功能下使用 todo待完善
  特征:
    (1)设置宽高无效
    (2)对margin仅设置左右方向有效，上下无效；padding设置上下左右都有效，即会撑大空间
    (3)不会自动进行换行
  ```
  * 块状元素 
  ```
  块状元素代表性的就是div，其他如p、nav、aside、header、footer、section、article、ul-li、address等等，都可以用div来实现。不过为了可以方便程序员解读代码，一般都会使用特定的语义化标签，使得代码可读性强，且便于查错。
  块状元素特征：
    (1)能够识别宽高
    (2)margin和padding的上下左右均对其有效
    (3)可以自动换行
    (4)多个块状元素标签写在一起，默认排列方式为从上至下
  ```
  * 行内块状元素
  ```
  行内块状元素综合了行内元素和块状元素的特性，但是各有取舍。
  行内块状元素特征：
    (1)不自动换行
    (2)能够识别宽高
    (3)默认排列方式为从左到右
  ```

## 正常流块元素水平布局（margin-right/left，width）
  *  没有auto
      过分受限，重置margin-right为auto（做右往左的语言会把margin-left设置为auto，比如说阿拉伯语言）
  *  一个auto
      算出它
  * 两个auto
      两个margin为auto，计算为相同的值，水平居中的方法
      其中有一个auto给到了width，margin的auto为0
  *  三个auto
      两个margin都重置为0
  *  margin-left为auto时无法计算出负值（对于从左往右的语言）
  *  max-width 最大宽度
      min-width  最小宽度
      搭配width为auto时使用
  * html或body如果设置了背景颜色，那么这个颜色会覆盖整个窗口（无论设置的html或body元素的区域有多大），区域外的颜色优先和html的一致，如果html没有设置背景颜色，则区域外的颜色和body一致
  * 替代元素中的块元素的width由块元素自身决定，默认值不为auto.(比如img，引入的图片默认宽度由图片自身决定，高度成比例变化)
## 正常流块元素垂直布局（margin-bottom/top，height）
  * 包含块的高度默认auto，由其宽度和子元素的高度等等填充起来
  * 垂直方向margin-bottom/top都为auto时，不会垂直居中，而是auto都为0
  * margin和padding的百分比是基于包含块文本框（content box）的宽度，上下左右都是如此；
  * 当包含块的高度不确定时，且其高度是由其内容区撑大时，margin和padding的高度不能写成百分比；逻辑错误
  * 当包含块的高度确定时，或者其高度不由内容区撑大（如定位），可以使用百分比
  * 当一个包含块里面都是块元素时，包含块没有设置border和padding时，包含块的高度就是里面最上面块元素上边框到最下面下边框的距离；

## BFC/块格式化上下文（Block Formatting Context，BFC）
  * 常规流块元素没有边框和内边距时，包裹着子元素的border-box，父子元素的margin会合并
  * 触发了BFC的元素，无论如何都会包裹着其子元素的margin-box，父子元素的margin也不会合并
  * 下列方式会触发BFC：
    浮动元素（元素的 float 不是 none）
    绝对定位元素（元素的 position 为 absolute 或 fixed）
    行内块元素（元素的 display 为 inline-block）
    表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
    display 值为 flow-root 的元素(目前只有chrome和火狐部分版本支持, safari不支持)
    overflow 值不为 visible 的块元素
    根元素或包含根元素的元素
    表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
    匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
    contain 值为 layout、content或 strict 的元素
    弹性元素（display为 flex 或 inline-flex元素的直接子元素）
    网格元素（display为 grid 或 inline-grid 元素的直接子元素）
    多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
    column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。
  * 补充
    常规流块级元素布局模型: display: block;
    BFC Block Format Context 块级布局上下文 BFC封闭, 让你debug的时候不用考虑外面的元素
    BFC的几大特性: 1 包住内容, 里面的margin不会出来/包住里面的浮动元素.  2 变窄以避开浮动元素 todo待理解
    

## 定位 position
   * 默认值static，表示常规流。
   * 定位指的是margin box定位到对象的padding box 
   * 固定定位 fixed
      相对于视口固定 ，不随滚动条滚动，脱离常规流
   * 相对定位 relative 
      相对定位的元素是在文档中的正常位置偏移给定的值，但是不影响其他元素的偏移。相对自己定位，原来的位置保留在常规流
   *  绝对定位  absolute
      相对于最近的定位祖先定位，如果祖先没有定位，相对于第一屏（滚动条在最上方时的可视窗口）定位，脱离常规流
   *  粘性定位 sticky
      粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定值前为相对定位，之后为固定定位。在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下；当其包含块的文档区脱离视口时，它会被包含块带走。元素在常规流的位置保留
      #one { position: sticky; top: 10px; }
   * 层叠覆盖关系
     * 定位流盖住常规流    
     * 后出现的定位流元素盖住前面定位流元素。所有定位脱离常规流的元素都在一个层面，在同一个位置上，后出现的元素会盖住前面的元素，需要设置z-index改变叠层  
     * z-index  必须配合定位使用
       * 调节层叠覆盖关系，常规流默认值为0
       * z-index:值；   值大的盖住值小的，可以有负值，都为整数。
    * 常用布局
      * 元素明显重叠时，可用定位实现
    * 元素的方位
      top left right bottom
      当不明确指定时，元素的从它在常规流中开始的位置开始。
      4个方位的值表明的是离其定位对象四周的距离
      取百分比时，百分比相对于包含块（或定位祖先）的高度, 如果这个祖先是块级元素, 包含块则设置为该元素的padding-box(由边框界定的区域), 如果这个祖先是行内元素(inline/inline-block), 包含块则设置为该祖先元素的内容边界(content-box).
      定位元素设定百分比高度时也是用包含块的宽高为基准值
      定位时被定位元素用margin-box来完成定位
      若元素高度未定, 元素的方位可以四个偏移量隐性指定宽高. 宽高设定数值的元素, 当设定四个方位的值时, top优先级大于left, left优先级大于right.
    * 父相子绝, 子元素脱离常规流, 无法撑起父元素的高度.  

## 行内布局
  * 基本术语和概念
    * 匿名文本：直接包在块元素的文本，继承父元素的line-height高度   数值 
    * em框：也叫字号框，font-size决定其高度
    * 内容区：多个字号框拼接在一起组成了内容区（content area)，内容区被该元素的border包围，和border box类似
      对于行内非替换元素或匿名文本某一部分, font-size值确定了内容区的高度(P191)
    * line height框：假想概念，高度为行高，内容区和其共用一条居中线。(可以理解为同一个元素中，两个文本行基线间的距离)
        * 当line-height的值为数字或者百分比时，表示用字体的大小乘以数字或者百分比(line-height:normal, 取决于用户端。桌面浏览器（包括Firefox）使用默认值，约为1.2，这取决于元素的 font-family。)
    * 行间距：line-height  -   font——size
    * 行内框：对于非替换元素，行内框高度等于line-height的值；
              对于替换元素，行内框就是margin-box，
    * 行框：用最小的框将每一行所有的行内框包裹起来，这种框就是行框；上下行框紧紧挨着形成布局，如果父元素是块元素，行框撑起了父元素的高度；
            行框和line-height和vertical-align有关。
    --------------------------------------------------------
    - 理解小结: fontsize决定em框，em框排列成内容区（假想content area） ，内容区加上行间距等于line-height=布局盒子。 各子元素的line-height以及vertical-align 排列成行框。 
    - 非替换元素margin border padding不会影响垂直方向的布局, 但对水平布局有效果
    - 替换元素的margin border padding属性对垂直和水平布局都有效果。可是对line-height没有效果。 todo 待理解
    - 块级元素的line-height值适用在所有子元素里，不管是匿名文本还是行内元素。 todo 待理解
    - 如果font-size比line-height还小，行间距是负的
    - 内容两端对齐可以用justify
    - 行内元素的阴影是折断后生效， 而border是折断前生效
    - 让更大的字体不超出行框的方法就是把line-height设定成大点
    - BGC区域是内容区不是行内
    - 横向排列的margin是之和, 后盖前
    - 替换元素的布局盒子包括margin， 与布局盒子的最下边和其他匿名文本的基线对齐, check-box特殊，与自己图片本身最下端对齐， 文本框（input text）的话与里面的字的基线对齐。
    -  只要有行就得假想有一个字符，它的base-line会撑起来行，导致图片下面有空隙。解决方法把照片设定成block元素自己独自在一行
    - span定义为absolute会变成block   而定义为relative还是inline元素
    - 行内元素折行后默认每一行都会跟匿名文字的基线对齐, 例子： aaaa<span>bbbbbbb</span>  span元素折行， line-height值小于normal值就无法继续生效， 因为被匿名文本的默认line-height顶起来  todo待理解
    - div包围的多行文本水平垂直居中的方法
    ```
      1）要把里面内容用span包起来
      2） span的display属性改成inline-block；
      3） vetical-align设定为middle
      4） div的line-height设定为本身的height（最好设定的是min-height，以防内容过多，超出框）
      5） span的line-height设定为normal， 不然会继承父元素的line-height，超出父元素
    ```
    - 不管div多大总是合适的中间放置img的方法
    ```
    1） div的text-align设定为center；
    2） div的line-height与height值设定为相同
    3）img的vertical-align设定为middle 
    4）最重要的img 的max-width：100%；max-height：100% 设定其目的在于不让照片扭曲伸展，或者被切掉。
    5）照片会跟默认的假想的匿名文本中间对齐，会往下偏。 font-size设定零就会完全居中。
    ```
    - clip或者clip-path（polygon[]）后者不用定位 可制作各种交互效果  
    例如： 相邻的两个页面颜色不一样，他们的相同位置的fix元素的背景以及字都会跟着网页流动变化（小米宣传活动网页 5/20日的下午视频）
    又例如用许多三角形制作动物，动物之间还会变化。 每个变化元素可设定transition的延长时间  （webhek.com）


  * 空格的大小和字体一致，字体为0时没有空格。
  * 基线是英文字母"x"的下端沿
  

  * 模型：
    行内框在一行以内水平排列，空间不够后就折行
    一行的所有行内框形成行框
    行内框可以通过vertical-align做垂直微调
  * 一个行内元素跨行会生成多个盒子
  * 匿名文本
    所在属块元素的line-height框
  * display: inline
    行内框也是仅通过line-height框确定
    所有额外的padding，border不影响行内框的生成
    对inline元素设置宽高无效
    当inline元素无padding及border时，其底色区域的高度为当前字体line-height为normal时的计算值，与实际设置的line-height无关。
  * display: inline-block/table
    行内框为margin-box的外边缘
    基线为最后一行文字的基线/无内容时以m-box下边缘为准
    考虑其自身位置/摆放时，当成图片考虑(从外面看这个元素)
    考虑其内容的布局时，当成块/表(从这个元素里面看)
  * 行内放 inline-block 元素时, 确定 inline-block 元素的基线
  ```
    inline-block 内部无流内的inline/inline-block元素 或者overflow为除visible外其他值, 其 baseline对齐下 margin 的下边缘
    如果有流内的inline/inline-block元素时, 按最后一个line box的 baseline计算
      最后一个line box 是 inline元素(即文本)时, 按文本的baseline(注意, 如果 inline-block元素内包含了block元素, block元素内又放了文本, 此时还是以文本的baseline为基准)
      最后一个line box 是 inline-block元素时, 按本规则继续判断(根据子inline-block元素内包含文本还是 inline-block元素确定baseline)
      https://thxiami.github.io/miao/note/baseline-rule-of-Inline-block-element.html
  ```
  * 只要行框形成，就要考虑那一行有一个匿名文本
  * 对于替换元素（图片）设置display：inline无效，会当成inline-block；


  * vertical-align ：用于调整行内框的垂直对齐方式
    baseline(默认值)
    使元素的基线与父元素的基线对齐。HTML规范没有详细说明部分可替换元素的基线，如<textarea> ，这意味着这些元素使用此值的表现因浏览器而异。 
    top
    使元素行内框的顶端与行框的顶端对齐。
    bottom
    使元素行内框的底端与行框的底端对齐。
    middle
    使元素的中部与父元素的基线加上父元素x-height（译注：x高度）的一半对齐。 todo: 这一点待掌握
    text-top
    使元素的顶部与父元素的字体在lineheight=normal时的顶部对齐。 todo 什么叫line-height=normal
    text-bottom
    使元素的底部与父元素的字体在lineheight=normal时底部对齐。
    sub
    使元素的基线与父元素的下标基线对齐。
    super
    使元素的基线与父元素的上标基线对齐。
    percentage
    使元素的基线对齐到父元素的基线之上的给定百分比，该百分比是line-height属性的百分比。可以是负数。
    <length>
    使元素的基线对齐到父元素的基线之上的给定长度。可以是负数。
  * 垂直方向上文字摆放位置看两点: 字体与行高
  * 行内元素的边框不影响行高, 所以折行时会有违反直觉的地方: 第二行的上边框在第一行下边框之上.

## 表格
   *  table    =  display:table   
      tr       =  display:table-row   
      thead    =  display:table-header-group   
      tbody    =  display:table-row-group   
      tfoot    =  display:table-footer-group   
      col      =  display:table-column  
      colgroup =  display:table-column-group  
      td,th    =  display:table-cell   
      caption  =  display:table-caption   
   *  col/colgroup 的可用样式只有border,background,width,visibility

   * 表层 table--colgroup--col--tbody--tr--td，有小到大
   * border-collapse:collapse  边框合并，默认为separate，不合并；  合并之前只有table和td可以设置边框，合并后tr tbody col colgroup都可以设置边框，但是在同一个位置的边框都会合并。
     合并规则：1 值为hidden优先级最高，值为none优先级最低。
              2 优先级顺序（宽度:谁宽谁优先，   样式：double--solid--dashed--dotted，     颜色来源：和表层一致，         位置：左上方大于右下）
   * table-layout：fixed； 设置表格宽高需要这个属性   
   * 表格单元格自动垂直方向居中，为table设置text-align为center可以水平垂直居中
   * 单元格的宽高都会默认内部文本不会超出；例如为左右两个cell设置width分别为1%和100%；，左边的cell会尽量小，右边cell尽量宽，但是会忽略其比例，因为要保证其内部文本不超出。    若左右两个cell设置width分别为40%和60%，而且空间足够包裹文字，则两边cell的比例就为4:6；
   * empty-cells：设置空单元格是否隐藏

## 浮动
  * 浮动元素的布局盒子也是margin box
  * 块级元素无法感知浮动元素，行内元素可以感知到并且避开布局盒子。处于半常规流，和fixed和absolute一起用时不生效，和relative一起用时先浮动再相对定位。
  * 浮动是在离其最近的块级祖先包含块中浮动
  * 元素浮动后会生成块级框，及浮动元素没必要指定display:block
  * 浮动元素下移之后就不会再上移了，可以左移或者右移，
  * 同一个包含块内浮动元素之间不能互相重叠。
  * 触发BFC浮动元素不会超出其包含块。触发BFC的块元素周围有浮动元素时，为了避开浮动元素BFC元素会变窄
  * 在常规流中，行内元素盖住浮动元素(todo 行内能盖住浮动元素?难道不是感知到?)，浮动元素盖住块级元素
  * 清除浮动：clear元素，用于块元素，使其下移到两边没有浮动元素。块元素的border box和浮动元素的marginbox紧挨着；
  * 闭合浮动：某个块框通过增加自己的高度使其能够包含其浮动的后代元素（通过自己变大，使所有后代浮动元素被自己包起来）
    闭合浮动的方式
    * 触发BFC：
      overflow: hidden/auto/scroll;
      display: inline-block/table-cell/table/flow-root;
      position: absolute/fixed;
      float: left;
    * 在末尾使用一个行元素生成的行框将其撑高
      缺点：会生成一个行框，有一定的高度
      解决方法是font size=0,line-height=0
    * 在末尾使用一个clear:both的块元素将其撑高, 例子：ul::after{content:"";display:block;clear:both;}
      优化：用after伪元素 包含块类名加clearfix, 之后 .clearfix::after{content:"";display:block;clear:both;} 与上面的方法实则相同，更语义化而已
    * 为什么需要清除浮动： 其它块元素都看不见它， 可是所有行内元素都能看见它， 围着它转（就算是其它包含快的行内元素）

     

              


##  CSS补充知识
  ### 伪元素
  * div::before（位于开始标签之后）     div::after（位于结束标签之前）
    这两个伪元素都是div的子元素 ，直接在CSS中使用。
    ::selection {被鼠标选中的文字，只能设置前景色和背景色}
    ::target {选中id的值为地址栏中#后的内容的元素}

  * 伪元素后面不能加伪类，只能加在其父元素后面
    div:hover::before  对
    div::before:hover  错
       
  * 伪元素的属性
    * content属性，必要属性，它的值是文字或者空值，多个值之间用空格分开  content："" "asf" attr(父元素的属性) '空格'  ；
      attr(父元素的属性) = 父元素的该属性值                    /A 回车    

      
 ### 回流与重绘 
   * 回流 reflow relayout
      页面样式的变化涉及到重新计算布局
      在可能的情况下不要触发回流或把回流控制在一定的范围内
      因为回流速度更慢
    * 重绘 repaint
      速度快
      页面样式的变化不涉及布局的计算，只变了颜色，背景，阴影等不影响布局样式 

 ### 新元素和属性收集

   * pointer-evens
     默认值为auto，鼠标可以交互
     值为none时，鼠标在对象里面无法交互，但是会指向其后代
   *  visibility，支持动画
      默认值visible，可见
      hidden 内容隐藏，位置还在
      collapse 用于 <table> 行、列、列组和行组，隐藏表格的行或列，并且不占用任何空间（与将 display: none 用于表格的行/列上的效果相当）
   * min-height/width   max-height/width  设置元素宽高的最大最小数值  ，浏览器的窗口不是html元素，浏览器的窗口大小不能由这两个属性控制，有浏览器默认控制。
   * clip-path CSS 属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。 
     clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);  不规则图形，四个坐标对应4个点；
   * transition  平滑的改变CSS的值
      transition-property
      指定过渡的属性值，比如transition-property:opacity就是只指定opacity属性参与这个过渡。
      transition-duration
      指定这个过渡的持续时间
      transition-delay
      延迟过渡时间
      transition-timing-function
      指定过渡动画缓动类型，有ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier()贝塞尔曲线
      其中，linear线性过度，ease-in由慢到快，ease-out由快到慢，ease-in-out由慢到快在到慢。   
    * 列表图标
      list-style-image:url() 图片会原比例尺寸插入，无法调整大小和位置，几乎不用 
      list-style-position:inside ：设置图标在li`边框的内外部
      list-style-type:decimal：设置图标的样式，圆，方块，10进制等
    * <link  media="print"> 设置代码在哪种设备中生效  
    * 计数器 counter
      counter-increment: 计数器名（遇到该计数器开始计数）  数字（加几，默认1） 
      counter-reset：计数器名(遇到该计数器重置)  数字（重置为几，默认0）
    * 打印断页
      page-break-before：avoid/always    该标签前面不断页/断页
      page-break-after :avoid/always    该标签后面不断页/断页
      page-break-inside : avoid    该标签永远在一个页面里面
    *  all:initial 所有属性回到初始值，即浏览器默认值 
    * white-space：nowrap    设置文本内容不折行
      word-space:12px; 设置行内元素之间的间距
    * box-shadow ：/* inset（向内扩散，不写就默认向外扩散） | x偏移量 | y偏移量 | 阴影模糊半径| 阴影扩散半径 | 阴影颜色 */
    * 为所有元素设置box-sizing较好的方法
      html {
      box-sizing: border-box;
      }
      *,::before,::after {
      box-sizing: inherit;
      }
    * opacity ：0~1  透明度
      不能继承，父子元素都有透明度时，先将子元素透明好，再透明父元素，父子元素的透明度在子元素的位置会叠加
    * 不完全总结: 
      name | display:none | opacity:0 | visibility:hidden
      :-: | :-: | :-: | :-: 
      占据空间 | 否 | 是 | 是 | 
      回流与渲染 | 是 | 	否 | 	否 
      子代继承性 | 不继承 | 继承 | 继承 
      子代反继承 | 否 | 	否 | 	能 
      transition效果 | 无效 | 	有效 | 	有效
      绑定的事件 | 不响应 | 能响应 | 不响应
      - 元素叠在一起时, opacity:0的元素虽然看不见, 但是在叠在上层的相应元素依旧会被选中.  visibility:hidden则不会被选中. 


## CSS实现绝对居中的方案(父元素和子元素宽度固定, 高度可变)
  * 垂直居中
    - 方案1: 定位(子元素过分受限配合 margin:auto)
    ```
      父元素 positon: relative,; 子元素 position: absolute
      子元素设置高度
      子元素过分受限 top:0; bottom:0;
      子元素设置 margin-top: auto; margin-bottom: auto;
    ```
    - 方案 2: 定位(子元素过分受限配合 margin:atuo)
    ```
      父元素position: relative; 子元素 position: absolute
      子元素设置 top: 父元素高度的 50% - 子元素高度的50%
    ```
    - 方案 3: 行内布局
    ```
      子元素设为行内元素(display: inline)
      子元素 line-height 等于父元素 content-area 高度(父元素内的匿名文本垂直居中)
      子元素 vertical-align: middle (设置子元素行内框的中间位置对齐匿名文本中 x 字符 baseline 向上 0.5ex 的位置, 也就是x字符的中点)
    ```
    - flex居中: 略过不表(记得可以用margin设为auto来做)
  * 水平居中
    - todo 原作者有问题 方案 1:定位(子元素过分受限配合 margin:atuo)
    ```
      定位: 父元素 position: relative; 子元素 postion: absolute;
    ```
    - 方案 2:定位(设置子元素 top ? todo)
    ```
      方法 1:
      子元素 margin-left 设置为(父元素 content-area 宽度 - 子元素宽度) * 50%
      方法 2:
      子元素 margin-left 设置为 父元素 content-area * 50%, 同时 transform: translateX(-50%); todo待理解
    ```
    - 方案 3: 行内布局
    ```
      子元素设为行内元素
      父元素行内文字水平居中 text-align: center;
    ```
   * 包含块的line-height=height时，实现文字的垂直居中。内容区和行高共用一条居中线，当行高等于行框高度时，行高的中点也就是行框的中点, line-height设置100%时不起作用, 百分比相对的字体大小；
   * 包含块text-align=center，使其内容区水平居中。
   * 包含块内容区margin=auto时，实现水平居中；
   * 行内元素vertical-align=middle,加上font-size：0，可以实现垂直居中。
     字符X在父元素中并不一定是垂直居中的，各个字体的字符X的高低位置不一致。所以，当字体大小较大时，这种差异就更明显。而当字体大小为0时，基线的位置就等于中线的位置，我们通过设置父元素的font-size:0来使图片达到完成垂直居中的效果 ；
   * 绝对定位时，设置内容区的上下左右都为0，margin为auto时也可以实现水平垂直居中；margin在这种情况下会自动调整，上margin等于下margin。左margin等于右margin
   * flex布局时，justify-content=center，align-items=center可以实现水平垂直居中
   * 利用表格时，table-cell自带垂直居中属性，为table设置text-align为center可以水平垂直居中
   * 利用translate平移属性
      先绝对居中到父元素的中心（top：50%；left：50%）
      再向上和向左平移自身的50%（ transform:translate（-50%, -50%））



## CSS3知识
  * 以前对于目前有争议不兼容的属性，不同的浏览器加上不同的前缀，现在这种做法已淘汰
    -ms-属性：值         IE浏览器
    -webkit-属性：值     Chrome浏览器
    -moz-属性：值        火狐浏览器
  * 对于大型商业网站，pc端一个网站，移动端一个网站，两个团队开发
    对于简单的网站只用一个站点，配合media query 让站点在不同的设备上展示比较合适
### media query语法
    - 使用link插入外部样式表
      <link  media="logic media and (expression)">
    - 使用@import指令调用外部样式表
      @import url() logic media and (expression)
    - 直接在css区域插入
      @media logic media and （expression）{css语法}  
  * media query不会增加选择器的优先级
  * @media(max-width:500px){rule} 小于500px生效
    @media(max-width:500px){rule}  大于500px生效
  * 像素比：css像素比上物理像素。DPR   device pixel ratio
    手机上一般为3，即手机上一个css像素对应3个屏幕物理像素,更多用dppx表示 dots per pixel ratio
    @media media and (resolution:3){css语法}
  * <meta name="viewport"  content="width=device-width" >
     让手机浏览器以多少宽度的初始快包含块来渲染页面，如果不加这个标签，手机会以宽度1000px左右包含块来渲染页面
  * 移动端设计, 视觉稿宽度多宽, 就把窗口设置成多宽
## 移动端布局: 
  * viewport标签仅被移动端浏览器支持
  * viewport设置的是浏览器宽度是多少
  * PC端浏览器的渲染窗口即为窗口大小减去额外浏览器自身元素
  * 如果没有viewport标签，移动端浏览器会主以980像素的浏览器窗口渲染页面（即手机浏览器宽度为980px
  * 如果有，如果viewport写为width=X，则移动端浏览器就以Xpx为初始包含块渲染页面
  * 如果写为width=device-width，则移动端浏览器会以出厂设置的宽度为初始包含块的宽度渲染，出厂设置的值一般来说与屏幕物理尺寸正相关，范围一般为320到400左右，目前最主流的是360
  * 假定视觉稿宽度为X, 对于针对移动端的页面，一般有两种情况：
    1. 页面较复杂，希望页面在不同的手机上效果和比例一致（mi.com移动端）,页面需要等比缩放，即视觉稿宽度跟浏览器/手机屏幕一样宽, 且我们希望从视觉稿里测量出来的数据能直接用在代码里
      - 所有用户的设备都支持设定视口宽度的产品来说，直接把视口宽度设置为**视觉稿宽度**，页面使用px为单位开发，数值直接从视觉稿量出来
      - 对于并不是所有用户的设备都支持设定视口宽度的产品来说，我们同样希望视觉稿里测量出来的数据可以直接用在代码里，于是要找一个可以灵活缩放的单位（因为不同的手机窗口宽度不一样），让X倍的这个单位正好等于宽屏宽度 
        ```
        Xrem = 100vw
        rem = (100vw / X)
        html {font-size: calc(100vw / X)}
        ```
        有些浏览器不允许最小字号小于12px，而上面的公式算出来的值过小，会被重置，所以将其放大100倍，即
        ```
        html {font-size: calc(100vw / X * 100)
        ```
        还有些浏览器不支持calc/vw，所以这个值通过js读取出浏览器视口的宽度并自行算出，然后设置到html元素上
    2. 页面较简单，希望页面在更大的手机上显示更多的内容（github移动端）
      - 直接使用device-width且使用px以及流式布局（块元素自动占满宽度）
    3. 对于杂合形页面，即布局复杂，又有很多文字
      - 布局使用rem，文字使用px，width=device-width
###  多列
   * column-count:2/3; 设置文本分成多少列，和column-width一起用时表示最大多少列
     column-width：150px； 每列的最小宽度
     column-count，column-width一起使用时，先满足column-width的要求，
   * column-gap：2em ;每列之间的间隙
     column-rule: 2px solid red  ;  设置每列之间的垂直分隔线
   * column-fill：balance（默认值）/auto  ;设置填充方式
     balance表示每列平均填充文本；auto表示按照顺序填充，一列填满后再填下一列
   * break-inside:avoid-column; 使同一个元素在一列中显示，不要左右断开显示
   * column-span：1/all;
     默认值为1，使行内元素可以分列；值为all时，行内元素占据整行不分列；
   * 多列属性元素的行内子元素无法撑开其宽度，父元素的宽度为行内子元素不分列时的宽度。  

### 边框及边框效果
  * border-radius:x1 x2 x3 x4/y1 y2 y3 y4
    border-top-left-radius:x1 y1
    border-top-right-radius:x2 y2
    border-bottom-left-radius:x3 y3
    border-bottom-left-radius:x4 y4
    表示正圆形时x和y的值一样，写一个值即可；border-radius：x1 x2 x3 x4
    border-radius：9999px,   值足够大就是4个圆角（上下或者左右角半径之和大于边框长宽时会等比缩小）
    border-radius：100%， border-box不为正方形时，为椭圆（百分比是以边框为基础的）
  * box-shadow ：/* inset（向内扩散，不写就默认向外扩散） | x偏移量 | y偏移量 | 阴影模糊半径| 阴影扩散半径 | 阴影颜色 */

### 颜色和透明度

 * opacity ：0~1  透明度
     *不能继承，父子元素都有透明度时，先将子元素透明好，再透明父元素，父子元素的透明度在子元素的位置会叠加
     * 会通过触发图形加速，单独形成一个图层和当前图层重合，默认通过图形加速的图层会盖住常规流。比如浮动元素opacity属性触发图形加速后会盖住常规流。
     * 通过触发图形加速单独形成一个图层在显卡中进行图形变换，这样工作效率高，效果好。

### 渐变
  * linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片。其结果属于<gradient>数据类型，是一种特别的<image>数据类型。
    background-image：linear-gradient(to left ,white,black)  由白到黑向左边渐变
    linear-gradient(渐变方向，可以为弧度角度    ，   开始颜色 ，  结束颜色) 
  * radial-gradient() 径向渐变；颜色值由一个中心点（原点）向外扩散并逐渐过渡到其他颜色值。
  * 重复渐变; 重复多次渐变图案直到足够填满指定元素。由 repeating-linear-gradient()和repeating-radial-gradient()函数产生。

### 2D变换
  * 线性变换，有规律可循；默认x轴箭头向右，y轴箭头向下
  * transform：function（value）function（value）function（value）
     * 变换的元素会通过显卡(GPU)渲染，单独形成一个图层，覆盖常规流，但是常规流只能感受它变换之前的位置，无法感知现在的位置，不影响常规流布局
     * 第一个函数变换后，以更新后的位置为基础进行下一次函数变换 
  * transform-origin：不动点，元素围绕改点进行变换
    * 默认值为元素水平垂直的中点，注意此时其坐标不是（0,0）
    * （0,0）坐标在元素左上角
    * 表达方式 
      transform-origin：x, y
      transform-origin：100%, 100%
      transform-origin：left, top
      transform-origin：center, center
  * transform:rotate(度)  旋转 ；元素坐标系跟着旋转
  * transform:translate（）平移;会把不动点一起平移
    * transform:translate（x, y）
      transform:translatex
      transform:translatey
    * 水平垂直居中
      - 先绝对居中到父元素的中心（top：50%；left：50%）
        再向上和向左平移自身的50%（ transform:translate（-50%, -50%））
  * transform:scale() 缩放，会把自身的坐标缩放
    * transform:scale(x,y)分别在水平垂直方向缩放
      只有一个值时，x和y共用这一个值
  * transform:skey()   倾斜坐标轴一定的角度
    * transform:skey(x , y)
  * transform：matrix()  矩阵变换
    所有的变换最终都是综合为一个矩阵变换

### 3D变换
  * transform-origin：x,y,z;  设置不动点的位置
  * transform-style：flat（默认值，平面拉伸）/preserve-3d(设置该值有3D深度感)
  * Perspective景深，眼睛离平面的垂直距离，可以继承，近大远小；
    transform：perspective（1000px/none），值为具体数值或者none；该函数只能写在最前面，写在后面会被忽略；
    perspective-origin：x,y;  设置观察点相对于平面的位置
  * transform:rotateX/Y/Z()
    transform:rotate3d(x,y,z,度数);  (x,y,z)表示矢量坐标，元素围绕该矢量线旋转
  * transform:translateX/Y/Z()
    transform:translate3d(x,y,z)
  * transform:scaleX/Y/Z()
    transform:scale3d(x,y,z)
    z的值默认为0，不设置Z的值就相当于进行2D变换
  * transform：matrix3d()  3D矩阵变换
    所有的3D变换最终都是综合为一个3D矩阵变换

### 过度与动画
   * transition  平滑的改变CSS的值 （可以简写，保证duration在delay前面即可）
     - transition-property
       指定过渡的属性值，比如transition-property:opacity就是只指定opacity属性参与这个过渡。默认值为all
     - transition-duration
       指定这个过渡的持续时间
     - transition-delay
       延迟过渡时间，双向的，开始动画之前和动画结束之后都是有delay时间
     - transition-timing-function
       指定过渡动画缓动类型，有ease | linear | ease-in | ease-out | ease-in-out | step | cubic-bezier()贝塞尔曲线
       其中，linear线性过度，ease-in由慢到快，ease-out由快到慢，ease-in-out由慢到快在到慢。
   * animation 动画（可以简写，保证duration在delay前面即可）
     - @keyframes  name {关键帧（10%）{属性：值}  关键帧（10%）{属性：值} 关键帧（10%）{属性：值}}
       —关键帧可以用百分比，也可以用to(100%)和from（0%）
     - animation-name：关键帧前面定义的name
     - animation-duration :持续时间
     - animation-timing-function 关键帧的过度动画缓动类型
     - animation-delay  动画延迟
     - animation-iteration-count  动画执行次数  默认为1次，infinity表示无数次
     - animation-direction:normal(默认值，1次播完突变回来)/alternate(表示动画会反着播放回来，1次结束后不会突变回来，并且回来的这次也算次数)
     - animation-fill-mode:设置CSS动画在执行之前和之后如何将样式应用于其目标。
        -none 当动画未执行时，动画将不会将任何样式应用于目标，而是已经赋予给该元素的 CSS 规则来显示该元素。这是默认值。
        -forwards 目标将保留由执行期间遇到的最后一个关键帧计算值。
        -backwards 动画将在应用于目标时立即应用第一个关键帧中定义的值，并在animation-delay期间保留此值。
        -both 动画将遵循forwards和backwards的规则，从而在两个方向上扩展动画属性
     - animation-play-state:动画播放状态  running(播放)/paused(暂停)

 ### Blend Modes/Filter/Masking 
   * background-blend-mide  设置背景的颜色混合方式
     mix-blend-mide 设置多个元素的颜色混合方式
     isolation：auto/isolate 该属性的主要作用是当和background-blend-mode属性一起使用时，可以只混合一个指定元素栈的背景
    * filter滤镜 
        filter: blur(5px);  模糊
        filter: brightness(0.4); 亮度
        filter: contrast(200%);  对比度
        filter: drop-shadow(16px 16px 20px blue); 阴影效果
        filter: grayscale(50%); 将图像转换为灰度图像
        filter: hue-rotate(90deg); 给图像应用色相旋转
        filter: invert(75%); 反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。
        filter: opacity(25%); 转化图像的透明程度
        filter: saturate(30%); 转换图像饱和度。
        filter: sepia(60%)  将图像转换为深褐色
    * mask 允许使用者通过部分或者完全隐藏一个元素的可见区域。这种效果可以通过遮罩或者裁切特定区域的图片。

## flex布局
  * 阮一峰的文章链接: 
    基础篇: http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?tdsourcetag=s_pcqq_aiomsg
    进阶: http://www.ruanyifeng.com/blog/2015/07/flex-examples.html?tdsourcetag=s_pcqq_aiomsg
  * 任何一个容器都可以指定为flex布局(display:flex), 行内元素也可以使用flex布局(display: inline-flex). 设置Flex布局后, _子元素_的float, clear, vertical-align属性将失效. 
  * 基本概念: 
  * flex container两根轴: main axis(main-start到main-end)和cross axis(cross-start到cross-end).
  * flex item默认沿主轴排列, 有main size和cross size
  * 六个设置在容器(flex container)上的属性
    - flex-direction决定主轴的方向: 有四个可能的值, row(默认), row-reverse, column, column-reverse
    - flex-wrapper决定换行方式: 三个可能的值, nowrap(默认), wrap, wrap-reverse.
      * wrap时flex-shirik不会生效
    - flex-flow: flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
    - justify-content定义项目在主轴上的对齐方式:  五个可能的值, flex-start(默认值, 左对齐), flex-end(右对齐), center(居中), space-between(两端对齐, 所有元素中间的间隔相等), space-around(注意两侧间隔是中间间隔的一半)
    - align-items定义项目在交叉轴上如何对齐: flex-start, flex-end, center, baseline(第一行文字的基线), stretch(默认)
      * teacher讲如非必要, 不会用到这种情况
    - align-content定义了多根轴线的对齐方式。该属性对单行弹性盒子模型无效: flex-start:与交叉轴起点对齐, flex-end: 与交叉轴的终点对齐, center: 与交叉轴的中点对齐, _space-between_: 与交叉轴两端对齐, 轴线之间间隔平均分布, space-around, stretch(默认值): 轴线占满整个交叉轴. 
      * 属性为stretch时, 每一行子元素不是按照比例拉伸, 而是将多余空间均分到各个元素上拉伸.
  * 六个设置在项目(flex item)上的属性
    - order _越小越靠前_, 默认为0;
    - flex-grow 项目的放大比例, 默认为0, 即如果存在剩余空间，也不放大。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
      * 如果几个元素的flex-growflex-grow值均为小数, 和不超过1,, 比如为0.7, 那么只会将剩余空间的0.7等比例分配给几个元素;
      * max-width会限定flex-grow的分配值
      * 如果有flex-grow的话, justify-content属性设定没有用
    - flex-shrink 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。
      * 如果flex-shrink各个元素的比例不一致, 则每个元素缩短的长度按照(长度(主轴就是flex-basis)*flex-shirnk)的比值分配
      * 如果flex-shrink值均为小数, 和不超过1, 如为0.7, 那么总扣除长度为超出长度的0.7, 按比例扣除. 
      * flex-shrink再怎么收也不能让子元素比自己最窄的单词还要窄
    - flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间（main size）, 不允许负值。默认值为auto(含义是 "参照我的width和height属性".)
    - flex: flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
    - align-self: 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
  * 问题: align-items没有第一行文字基线设置baseline会怎么样?  align-content是不是对交叉轴上的东西起作用?flex-grow负值是否有效, 如何作用? 
  * flex里高度为auto时高度不再是完全由子元素撑起来的, 而是和父元素一样高. 但是子元素足够高, 还是可以撑起父元素. 
  * flex元素margin为auto, 大小不一的元素margin平分剩余空间
  * 心得: 固定宽度的要设为flex-shrink为0, 剩余占满空间的把flex-grow设为1, 
## css3字体
  - 1. @font-face @media  @import @supports @key-frames
  - 2. @font-face 可用相同名字重复声明， 最多18种， 需要把font-style也一起声明
         本地字体，自己就会挑选字型，不用重复声明
         -资源：fonts google.com  挑选拉丁文
         -字体文件格式  otf/ttft/wotf/
         -小图标格式 svg  ---关联属性查询w3schools    svg-path可画出任何图形  ，M/L/D... 大写字母绝对定位
  - 3. FOUC：flash of unstyled content  --> 解决方法：把第一屏的style直接写在html文件上
  - 4. css的转义字符\最多可识别六位字符
  - 5. unicode 6万（fooo）后面是供私人用的
  - 6. &#X（f003）
  - 7. aria-hidden="true" 读屏软件不读
  - 8. sr-only  只有读屏软件可见
  - 9. 推荐小图标用i标签， 定义之后需要把font-style重新定义normal
  - 10. 小图标相关网址  FontAwesome，iconfont.cn , iconmoon
  - 11. three dots（...）只适用在单行水平文本
  - 12. resize： vertical/horizontal/none  任何元素可随意拉伸，需要跟over-flow：hidden一起用
  - 13. background-img-position相关，图片的定位位置和元素的位置对齐
  - 14. quotes:""" """ "'" "'"
  - 15. 背景图多张重叠顺序，前面的覆盖后面的，其它属性按顺序反复

    |充电大喵| 2019/5/31 15:24:56
    @font-face {
      font-family: 'FontAwesome';
      src: url('../fonts/fontawesome-webfont.eot?v=4.7.0');
      src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
      font-weight: normal;
      font-style: normal;
    }
    * fontawesome基本用法(https://fontawesome.com/v4.7.0/examples/)
      - 1. <i class="fa fa-camera"></i>
      - 2. fa-lg/fa-2x/fa-3x
      - 3. fa-fw 定宽
      - 4. fa-ul,fa-li 替换列表图标

      <ul class="fa-ul"><li><i class="fa-li fa fa-check-square"></i>List icons</li>

      - 5. fa-border 加边框  fa-pull-left/right
      - 6. fa-spin   fa-pulse(分8步)  
      - 7. <i class="fa fa-shield fa-rotate-270"></i> fa-rotate-270<br>
          <i class="fa fa-shield fa-flip-horizontal"></i> fa-flip-horizontal<br>
          <i class="fa fa-shield fa-flip-vertical"></i> fa-flip-vertical
      - 8. 组合 <span class="fa-stack fa-lg">
          <i class="fa fa-square-o fa-stack-2x"></i>
          <i class="fa fa-twitter fa-stack-1x"></i>
          </span>
    
   

## Tips
  * 0529
  * 看一个元素布局, 首先看它的display
  * 浮动的元素没有必要diplay: block, 浮动的一定是块元素(
  * 可以把id选择器写两遍(除了标签选择器不能重复, 别的选择器都可以重复), 提高优先级
  * 浮动元素前的元素不会出现在浮动元素的下方, 但浮动元素后的元素可能出现在浮动元素的下方
  * 浮动元素再窄都不会比自己最长的单词短
  * 右浮动元素可能从父元素的左边超出
  * adblock的反制措施, 可以为广告设置内联样式, 获取最高的选择器优先级
  * jsbin改版代码

  * 0530
  * 声明display: flex外面是一个块, 里面是flex(inline-flex不是).包含块是flex container, 内部元素为flex item
  * 存疑, 块内直接水平排列

  * css是大小写不敏感的
  * visited属性只能设置背景颜色和另外一个属性, 设置font-size之类无效
  * 不同元素中的浮动元素也可以相互感知
  * marquee标签看一下




 