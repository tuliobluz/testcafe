# react-redux-registration-login-example

React + Redux - User Registration and Login Tutorial & Example

For documentation and further details go to https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example

# E2E testing

## Technologies used

* [Testcafé](https://devexpress.github.io/testcafe/): A node.js tool to automate end-to-end web testing.
* [testcafe-reporter-html](https://www.npmjs.com/package/testcafe-reporter-html): HTML reporter generator for TestCafe automated tests. It provides an HTML report of a TestCafe task(s) execution, as well as feedback on the errors, if these occurred. Also it provides an easy way to view the screenshots from failing tests.

## Requirement

- [Node.js](https://nodejs.org/en/download/) installed;

## Set Up project

- Run ```npm install``` to install dependencies;

## Folders Structures

* ```config.json``` Configuration file to help environments variables
* ```helpers``` Helpers to run the tests like data and utils
* ```pages``` Where the page object of tests should be created
* ```tests``` Where the specification of tests should be created
* ```reports``` Where the report is located

## Running the test

Run all tests from current dir on Chrome ```testcafe chrome ./test``` 

| Browser                                    | Browser Alias |
|--------------------------------------------|---------------|
| Chromium                                   | chromium      |
| Google Chrome                              | chrome        |
| Google Chrome Canary                       | chrome-canary |
| Internet Explorer                          | ie            |
| Microsoft Edge (legacy and Chromium-based) | edge          |
| Mozilla Firefox                            | firefox       |
| Opera                                      | opera         |
| Safari                                     | safari        |

Call the testcafe command with the --list-browsers flag to view a list of all available browsers.

## Report

Running to generate the Report ```testcafe chrome .\test\test\ --reporter html:<Path to your project location>\react-redux-registration-login-example\test\reports\file.html```
    