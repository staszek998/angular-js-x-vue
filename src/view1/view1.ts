angular.module('myApp.view1', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view1', {
      template: `
        <div>
          <h1>
            <code>view1</code> <small>(this part is being rendered by Angular)</small>
          </h1>
          <br>
          TODO: Here we will render the Vue app.
        </div>
      `,
      controller: 'View1Ctrl'
    })
  }
]).controller('View1Ctrl', [
  function () {
  }
])
