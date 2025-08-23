'use strict'

import 'angular'
import 'angular-route'

import './styles.css'

import './view-1/view-1.ts'
import './view-2/view-2.ts'

angular.module('app', [
  'ngRoute',
  'app.view-1',
  'app.view-2'
]).config([
  '$locationProvider', '$routeProvider', function (
    $locationProvider: angular.ILocationProvider,
    $routeProvider: angular.route.IRouteProvider
  ) {
    $locationProvider.hashPrefix('!')
    $routeProvider.otherwise({ redirectTo: '/view-1' })
  }
])

angular.bootstrap(document, ['app'])

