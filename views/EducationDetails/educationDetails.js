var app=angular.module('resumebuilder.educationDetails', ['ngRoute','ngMaterial','resumebuilder.resumeDetails'])

app.config(["$routeProvider",function($routeProvider){
$routeProvider
.when("/education",{
    templateUrl:"./views/EducationDetails/educationDetails.html",
    constroller:"educationCtrl"
})
}])
app.controller("educationCtrl",['$scope','$location','allformvalues',function($scope,$location,allformvalues){
    $scope.update=function(details){
        let values=allformvalues.getValues()
        values.educationaldetails=details
        allformvalues.setValues(values)
        console.log(allformvalues.getValues())
        $location.path("/skills")
    }
    $scope.navigateBack=function(path){
      // console.log(path)
        $location.path(path)
    }
  }])
