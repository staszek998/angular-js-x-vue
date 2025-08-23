import { initializeVueComponent } from './vue.ts'

angular.module('app.views.1', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view/1', {
      template: `
        <div class="view">
          <h1>View 1 (non-persistent state)</h1>
          <div class="island --vue" id="vue"></div>
        </div>
      `,
      controller: 'view-1:controller'
    })
  }
]).controller('view-1:controller', [
  function () {
    initializeVueComponent()
  }
])
