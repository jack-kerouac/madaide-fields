'use strict';

angular.module('madaideFieldsApp', ['restangular', 'angularMoment']);

angular.module('madaideFieldsApp')
    .config(function (RestangularProvider) {
        var host = 'http://madaide-fields.herokuapp.com';
//        var host = 'http://127.0.0.1:9000';
        RestangularProvider.setBaseUrl(host + '/rest/v1');
    });



angular.module('madaideFieldsApp')
    .value('bpDonationFormLanguage', 'de');

angular.module('madaideFieldsApp')
    .value('bpProjectId', 42);

angular.module('madaideFieldsApp')
    .value('bpClientAppId', 4224);
