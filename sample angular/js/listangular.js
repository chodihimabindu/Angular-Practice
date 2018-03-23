///<reference path="angular.min.js" />
var myApp = angular
.module("myModule", [])
.controller("myController", function ($scope)
{
  var countrys=
  [
    {
      name:"US",
      cities:[
        {name:"london"},
        {name:"machin"},
        {name:"britan"},
      ]
    },
    {
      name:"UK",
      cities:[
        {name:"chikago"},
        {name:"subbarao"},
      ]
    },
    {
      name:"INDIA",
      cities:[
        {name:"hyderabad"},
        {name:"chennai"},
      ]
    }

  ];
  $scope.countrys=countrys;
});
