import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-bootstrap-npm';
import {HomeController, AboutController} from './controllers/controllers';

    angular.module('starterkit', [uirouter, ngResource, uiBootstrap]).config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function routing($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: HomeController,
            controllerAs: 'controller'
          })
          .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: AboutController,
            controllerAs: 'controller'
          })
          .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
          });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    }
