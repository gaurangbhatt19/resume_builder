var homePage=angular.module("resumebuilder.homepage",['ngRoute','ngMaterial',"resumebuilder.resumeDetails","ngMessages"])

homePage.config(['$routeProvider',function($routeProvider){
    
    $routeProvider
    .when("/",{
        templateUrl: "./views/homepage/homePage.html",
        controller:"homepageCtrl"
    })
}])

homePage.controller("homepageCtrl",['$scope','$location','allformvalues',function($scope,$location,allformvalues){
  $scope.update=function(details){
    // console.log(details)
    let values=allformvalues.getValues()
    values.personaldetails=details
    allformvalues.setValues(values)
    console.log(allformvalues.getValues())
    $location.path("/education")
  }
  $scope.navigateBack=function(path){
    // console.log(path)
      $location.path(path)
  }
}])