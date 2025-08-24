import { app } from './vue.ts'

const appContainer: HTMLDivElement = document.createElement('div')
app.mount(appContainer)

angular.module('app.views.persistent:memory', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/view/persistent-memory', {
      template: `
        <div class="view">
          <h1>
            View 3 (persistent state - in memory)
          </h1>
          <div class="island --vue" id="vue"></div>
        </div>
      `,
      controller: 'app.views.persistent:memory.controller'
    })
  }
]).controller('app.views.persistent:memory.controller', [
  function () {
    const vueIsland: HTMLElement | null = document.getElementById('vue')

    if (vueIsland === null) {
      throw new Error(`Expected the 'vueIsland' to not be 'null'!`)
    }

    vueIsland.appendChild(appContainer)
  }
])
