import { createApp, ref } from 'vue'

angular.module('myApp.view1', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view1', {
      template: `
        <div>
          <h1>
            <code>view1</code> <small>(this part is being rendered by Angular)</small>
          </h1>
          <br>
          <div id="vue" />
        </div>
      `,
      controller: 'View1Ctrl'
    })
  }
]).controller('View1Ctrl', [
  function () {
    createApp({
      setup () {
        return {
          count: ref(0)
        }
      },
      template: `
        <div style="border: 1px solid #ccc; padding: 10px;">
          <h3>This part is Vue</h3>
          <button @click="count++">count is: {{ count }}</button>
        </div>
      `
    }).mount('#vue')
  }
])
