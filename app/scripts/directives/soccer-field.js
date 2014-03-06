'use strict';

angular.module('madaideFieldsApp')
    .directive('soccerField', function () {

        var TILE_STATE_AVAILABLE = "available";
        var TILE_STATE_DONATED_OPEN = "donated-open";
        var TILE_STATE_DONATED = "donated";

        return {
            restrict: 'E',
            templateUrl: '/views/soccer-field.html',
            scope: {
                field: '='
            },
            controller: function ($scope, bpDonationFormLanguage, bpProjectId, bpClientAppId) {
                $scope.tileStyle = function (tile) {
                    var tileSize = $scope.field.tileSize;

                    var styles = {};

                    styles.width = tile.size.x * tileSize.width + "px";
                    styles.height = tile.size.y * tileSize.height + "px";
                    styles.left = tile.position.x * tileSize.width + "px";
                    styles.top = tile.position.y * tileSize.height + "px";
                    switch (tile.status) {
                        case TILE_STATE_AVAILABLE:
                            styles["background-color"] = 'brown';
                            break;
                        case TILE_STATE_DONATED_OPEN:
                            styles["background-color"] = 'orange';
                            break;
                        case TILE_STATE_DONATED:
                            styles["background-color"] = 'green';
                            break;
                    }

                    return styles;
                };

                $scope.buildBpDonationFormUrl = function (tile) {
                    var url = '';


                    url += 'https://www.betterplace.org/';
                    url += bpDonationFormLanguage + '/';
                    url += 'projects/';
                    url += bpProjectId + '/';
                    url += 'client_donations/new?';

                    var params = {};
                    params['client_id'] = bpClientAppId;
                    params['donation_presenter[donation_amount]'] = tile.price / 100;
                    params['donation_amount_readonly'] = true;
                    params['donation_presenter[donation_client_reference]'] = tile.id;

                    url += $.param(params);

                    return url;
                };

            }
        }
    });