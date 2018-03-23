///<reference path="angular.min.js" />
var myApp = angular
                    .module("myModule", [])
                    .controller("myController" , function ($scope) {
                      var country={
                        name:"INDIA",
                        state:"Ap",
                        flag:"./images/greenbg.jpg"

                      };
                            $scope.country = country;

                    });
