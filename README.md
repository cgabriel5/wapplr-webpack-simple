<!-- <div style="display: flex;flex-flow: row nowrap;justify-content: center;align-items:center;">
	<div style="display: flex;flex-flow: row nowrap;justify-content: space-between;align-items: center;width: 200px;">
		<div style="width: 80px;"><img alt="wapplr-leaf-logo" src="http://localhost/projects/wapplr-webpack-simple/docs/branding/wapplr/leaf-216.png?raw=true" style="display: block;"></div>
		<div style="width: 100px;"><img alt="webpack-logo" src="http://localhost/projects/wapplr-webpack-simple/docs/branding/webpack/webpack.png?raw=true" style="display: block;"></div>
	</div>
</div> -->
<p align="center"><img src="/docs/branding/wapplr/bundled.png?raw=true" alt="logo-text" width="25%"></p>
<p align="center"><img src="/docs/branding/wapplr/text.png?raw=true" alt="logo-text" width="25%"></p>
<p align="center"><code><b>w</b>eb-<b>app</b>-boi<b>l</b>e<b>r</b></code> is an easy-to-use boilerplate and tooling solution.</p>
<h1></h1>

### Overview

This is a skeleton [`webpack`](https://webpack.js.org/) starter project adapted from [`wapplr-webpack-gulp`](https://github.com/cgabriel5/wapplr-webpack-gulp).

### Quick Start
1. Clone repo &mdash; `$ git clone https://github.com/cgabriel5/wapplr-webpack-simple.git "my-app"`
2. Install dependencies... &mdash; `$ yarn install`
	- Then start webpack via one of the following scripts:
		- `development`: `$ yarn run dev`
		- `development-verbose`: `$ yarn run vdev`
		- `production`: `$ yarn run prod`
		- `webpack-dev-server`: `$ yarn run svr`
3. Start developing!

### Features

- Boilerplate provides the project structure to get up and running.
	- webpack already configured to:
		- Compile ES6 code to ES5 using [Babel](https://babeljs.io/).
		- Optimize images.
		- Create project favicons.
		- Vue.js ready.
	- Modify project as needed.
- Conveniently includes the following front-end libraries:
	- [`font-awesome`](http://fontawesome.io/)
	- [`sanitize.css`](https://jonathantneal.github.io/sanitize.css/) &mdash; Uses [`sanitize.css`](https://jonathantneal.github.io/sanitize.css/) by default.
	- [`normalize.css`](http://necolas.github.io/normalize.css/) &mdash; Easily switch to [`normalize.css`](http://necolas.github.io/normalize.css/) if desired.
	- [`modernizr.js`](https://modernizr.com/) &mdash; Support for building a custom build.
	- [`fastclick.js`](https://labs.ft.com/fastclick/)
	- [`jquery.js`](https://jquery.com/)
	- *Don't* need a pre-installed library? Simply remove what you don't need.
	- Need to add something else? Just add what you do need.

### Dependencies

- Project uses:
	- [`NodeJS`](https://nodejs.org/en/) &mdash; An open source, cross-platform JS runtime environment.
	- [`webpack`](https://webpack.js.org/) &mdash; A module bundler.
	- [`Yarn`](https://yarnpkg.com/en/) &mdash; Fast, reliable, and secure dependency management.
	- [`Git`](https://git-scm.com/) &mdash; Distributed version control system.
	- [`Growl`](https://github.com/tj/node-growl/) &mdash; Unobtrusive notification system for NodeJS.
	- *Make sure they are installed.*

### Documentation

All project documentation can be found under the [`docs/`](/docs/) directory.

### Contributing

Contributions are welcome! Found a bug, feel like documentation is lacking/confusing and needs an update, have performance/feature suggestions or simply found a typo? Let me know! :)

See how to contribute [here](/CONTRIBUTING.md).

### License

This project uses the [MIT License](/LICENSE.txt).
