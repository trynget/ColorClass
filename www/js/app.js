// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
      //在本地存储中设置一个值rank表示当前解锁级数
      rank = localStorage.rank || 0;
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
        .state('second_2',{
            url: '/second_2',
            templateUrl: 'templates/second_2.html',
            controller: "Second_2Ctrl"
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
