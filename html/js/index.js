/*原生js*/
window.addEventListener("load",function(){
  var i=0;//轮播图开始的位置
  // 装载轮播图的div
  var bannerDiv=document.getElementById("i_banner");
  // 轮播图的ul
  var bannerUl=document.getElementById("i_banner_ul");
  // 轮播图的li
  var bannerLi=bannerUl.children;
  // 轮播图的个数
  var imgCount=bannerLi.length-1;
  // console.log(imgCount);
  // 图片的宽度
  var liWidth=bannerDiv.offsetWidth;
  // 给li赋值div的宽度
  for(var li of bannerLi){
    li.style.width=liWidth+"px";
  }
  // console.log(liWidth);
  // 轮播图函数
  // 手动设置bannerul的宽度
  bannerUl.style.width=liWidth*(bannerLi.length)+"px";
  function moveTo(to){
    // 如果没有to，则to默认为当前位置的下一个
    if(to==undefined){
      // 如果用户没有输入要去的图片
      to=i+1;
    }
    // 如果轮播图从0开始
    if(i==0){
      // 如果正常从左到右轮播,给ul添加过渡类
      if(to>i){
        bannerUl.classList.add("transition");//给bannerUl增加类名
      }else{//当i=0的时候，看左边会出现空白，所以要让他去到li的实际最后一张（存放了第一张图片的位置）
        bannerUl.classList.remove("transition");//给bannerUl删除类名
        // 去到li的实际最后一张（存放了第一张图片的位置）
        bannerUl.style.marginLeft=-imgCount*liWidth+"px";
        // console.log(bannerUl.style.marginLeft);
        //定时器是为了将偷梁换柱操作和加回transition属性的操作强行隔离开
        setTimeout(function(){
          moveTo(imgCount-1);//返回名义最后一张
          //console.log(to);//-1
          //console.log(i);//3
        },100);
        console.log(to);//-1
        console.log(i);//0
        return;
      }
    }
    //将表示第几张图片的变量i变为目标位置
    i=to;//console.log(i+"...");console.log(liWidth)
    //再用i计算bannerUl的marginLeft距离
    bannerUl.style.marginLeft=-i*liWidth+"px";
    //console.log(bannerUl.style.marginLeft);
    //当图片去到实际最后一张时
    if(i==imgCount){
      i=0;
      // 需要transition动画播放完才执行
      // 必须使用一次性定时器，否则将会循环清除类名，导致图片动画无法执行
      setTimeout(function(){
        bannerUl.classList.remove("transition");//清掉transition属性
        bannerUl.style.marginLeft=0;//将bannerUl拉回0位置
      },500)
    }
  }

  // 左右按钮轮播
  var btnLeft=document.getElementById("i_arw_prev");
  var btnRight=document.getElementById("i_arw_next");
  // 用开关控制动画，如果上次动画没结束，单击按钮无用
  var canClick=true;
  // 设定左右按钮共用的函数
  function move(n){
    // 只有可以单击时
    if(canClick){
      // 才调用动画
      // console.log(i+n);
      moveTo(i+n);
      // 调用成功后立马关闭按钮,禁止再次点击
      canClick=false;
      //只有本地transition动画播放完，才能自动打开开关，点击按钮才有反应。
      setTimeout(function(){
        canClick=true;
        },500+100);
      }
  }
  // 左边按钮向前挪
  btnLeft.onclick=function(){
    move(-1);
  }
  // 右边按钮向后挪
  btnRight.onclick=function(){
    move(1);
  }

  // 自动轮播
  var timer=setInterval(function(){
    moveTo();
  },3000);
  // 当鼠标移入banner内，轮播停止
  bannerDiv.onmouseenter=function(){
    clearInterval(timer);
  };
  bannerDiv.onmouseout=function(){
    timer=setInterval(function(){
      moveTo()
    },3000);
  };
});