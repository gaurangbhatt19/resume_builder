var workexperience = angular.module("resumebuilder.workexperience", ['ngRoute', 'ngMaterial','resumebuilder.resumeDetails']);

workexperience.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when('/workexperience',{
             templateUrl: './views/workexperience/workexperience.html',
             controller: 'workexperienceCtrl'
    })
}])

workexperience.controller("workexperienceCtrl",['$scope','$location','allformvalues',function($scope,$location,allformvalues) {
    $scope.update=function(details){
        console.log(details);
        let values=allformvalues.getValues();
        values.workexperience=details
        allformvalues.setValues(values)
        console.log(allformvalues.getValues());
        $location.path("/skills")
    }
    $scope.navigateBack=function(path){
        $location.path(path)
    }
}])