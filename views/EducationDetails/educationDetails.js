var app=angular.module('resumebuilder.educationDetails', ['ngRoute','ngMaterial','resumebuilder.resumeDetails'])

app.factory("education",function(){
  let education={}
  let values=[]

  education.setEducation=function(value){
    values.push(value)
  }

  education.getEducations=function(){
    return values
  }
  return education
})


app.config(["$routeProvider",function($routeProvider){
$routeProvider
.when("/education",{
    templateUrl:"./views/EducationDetails/educationDetails.html",
    constroller:"educationCtrl"
})
}])
app.controller("educationCtrl",['$scope','$location','allformvalues','education',function($scope,$location,allformvalues,education){
    $scope.update=function(details){
        education.setEducation(details)
        let values=allformvalues.getValues()
        values.educationaldetails=education.getEducations()
        allformvalues.setValues(values)
        console.log(education.getEducations(),"educations")
        console.log(allformvalues.getValues())
        $location.path("/workexperience")
    }
    $scope.navigateBack=function(path){
      // console.log(path)
        $location.path(path)
    }
    $scope.addEducation=function(){

    }
  }])
