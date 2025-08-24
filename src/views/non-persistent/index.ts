import { initializeVueComponent } from './vue.ts'

angular.module('app.views.non-persistent', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view/non-persistent', {
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
