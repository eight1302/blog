
//获取页面的高度
var height = window.innerHeight;
height = this.height-40;
$(".main").css("height",height);

//加载公共文件
$("header").load("../include/header.html");
$("footer").load("../include/footer.html");