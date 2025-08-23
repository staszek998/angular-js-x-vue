angular.module('app.view-2', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view-2', {
      template: `
        <div>
          <h1>
            <code>view-2</code> <small>(this part is being rendered by Angular)</small>
          </h1>
          <br>
          TODO: Here we will render the Vue app.
        </div>
      `,
      controller: 'view-2:controller'
    })
  }
]).controller('view-2:controller', [
  function () {
  }
])
