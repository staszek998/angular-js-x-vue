angular.module('myApp.view2', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view2', {
      template: `
        <div>
          <code>view2</code> (this part is rendered by Angular)
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
