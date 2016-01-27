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
  }])

.factory('svgList',function() {
        var svgList = {
            "fashion":[
                "img/svg/1_1.svg",
                "img/svg/1_2.svg",
                "img/svg/1_3.svg",
                "img/svg/1_4.svg",
                "img/svg/1_5.svg"
            ],
            "casual":[
                "img/svg/2_1.svg",
                "img/svg/2_2.svg",
                "img/svg/2_3.svg",
                "img/svg/2_4.svg",
                "img/svg/2_5.svg"
            ],
            "dress":[
                "img/svg/3_1.svg",
                "img/svg/3_2.svg",
                "img/svg/3_3.svg",
                "img/svg/3_4.svg",
                "img/svg/3_5.svg",
                "img/svg/3_6.svg"
            ],
            "children":[
                "img/svg/4_1.svg",
                "img/svg/4_2.svg",
                "img/svg/4_3.svg",
                "img/svg/4_4.svg",
                "img/svg/4_5.svg"
            ]
        };
        return {
            getSvgList: function(name) {
                return svgList[name];
            }
        }
    });

//色彩课堂js文件
//说明部分显示与隐藏
function shuoming_on(){
    document.getElementById("shuoming_text").style.display = "block";
    document.getElementById("shuoming_bj").style.display = "block";
    document.getElementById("delete_shuoming").style.display = "block";
}
function shuoming_off(){
    document.getElementById("shuoming_text").style.display = "none";
    document.getElementById("shuoming_bj").style.display = "none";
    document.getElementById("delete_shuoming").style.display = "none";
}
//完成部分显示与隐藏
function complete_on(){
    document.getElementById("complete_text").style.display = "block";
    document.getElementById("delete_complete").style.display = "block";
}
function complete_off(){
    document.getElementById("complete_text").style.display = "none";
    document.getElementById("delete_complete").style.display = "none";
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
//参考图片按钮
function photoanniu_on(){
    document.getElementById("photo_1").style.display = "block";
    document.getElementById("photo_bj").style.display = "block";
}
function photoanniu_off(){
    document.getElementById("photo_1").style.display = "none";
    document.getElementById("photo_bj").style.display = "none";
}
//色板翻页

