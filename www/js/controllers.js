angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等
    .controller('startCtrl', function($scope, $state, showMsgService) {
    //localStorage为全局变量，在任意js中直接调用，例如此处直接输出localStorage.galleryRank的值
    //showMsgService.showMsg(localStorage.galleryRank);

    $scope.goFirst = function() {
      $state.go('first');
    }
  })
    .controller('firstCtrl',function($scope ,$state, $ionicHistory) {

        $scope.galleryRank = parseInt(localStorage.galleryRank);
        $scope.freeRank = parseInt(localStorage.freeRank);

        $scope.goSecond_1 = function() {
          $state.go('second_1');
        };
        $scope.goSecond_2 = function() {
            $state.go('second_2');
        };
        $scope.goSecond_3 = function() {
          $ionicHistory.clearCache();
          $state.go('second_3');
        };
        $scope.goSecond_4 = function() {
            $state.go('second_4');
        }
  })
    .controller('Second_1Ctrl',function($scope ,$state) {
    $scope.backFirst = function() {
        history.back();
    };
        $scope.classRank = parseInt(localStorage.classRank);
        $scope.goThree_secai_1 = function() {
            $state.go('three_secai_1');
        };
        $scope.goThree_secai_2 = function() {
            $state.go('three_secai_2');
        };
        $scope.goThree_secai_3 = function() {
            $state.go('three_secai_3');
        };
        $scope.goThree_secai_4 = function() {
            $state.go('three_secai_4');
        };
})
    .controller('Three_secai_1Ctrl',function($scope ,$state, $rootScope) {
        $scope.backSecond_1 = function() {
            history.back();
        };
        $scope.goFour_secai_1 = function() {
          $rootScope.curSvg = "img/svg/1_5.svg";
          $rootScope.curRank = 1;
          $state.go('four_secai_1');
        }
    })
    .controller('Three_secai_2Ctrl',function($scope ,$state, $rootScope) {
        $scope.backSecond_1 = function() {
            history.back();
        };
        $scope.goFour_secai_2 = function() {
          $rootScope.curSvg = "img/svg/2_5.svg";
          $rootScope.curRank = 2;
          $state.go('four_secai_2');
        }
    })
    .controller('Three_secai_3Ctrl',function($scope ,$state, $rootScope) {
        $scope.backSecond_1 = function() {
          history.back();
        };
        $scope.goFour_secai_3 = function() {
            $rootScope.curSvg = "img/svg/3_6.svg";
            $rootScope.curRank = 3;
          $state.go('four_secai_3');
        }
    })
    .controller('Three_secai_4Ctrl',function($scope ,$state, $rootScope) {
        $scope.backSecond_1 = function() {
          history.back();
        };
        $scope.goFour_secai_4 = function() {
          $rootScope.curSvg = "img/svg/4_5.svg";
          $rootScope.curRank = 4;
          $state.go('four_secai_4');
        }
    })
    .controller('Four_secai_1Ctrl',function($scope ,$state, $rootScope, $ionicHistory) {
        $scope.backThree = function() {
            history.back();
        };
        $scope.tiao_seban = function() {
            tiao_seban();
        };
        var svgUrl = $rootScope.curSvg;
        $("#ceyan_photo").html('<embed src="'+svgUrl+'" width="100%" height="100%" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install/" />');
        var isZoomed = 0;
        $scope.zoomImage = function() {
            if(isZoomed == 0){
                $('embed').css({
                    "transform" : "scale(2)",
                    "margin-top" : "55%"
                });
                isZoomed = 1;
            }else {
                $('embed').css({
                    "transform" : "scale(1)",
                    "margin-top" : 0
                });
                isZoomed = 0;
            }
        };
        $scope.colorList = [
            //第一组色值
            ["#2B2B2B","#BEDBBC","#C0D7DD","#D6C1DE","#C4CFAA","#B6BCC4","#D7D9D8"],
            //第二组色值
            ["#F9CAC4","#F6AFC1","#EE2C75","#ED3125","#AC0634","#A74D0E","#F9AB84","#F08C1C","#FCB912","#FFDD00","#C0D82C","#8DC73D","#C8D5A7","#008651","#00664E","#67C7C5","#017A83","#AAE0EC","#7DB1C9","#0064A2","#792B81","#55628F","#C2C3DF","#FFFFFF","#C6C7C9","#919596","#000000"],
            //第三组色值
            ["#BC0571","#ED008C","#F84CB0","#0055A2","#0082CA","#17C2F0","#4BB747","#A3F344","#C5D72D","#FE7E00","#FEAE01","#FFCC00","#CBC525","#F7DE2A","#FCF87B","#CC0001","#FF2B2A","#FB637A","#3B351F","#593912","#65582B","#2C3D4D","#465E76","#669291","#3F1E4D","#6D3485","#9A59B7"],
            //    第四组色值
            ["#194E70","#1E5C83","#3378A2","#137662","#159F85","#1BBC9B","#712436","#932F47","#AB3953","#FDF9BA","#FEE557","#FCAF39","#EEAE40","#E58900","#E67002","#C34B4A","#B44730","#7A0015","#E56A86","#E48068","#E34C45","#E5DE69","#CDC769","#7D9D3C","#CAB179","#D3A221","#9E6828"],
            //    第五组色值
            ["#96CEB3","#8DDC9B","#24A1A3","#527F84","#265046","#8E8043","#D8B416","#F5A10A","#CE5621","#E0BDA9","#FE6F67","#C10001","#F48F97","#DE6898","#CD0067","#9E3A80","#97435D","#6E5086"],
            //第六组色值
            ["#C3E0F2","#6CC9F2","#4CA3E6","#3B87DB","#2591B7","#145E85","#74D5B6","#009AA6","#4C9A9E","#C0D18A","#779154","#7BAE47","#E9D4A5","#BD9C69","#B17D34","#8C7241","#965339","#7D2D2C"]
        ];
        $scope.getColor = function(n,index){
            var color = $scope.colorList[n][index];
            var selectColor = $('#seban_'+n).find('div').eq(index);
            var paths = document.getElementById("ceyan_photo").children[0].getSVGDocument().getElementsByTagName("path");
            var len = paths.length;
            for(var m = 1;m <= 5;m++) {
                $('#seban_'+m).find('div').css('border','1px solid #AAAAAA');
            }
            console.log(selectColor);
            selectColor.css('border','3px solid #AAAAAA');
            for(var i = 0;i < len;i++){
                paths[i].onclick = function(){
                    this.style.fill = color;
                };
            }
        };
        $scope.drawComplete = function() {
            complete_on();
            $('#photo_bj').show();
            $('#shuoming_bj').show();
            var svgItem = {};
            var svgStored = JSON.parse(localStorage.svgStored);
            var svgDom = document.getElementById("ceyan_photo").children[0].getSVGDocument();
            svgItem.svgStr  = $(svgDom).find('svg').html();
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var day = now.getDate();
            svgItem.svgTime = year + '-' + month + '-' + day;
            svgStored.push(svgItem);
            console.log(svgStored);
            localStorage.svgStored = JSON.stringify(svgStored);
        };
        $scope.drawComplete_off = function() {
            complete_off();
            var classRank=parseInt(localStorage.classRank),
                galleryRank=parseInt(localStorage.galleryRank),
                freeRank=parseInt(localStorage.freeRank);
            if(galleryRank==0) {
                localStorage.galleryRank = galleryRank + 1;
            }
            if(classRank == $rootScope.curRank){
                localStorage.classRank = classRank + 1;
                localStorage.freeRank = freeRank + 1;
            }
            $ionicHistory.clearCache();
            $state.go('first');
        }

    })
    .controller('Second_2Ctrl',function($scope ,$state) {
    $scope.backFirst = function() {
        history.back();
    };
        $scope.freeRank = parseInt(localStorage.freeRank);
        $scope.goThree_free_1 = function() {
            $state.go('three_free_1');
        };
        $scope.goThree_free_2 = function() {
            $state.go('three_free_2');
        };
        $scope.goThree_free_3 = function() {
            $state.go('three_free_3');
        };
        $scope.goThree_free_4 = function() {
            $state.go('three_free_4');
        };
})
    .controller('Three_free_1Ctrl',function($scope ,$state, svgList, $rootScope) {
        $scope.backSecond_2 = function() {
            history.back();
        };
        var svgList = svgList.getSvgList("fashion");
        console.log(svgList);
        var i = 0;
        $scope.svgUrl = svgList[0];
        $scope.goPre = function() {
            if(i>0){
                $scope.svgUrl = svgList[i-1];
                i--;
            }
        };
        $scope.goAft = function() {
            if(i<3){
                $scope.svgUrl = svgList[i+1];
                i++;
            }
        };
        $scope.goDraw = function(){
            $rootScope.curSvg = $scope.svgUrl;
            $state.go('four_free_1');
        }
    })
    .controller('Three_free_2Ctrl',function($scope ,$state, svgList, $rootScope) {
        $scope.backSecond_2 = function() {
          history.back();
        };
        var svgList = svgList.getSvgList("casual");
        console.log(svgList);
        var i = 0;
        $scope.svgUrl = svgList[0];
        $scope.goPre = function() {
            if(i>0){
                $scope.svgUrl = svgList[i-1];
                i--;
            }
        };
        $scope.goAft = function() {
            if(i<3){
                $scope.svgUrl = svgList[i+1];
                i++;
            }
        };
        $scope.goDraw = function(){
          $rootScope.curSvg = $scope.svgUrl;
          $state.go('four_free_1');
        }
    })
    .controller('Three_free_3Ctrl',function($scope ,$state, svgList, $rootScope) {
        $scope.backSecond_2 = function() {
          history.back();
        };
        var svgList = svgList.getSvgList("dress");
        console.log(svgList);
        var i = 0;
        $scope.svgUrl = svgList[0];
        $scope.goPre = function() {
            if(i>0){
                $scope.svgUrl = svgList[i-1];
                i--;
            }
        };
        $scope.goAft = function() {
            if(i<4){
                $scope.svgUrl = svgList[i+1];
                i++;
            }
        };
        $scope.goDraw = function(){
          $rootScope.curSvg = $scope.svgUrl;
          $state.go('four_free_1');
        }
    })
    .controller('Three_free_4Ctrl',function($scope ,$state, svgList, $rootScope) {
        $scope.backSecond_2 = function() {
          history.back();
        };
        var svgList = svgList.getSvgList("children");
        console.log(svgList);
        var i = 0;
        $scope.svgUrl = svgList[0];
        $scope.goPre = function() {
            if(i>0){
                $scope.svgUrl = svgList[i-1];
                i--;
            }
        };
        $scope.goAft = function() {
            if(i<3){
                $scope.svgUrl = svgList[i+1];
                i++;
            }
        };
        $scope.goDraw = function(){
          $rootScope.curSvg = $scope.svgUrl;
          $state.go('four_free_1');
        }
    })
    .controller('Second_3Ctrl',function($scope ,$state, $rootScope) {
    $scope.backFirst = function() {
        history.back();
    };
    var svgStored = JSON.parse(localStorage.svgStored);
    var len = svgStored.length;
    var pages = Math.ceil(len/9);
    var curPage = 1;

    for(var i=0;i<9;i++) {
      if(svgStored[i]){
        var svgSmall = '<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 595.3 841.9" style="enable-background:new 0 0 595.3 841.9;width: 300%;height: 300%;margin-left: -90%;margin-top: -20%;" xml:space="preserve">'+svgStored[i].svgStr+'</svg>';
        $('#hualang_'+(i+1)).html(svgSmall);
      }
    }
    $scope.goPrePage = function() {
        if(curPage>1){
            curPage--;
            for(var i=0;i<9;i++) {
                if(svgStored[i+9*(curPage-1)]){
                    var svgSmall = '<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 595.3 841.9" style="enable-background:new 0 0 595.3 841.9;width: 300%;height: 300%;margin-left: -90%;margin-top: -20%;" xml:space="preserve">'+svgStored[i+9*(curPage-1)].svgStr+'</svg>';
                    $('#hualang_'+(i+1)).html(svgSmall);
                }
            }
        }
        pages = Math.ceil(len/9);
    };
    $scope.goAftPage = function() {
        if(curPage<pages){
            curPage++;
            for(var i=0;i<9;i++) {
                if(svgStored[i+9*(curPage-1)]){
                    var svgSmall = '<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 595.3 841.9" style="enable-background:new 0 0 595.3 841.9;width: 300%;height: 300%;margin-left: -90%;margin-top: -20%;" xml:space="preserve">'+svgStored[i+9*(curPage-1)].svgStr+'</svg>';
                    $('#hualang_'+(i+1)).html(svgSmall);
                }else{
                    $('#hualang_'+(i+1)).html('');
                }
            }
        }
        pages = Math.ceil(len/9);
    };
    $scope.goGallery = function(n) {
        if(svgStored[n+9*(curPage-1)]){
            //$rootScope.svgBig = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 595.3 841.9" style="enable-background:new 0 0 595.3 841.9;width: 100%;height: 100%;margin-left: 0;margin-top: 0;" xml:space="preserve">'+svgStored[n+9*(curPage-1)].svgStr+'</svg>';
            $rootScope.svgBig = svgStored[n+9*(curPage-1)].svgStr;
            $rootScope.svgTime = svgStored[n+9*(curPage-1)].svgTime;
            $state.go('three_galley_1');
        }
    };

    //用来标示当前要删除的图片
    var deleteItem;
    //用来标示当前已经删除的图片数
    //var deletedNum = 0;
    $scope.showDelete = function (n) {
        $('#delete').show();
        deleteItem = n;
    };
    $scope.deleteYes = function() {
        var numToDelete = deleteItem+9*(curPage-1);
        if(svgStored[numToDelete]) {
            svgStored.splice(numToDelete,1);
            len = svgStored.length;
            localStorage.svgStored = JSON.stringify(svgStored);
            for(var i=0;i<9;i++) {
              if(svgStored[i+9*(curPage-1)]){
                var svgSmall = '<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 595.3 841.9" style="enable-background:new 0 0 595.3 841.9;width: 300%;height: 300%;margin-left: -90%;margin-top: -20%;" xml:space="preserve">'+svgStored[i+9*(curPage-1)].svgStr+'</svg>';
                $('#hualang_'+(i+1)).html(svgSmall);
              }else{
                $('#hualang_'+(i+1)).html('');
              }
            }
            $('#delete').hide();
        }
    };
    $scope.deleteNo = function() {
        $('#delete').hide();
    }

})
    .controller('Three_galley_1Ctrl',function($scope ,$state, $rootScope, showMsgService) {
        $scope.backSecond_3 = function() {
            history.back();
        };
        var svgDiv = $('#galley_photo');
        //$($rootScope.svgBig).appendTo(svgDiv);
        $('#date').html($rootScope.svgTime);

        var canvas = document.createElement('canvas');  //准备空画布
        canvas.width = svgDiv.width();
        canvas.height = svgDiv.height();
        canvas.id = "myCanvas";
        var element = document.getElementById("galley_photo");
        element.appendChild(canvas);

        /*使用canvg.js把svg转换成canvas显示
        函数调用格式canvg(document.getElementById('yourCanvas'),'<svg>......</svg>')*/
        canvg(document.getElementById('myCanvas'),'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 595.3 841.9" style="enable-background:new 0 0 595.3 841.9;width: 100%;height: 100%;" xml:space="preserve">'+$rootScope.svgBig+'</svg>');

        $scope.share_off = function() {
          //使用cordova插件canvas2ImagePlugin把canvas转为图片保存在手机相册中
          window.canvas2ImagePlugin.saveImageDataToLibrary(
            function(msg){
              console.log(msg);
            },
            function(err){
              console.log(err);
            },
            document.getElementById('myCanvas')
          );
          showMsgService.showMsg("图片已保存到手机相册");
          share_off();
        }
    })
    .controller('Second_4Ctrl',function($scope ,$state) {
    $scope.backFirst = function() {
      history.back();
    }
});

