angular.module('shellApp').component('about', {
  template:'<h1> {{ $ctrl.title }}</h1> About us',
  controller: function () {
    this.title = "About !";
  }
});