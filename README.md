# Inspired Thinking Group

> **Code Challenge build with MEAN Stack Technology**

---

**This project is a full stack project and mainly focuses on the client side due to the instructions of this code challenge set to do.**

### Forking

Fork with `git`:

```sh
git clone https://github.com/RaidenDilan/inspired-thinking-group.git
```
cd into project folder:

```sh
cd inspired-thinking-group
```
open with `Atom`

```sh
atom .
```

---

### Installation

To install the dependencies we're gonna use `npm`.

```sh
npm install || npm i
```

---

### Development

To get started with this project make sure you're in the project directory in terminal and run `Gulp` to get started.

```sh
gulp
```

---

### Using this Angular Gulp Setup

To get setup with the starter-code, you first need to run:

```sh
$ bower install && gulp install
```

## How is gulp setup?

Rather than trying to manage one giant `gulpfile.js` that is file responsible for creating multiple tasks, each task has been broken out into its own file and placed in a directory `tasks`. Any files in that directory get automatically required in the gulpfile using the `require-dir` npm package.

To add a new task, simply add a new task file that directory.

/tasks/default.js specifies the default set of tasks to run
when you run `gulp`.

Configuration options are stored in the `package.json` file.

When deploying, ensure that a `postinstall` script has been added to
your package.json, e.g.

```json
"postinstall": "bower install && gulp deploy"
```

This setup expects that there is a bower.json file with at least ONE package
installed. This will created a bower_components directory after
the postinstall script has run.

### Bower overrides

Sometimes, you might want to `override` the `main` file(s) for a specific Bower component. You can do this directly inside the `bower.json` file like this:

```json
"overrides": {
  "bootstrap": {
    "main": [
      "dist/css/bootstrap.css",
      "dist/js/bootstrap.js",
      "dist/fonts/*"
    ]
  },
  "font-awesome": {
    "main": [
      "css/font-awesome.css",
      "fonts/*"
    ]
  }
},
```

---

### Testing


Frameworks used to run test units:

- **Karma**
- **Mocha**
- **Chai**

To run test scripts


```sh
npm run test || npm test
```


### To do
- ~~Build Vehicle App~~
- ~~Write Front End Tests~~
- Unit Testing At The Module Level
- Write Back End Tests
- Cross-browser Compatibility Testing
- Mobile Device Testing