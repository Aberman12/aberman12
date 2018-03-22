'use strict';

/**
 * @ngdoc overview
 * @name searchAppApp
 * @description
 * # searchAppApp
 *
 * Main module of the application.
 */
angular
  .module('searchAppApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl as main'
    })
    .state("home.results", {
      url: 'results',
      templateUrl: 'views/results.html'
    })
    // .state("About", {
    //   url: 'about',
    //   templateUrl: ''
    // })
  }])
