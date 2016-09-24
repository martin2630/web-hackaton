var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'appCtrl',
    'homeCtrl',
    'homeService',
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
});