# Timer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## About

A task was to create a timer using Angular2 and Rxjs. 
Timer has 3 buttons: 
- start/stop button - to start timer; if started it changes to Stop button by clicking on which timer stops and sets to 0
- wait button - work on double click but only if the interval between clicks is less than 300ms (custom doubleClick); it pauses the timer, if after that user clicks Start btn the timer continues to work
- reset button - sets timer to 0 and starts it again

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
