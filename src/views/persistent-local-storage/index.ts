import { initializeVueComponent } from './vue.ts'

angular.module('app.views.persistent:local-storage', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view/persistent/local-storage', {
      template: `
        <div class="view">
          <h1>
            Persistent state - in local storage
          </h1>
          <div class="island --vue" id="vue"></div>
        </div>
      `,
      controller: 'app.views.persistent:local-storage.controller'
    })
  }
]).controller('app.views.persistent:local-storage.controller', [
  function () {
    initializeVueComponent()
  }
])
