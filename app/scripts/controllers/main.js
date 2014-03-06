'use strict';

angular.module('madaideFieldsApp')
    .controller('MainCtrl', function ($scope, Restangular) {
        $scope.field = Restangular.one('field.json').get().$object;
    });
