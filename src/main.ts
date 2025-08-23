'use strict'

import 'angular'
import 'angular-route'

import './view1/view1.ts'
import './view2/view2.ts'

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2'
]).config([
  '$locationProvider', '$routeProvider', function (
    $locationProvider: angular.ILocationProvider,
    $routeProvider: angular.route.IRouteProvider
  ) {
    $locationProvider.hashPrefix('!')
    $routeProvider.otherwise({ redirectTo: '/view1' })
  }
])

angular.bootstrap(document, ['myApp'])

