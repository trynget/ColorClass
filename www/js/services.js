//一些数据相关的操作，公用方法等可写在这里，写了一个弹框提示文字的示例，在首页调用了
angular.module('starter.services', [])

  .service('showMsgService',["$ionicLoading", function ($ionicLoading) {
    /**
     * 弹框提示
     * @param msg 提示信息
     */
    this.showMsg = function (msg) {
      $ionicLoading.show({
        template: '<span style="color: white">' + msg + '</span>',
        noBackdrop:true,
        duration: 1500
      });
    }
  }]);

//色彩课堂js文件
//说明部分显示与隐藏
function shuoming_on(){
    document.getElementById("shuoming_text").style.display = "block";
}
function shuoming_off(){
    document.getElementById("shuoming_text").style.display = "none";
}
//完成部分显示与隐藏
function complete_on(){
    document.getElementById("complete_text").style.display = "block";
}
function complete_off(){
    document.getElementById("complete_text").style.display = "none";
}
//调色板弹出与隐藏
function tiao_seban(){
    var ts_click = document.getElementById("seban_1");
    if(ts_click.style.display =="none"){
        ts_click.style.display = "block";
    }else{
        ts_click.style.display = "none";
    }
}
//
