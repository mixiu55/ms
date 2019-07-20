// 详情页图片改变
$(window).load(function(){
  // 获取小图片的div
  $("#sm_pic_h");
  // 获取小图片的ul
  var $smUl=$("#sm_ul");
  // console.log($smUl);
  // 获取小图片的li
  var $smLi=$smUl.children();
  // console.log($smLi);
  // 获取小图片li的高度
  var $liHeight=$smLi.outerHeight();
  // console.log($liHeight);
  var $ulHeight=$liHeight*$smLi.length+"px";
  // console.log($ulHeight);
  // 使用时间委托为li添加单击事件
  // console.log($smUl);
  $smUl.on("click","li>div",function(){
    var $div=$(this);
    var $img=$div.next();
    // console.log($div)
    // console.log($img.attr("data-lg"))
    $("#bigImg").attr("src",$img.attr("data-lg"));
    var $divs=$("#sm_ul div");
    $divs.removeClass("pic_cure").addClass("pic_layer");
    $div.removeClass("pic_layer").addClass("pic_cure");
    // 当div被单击时，li去到第二个位置
    var $li=$div.parent();
    // console.log($li.index())
    // ul的margin-top
    $smUl.css("margin-top",`-${($li.index()-1)*$liHeight}px`);//去到第二位，需要减一
    // console.log($li);
    // 将li插入第二的位置
    // $li.parent().children().eq(1).before($($li.html()));
    // $inserLi=$li.prev().prevAll();
    // console.log($inserLi);
    // $inserLi.insertAfter("#sm_ul>li");
    // $inserLi.remove();
  });

  // 点击箭头时的轮播
  function moveTo(to){
    to=i+1;
  }
  var i=1;
  $("#sm_pic_h>#sm_prev").click(function(){
    // console.log(i)
    $img=$smLi.eq(i+1).children(":last");//下一个位置是2
    console.log($img);
    $smUl.css("margin-top",`-${i*$liHeight}px`);
    i++;
    $div=$img.prev();
    $("#bigImg").attr("src",$img.attr("data-lg"));
    $("#bigImg").attr("src",$img.attr("data-lg"));
    var $divs=$("#sm_ul div");
    $divs.removeClass("pic_cure").addClass("pic_layer");
    $div.removeClass("pic_layer").addClass("pic_cure");
    $divs.removeClass("pic_cure").addClass("pic_layer");
    $div.removeClass("pic_layer").addClass("pic_cure");
  });
  $("#sm_pic_h>#sm_next").click(function(){
    i--;
    console.log(i);
    $img=$smLi.eq(i).children(":last");//下一个位置是0
    console.log($img);
    $smUl.css("margin-top",`-${(i-1)*$liHeight}px`);
    $div=$img.prev();
    $("#bigImg").attr("src",$img.attr("data-lg"));
    $("#bigImg").attr("src",$img.attr("data-lg"));
    var $divs=$("#sm_ul div");
    $divs.removeClass("pic_cure").addClass("pic_layer");
    $div.removeClass("pic_layer").addClass("pic_cure");
    $divs.removeClass("pic_cure").addClass("pic_layer");
    $div.removeClass("pic_layer").addClass("pic_cure");
  })
})