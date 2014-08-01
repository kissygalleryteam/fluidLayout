## 综述

FluidLayout是。

* 版本：2.0.0
* 作者：卢石
* 标签：
* demo：[http://kg.kissyui.com/fluidLayout/2.0.0/demo/index.html](http://kg.kissyui.com/fluidLayout/2.0.0/demo/index.html)

## 初始化组件

    S.use('kg/fluidLayout/2.0.0/index', function (S, FluidLayout) {
         var FluidLayout = new FluidLayout();
    })

## API说明
   
   初始化瀑布组建例子见下:
   
   new FluidLayout({
	    "container":"parent",
	    "colWidth":77,
	    "colCount":3,
	    "cls":"child"
   });

   container: 父容器 id。
   
   colWidth: 一列的宽度。

   colCount: 列数。
   
   cls: 父容器下子容器的样式。 

