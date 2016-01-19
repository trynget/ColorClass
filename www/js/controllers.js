angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等
  .controller('startCtrl', function($scope, $state, showMsgService) {
    //localStorage.rank为全局变量，在任意js中直接调用，例如此处直接输出localStorage.rank的值
    showMsgService.showMsg(localStorage.rank);

    $scope.goFirst = function() {
      $state.go('first');
    }
  })
  .controller('firstCtrl',function($scope ,$state) {

        $scope.goSecond_1 = function() {
          $state.go('second_1');
        };
        $scope.goSecond_2 = function() {
            $state.go('second_2');
        };
        $scope.goSecond_3 = function() {
            $state.go('second_3');
        };
        $scope.goSecond_4 = function() {
            $state.go('second_4');
        }
  })
    //.controller('firstCtrl',function($scope ,$state) {
    //    $scope.goBackStart = function() {
    //        $state.go('start');
    //    }
    //})
.controller('Second_1Ctrl',function($scope ,$state) {
    $scope.backFirst = function() {
        $state.go('first');
    }
})
.controller('Second_2Ctrl',function($scope ,$state) {
    $scope.backFirst = function() {
        $state.go('first');
    }
})
.controller('Second_3Ctrl',function($scope ,$state) {
    $scope.backFirst = function() {
        $state.go('first');
    }
})
.controller('Second_4Ctrl',function($scope ,$state) {
    $scope.backFirst = function() {
        $state.go('first');
    }
});

