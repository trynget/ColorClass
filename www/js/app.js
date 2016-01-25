// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
      //在本地存储中设置变量表示当前解锁状态，0表示未解锁，大于0的数字表示当前解锁等级，classRank表示色彩课堂，freeRank表示自由模式，galleryRank表示画廊
      localStorage.classRank = localStorage.classRank || 1;
      localStorage.freeRank = localStorage.freeRank || 0;
      localStorage.galleryRank = localStorage.galleryRank || 0;

      if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider){
    //一个页面为一个状态，在下面配置其路径，控制器等，添加了首页和第一个跳转页的示例
    $stateProvider
      .state('start', {
        url: '/start',
        templateUrl: 'templates/start.html',
        controller: "startCtrl"
      })
      .state('first',{
        url: '/first',
        templateUrl: 'templates/first.html',
        controller: "firstCtrl"

      })
      .state('second_1',{
           url: '/second_1',
           templateUrl: 'templates/second_1.html',
           controller: "Second_1Ctrl"
      })
        .state('three_secai_1',{
            url: '/three_secai_1',
            templateUrl: 'templates/three_secai_1.html',
            controller: "Three_secai_1Ctrl"
        })
        .state('four_secai_1',{
            url: '/four_secai_1',
            templateUrl: 'templates/four_secai_1.html',
            controller: "Four_secai_1Ctrl"
        })
        .state('three_secai_2',{
            url: '/three_secai_2',
            templateUrl: 'templates/three_secai_2.html',
            controller: "Three_secai_2Ctrl"
        })
        .state('four_secai_2',{
            url: '/four_secai_2',
            templateUrl: 'templates/four_secai_2.html',
            controller: "Four_secai_2Ctrl"
        })
        .state('three_secai_3',{
            url: '/three_secai_3',
            templateUrl: 'templates/three_secai_3.html',
            controller: "Three_secai_3Ctrl"
        })
        .state('four_secai_3',{
            url: '/four_secai_3',
            templateUrl: 'templates/four_secai_3.html',
            controller: "Four_secai_3Ctrl"
        })
        .state('three_secai_4',{
            url: '/three_secai_4',
            templateUrl: 'templates/three_secai_4.html',
            controller: "Three_secai_4Ctrl"
        })
        .state('four_secai_4',{
            url: '/four_secai_4',
            templateUrl: 'templates/four_secai_4.html',
            controller: "Four_secai_4Ctrl"
        })
        .state('second_2',{
            url: '/second_2',
            templateUrl: 'templates/second_2.html',
            controller: "Second_2Ctrl"
        })
        .state('three_free_1',{
            url: '/three_free_1',
            templateUrl: 'templates/three_free_1.html',
            controller: "Three_free_1Ctrl"
        })
        .state('three_free_2',{
            url: '/three_free_2',
            templateUrl: 'templates/three_free_2.html',
            controller: "Three_free_2Ctrl"
        })
        .state('three_free_3',{
            url: '/three_free_3',
            templateUrl: 'templates/three_free_3.html',
            controller: "Three_free_3Ctrl"
        })
        .state('three_free_4',{
            url: '/three_free_4',
            templateUrl: 'templates/three_free_4.html',
            controller: "Three_free_4Ctrl"
        })
        .state('second_3',{
            url: '/second_3',
            templateUrl: 'templates/second_3.html',
            controller: "Second_3Ctrl"
        })
        .state('second_4',{
            url: '/second_4',
            templateUrl: 'templates/second_4.html',
            controller: "Second_4Ctrl"
        });

    //当没有状态匹配到时默认显示的状态
    $urlRouterProvider.otherwise('/start');
  });
