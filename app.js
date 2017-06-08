(function (app) {
    "use strict";
    app.controller('AppController', function ($scope, $q, $http) {

        $scope.weapon = {
            basicDmgUp: null,
            basicDmgDown: null,
            increasedWeaponDamage: null,
            damageValue: null,
            increasedDamage: null,
            ratings: []
        }
        $scope.weapon = JSON.parse(localStorage.getItem('app.weapon'));

        $scope.save = function() {
        localStorage.setItem('app.weapon', JSON.stringify($scope.weapon));
        }

        $scope.getDamage = function () {
            return $scope.weapon.basicDmgDown + $scope.weapon.basicDmgUp;
        };

        $scope.getIncreasedWeaponDamage = function () {
            return $scope.weapon.increasedWeaponDamage;
        };

        $scope.getDamageValue = function () {
            return $scope.weapon.damageValue;
        };
        
        $scope.getIncreasedDamage = function () {
            return $scope.weapon.increasedDamage;
        };

        $scope.getDamageDownWithFixDmgAndGems = function () {
            return $scope.weapon.basicDmgDown + $scope.weapon.damageValue;
        }

        $scope.getValue = function () {
            return parseInt($scope.weapon.ratings[0]) + parseInt($scope.weapon.ratings[1]) + parseInt($scope.weapon.ratings[2]) + parseInt($scope.weapon.ratings[3]) + parseInt($scope.weapon.ratings[4]);
        };

        $scope.getValueSum = function () {
            return $scope.weapon.ratings.reduce(function (a, b) {
                return parseInt(a, 10) + parseInt(b, 10);
            }, 0);
        };


    });

})(angular.module('app', []));
