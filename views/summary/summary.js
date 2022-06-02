var projects=angular.module("resumebuilder.summary",['ngRoute','ngMaterial','resumebuilder.resumeDetails',"ngMessages"])
projects.config(["$routeProvider",function($routeProvider) {
    $routeProvider.when("/summary",{
        templateUrl: "./views/summary/summary.html",
        controller:"summaryCtrl"
    })
}])

projects.controller("summaryCtrl",['$scope','$location',"allformvalues",function($scope,$location,allformvalues) {
    $scope.createResume=function(details){
        let values=allformvalues.getValues()
        values.summary=details
        allformvalues.setValues(values)
        console.log(allformvalues.getValues())
        $location.path("/resume")
    }
    $scope.navigateBack=function(path){
    //   console.log(path)
        $location.path(path)
    }
}])