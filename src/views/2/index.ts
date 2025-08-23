import { initializeVueComponent } from './vue.ts'

angular.module('app.views.2', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view/2', {
      template: `
        <div class="view">
          <h1>
            View 2 (persistent state)
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
