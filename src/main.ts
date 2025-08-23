'use strict'

import 'angular'
import 'angular-route'

import './styles.css'

import './views/1'
import './views/2'

angular.module('app', [
  'ngRoute',
  'app.views.1',
  'app.views.2'
]).config([
  '$locationProvider', '$routeProvider', function (
    $locationProvider: angular.ILocationProvider,
    $routeProvider: angular.route.IRouteProvider
  ) {
    $locationProvider.hashPrefix('!')
    $routeProvider.otherwise({ redirectTo: '/view/1' })
  }
])

angular.bootstrap(document, ['app'])

