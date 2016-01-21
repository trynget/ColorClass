angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等
  .controller('startCtrl', function($scope, $state, showMsgService) {
    //localStorage为全局变量，在任意js中直接调用，例如此处直接输出localStorage.galleryRank的值
    showMsgService.showMsg(localStorage.galleryRank);

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
    };
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
        $scope.goThree_secai_5 = function() {
            $state.go('three_secai_5');
        };
})
    .controller('Three_secai_1Ctrl',function($scope ,$state) {
        $scope.backSecond_1 = function() {
            $state.go('second_1');
        };
        $scope.goFour_secai_1 = function() {
            $state.go('four_secai_1');
        }
    })
    .controller('Four_secai_1Ctrl',function($scope ,$state) {
        $scope.backThree_secai_1 = function() {
            $state.go('three_secai_1');
        };
    })
    .controller('Three_secai_2Ctrl',function($scope ,$state) {
        $scope.backSecond_1 = function() {
            $state.go('second_1');
        };
        $scope.goFour_secai_2 = function() {
            $state.go('four_secai_2');
        }
    })
    .controller('Four_secai_2Ctrl',function($scope ,$state) {
        $scope.backThree_secai_2 = function() {
            $state.go('three_secai_2');
        };
    })
    .controller('Three_secai_3Ctrl',function($scope ,$state) {
        $scope.backSecond_1 = function() {
            $state.go('second_1');
        };
        $scope.goFour_secai_3 = function() {
            $state.go('four_secai_3');
        }
    })
    .controller('Four_secai_3Ctrl',function($scope ,$state) {
        $scope.backThree_secai_3 = function() {
            $state.go('three_secai_3');
        };
    })
    .controller('Three_secai_4Ctrl',function($scope ,$state) {
        $scope.backSecond_1 = function() {
            $state.go('second_1');
        };
        $scope.goFour_secai_4 = function() {
            $state.go('four_secai_4');
        }
    })
    .controller('Four_secai_4Ctrl',function($scope ,$state) {
        $scope.backThree_secai_4 = function() {
            $state.go('three_secai_4');
        };
    })
    .controller('Three_secai_5Ctrl',function($scope ,$state) {
        $scope.backSecond_1 = function() {
            $state.go('second_1');
        };
        $scope.goFour_secai_5 = function() {
            $state.go('four_secai_5');
        }
    })
    .controller('Four_secai_5Ctrl',function($scope ,$state) {
        $scope.backThree_secai_5 = function() {
            $state.go('three_secai_5');
        };
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

