import { initializeVueComponent } from './vue.ts'

angular.module('app.views.persistent:local-storage', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view/persistent-local-storage', {
      template: `
        <div class="view">
          <h1>
            View 2 (persistent state - in local storage)
          </h1>
          <div class="island --vue" id="vue"></div>
        </div>
      `,
      controller: 'view-2:controller'
    })
  }
]).controller('view-2:controller', [
  function () {
    initializeVueComponent()
  }
])
