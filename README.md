# angular-js-x-vue

A PoC of mixing the latest Vue version with legacy Angular JS.

## Approach

This project has been scaffolded using the `create-vite-app` package, with the Vanilla JS flavor.
Most importantly, it bootstraps the AngularJS app inside the main `index.html` file.
Then, within the particular views, the smaller Vue apps are being mounted.

Both AngularJS' and Vue's dependencies are being fetched from the `node_modules` folder and are
bundled with Vite, but the same setup could be used with the CDN-hosted versions of those packages.

## Running the project

### Live version

You can view this project running in "production" mode
here: [https://angular-js-x-vue.vercel.app](https://angular-js-x-vue.vercel.app).

### Dev server

#### Prerequisites

- Node.js
- PNPM (but NPM will also work)

#### Installation steps

1. Install the dependencies:

```shell
pnpm install
```

2. Run the project:

```shell
pnpm run dev
```

3. DONE! The application should be already visible
   under [http://localhost:5173](http://localhost:5173).

---

Created by [IDEALIGN Stanisław Gregor](https://idealign.zgora.pl)
