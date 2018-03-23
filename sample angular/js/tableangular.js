///<reference path="angular.min.js" />
var myApp =angular
                .module("myModule", [])
                .controller("myController", function ($scope)
              {
                var employees=
              [
                {Firstname:"siri", Lastname:"naga", Gender:"Female", Salary:20000},
                {Firstname:"manoj", Lastname:"kumar", Gender:"male", Salary:200000},
                {Firstname:"niranjan", Lastname:"babu", Gender:"male", Salary:200000},
                {Firstname:"bindu", Lastname:"hima", Gender:"Female", Salary:200000}
              ];

                $scope.employees=employees;

            });
