angular.module('myApp.view2', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view2', {
      template: `
        <div>
          <h1>
            <code>view2</code> <small>(this part is being rendered by Angular)</small>
          </h1>
          <br>
          TODO: Here we will render the Vue app.
        </div>
      `,
      controller: 'View2Ctrl'
    })
  }
]).controller('View2Ctrl', [
  function () {
  }
])
