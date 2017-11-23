(function (app) {
    "use strict";
    app.controller('AppController', function ($scope, $q, $http) {

        $scope.weapon = {
            basicDmgUp: null,
            basicDmgDown: null,
            attackSpeed: null,
            increasedWeaponDamage: null,
            damageValue: null,
            increasedDamage: null,
            criticalDamage: null,
            ratings: []
        }
        $scope.weapon = JSON.parse(localStorage.getItem('app.weapon'));

        $scope.trophy = {
            criticalHitValue: null,
            criticalDamage: null,
            increasedCriticalHitRate: null
        }
        $scope.trophy = JSON.parse(localStorage.getItem('app.trophy'));

        $scope.save = function() {
        localStorage.setItem('app.weapon', JSON.stringify($scope.weapon));
        localStorage.setItem('app.trophy', JSON.stringify($scope.trophy));
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

        $scope.getValue = function () {
            return parseInt($scope.weapon.ratings[0]) + parseInt($scope.weapon.ratings[1]) + parseInt($scope.weapon.ratings[2]) + parseInt($scope.weapon.ratings[3]) + parseInt($scope.weapon.ratings[4]);
        };

        $scope.getValueSum = function () {
            return $scope.weapon.ratings.reduce(function (a, b) { return parseInt(a, 10) + parseInt(b, 10); }, 0);
        };

        /*Součet škod ze zbraně - dolní + okouzlení na pevné škody + rubíny*/
        $scope.getDamageDownGems = function () {
            return $scope.weapon.basicDmgDown + $scope.weapon.damageValue + $scope.getValue();
        }
        /*Součet škod ze zbraně - horní + okouzlení na pevné škody + rubíny*/
        $scope.getDamageUpGems = function () {
            return $scope.weapon.basicDmgUp + $scope.weapon.damageValue + $scope.getValue();
        }

        $scope.getDamageDownGemsWithIncreasedWeaponDamage = function () {
            return ($scope.weapon.basicDmgDown + $scope.weapon.damageValue + $scope.getValue())*(1+($scope.getIncreasedWeaponDamage())/100);
        }

        $scope.getDamageUpGemsWithIncreasedWeaponDamage = function () {
            return ($scope.weapon.basicDmgUp + $scope.weapon.damageValue + $scope.getValue())*(1+($scope.getIncreasedWeaponDamage())/100);
        }

        $scope.getCriticalHitValue = function () {
            return $scope.trophy.criticalHitValue;
        }

        $scope.getCriticalHitValueWithIncreasedCriticalHitRate = function () {
            return $scope.trophy.criticalHitValue * (1 + ($scope.trophy.increasedCriticalHitRate)/100);
        }
        $scope.sumCriticalDamage = function () {
            return 100 + $scope.weapon.criticalDamage + $scope.trophy.criticalDamage;
        }
        $scope.showCriticalDamage = function () {
            return ($scope.sumCriticalDamage() / 100) + 1;
        }


 

  this.tab = 0;
  this.selectTab = function(setTab){
    this.tab = setTab;
  }
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  }
    });

})(angular.module('app', []));
