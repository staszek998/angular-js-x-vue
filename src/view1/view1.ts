'use strict'

// const template: angular.route.IRoute['template'] = `<div>
//   <p>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa debitis dicta, ea eveniet harum ipsam ipsum nesciunt odio officiis porro quia quis rerum veniam? Ab magni maxime quo repellat veritatis!
//   </p>
// </div>`;

angular.module('myApp.view1', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view1', {
      template: `
        <div>
          <code>view1</code> (this part is rendered by Angular)
          <br>
          TODO: Here we will render the Vue app.
        </div>
      `,
      controller: 'View1Ctrl'
    })
  }
]).controller('View1Ctrl', [
  function () {
    // TODO: Check if it can be removed.
  }
])
