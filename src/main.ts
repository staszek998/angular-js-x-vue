'use strict'

import 'angular'
import 'angular-route'

import './styles/index.css'

import './views/non-persistent'
import './views/persistent-local-storage'
import './views/persistent-memory'

angular.module('app', [
  'ngRoute',
  'app.views.non-persistent',
  'app.views.persistent:local-storage',
  'app.views.persistent:memory'
]).config([
  '$locationProvider', '$routeProvider', function (
    $locationProvider: angular.ILocationProvider,
    $routeProvider: angular.route.IRouteProvider
  ) {
    $locationProvider.hashPrefix('!')
    $routeProvider.otherwise({ redirectTo: '/view/non-persistent' })
  }
])

angular.bootstrap(document, ['app'])

