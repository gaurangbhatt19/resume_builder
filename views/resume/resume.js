var resume=angular.module("reumebuilder.resume",['ngRoute', 'ngMaterial','resumebuilder.resumeDetails']).factory("workexperience",function(){
    let workexperience={}
    let isworkexperience=false

    workexperience.setWorkExperience=function(){
        isworkexperience=!isworkexperience
    }
    workexperience.getWorkExperience=function(){
        return isworkexperience
    }

    return workexperience
})

resume.config(["$routeProvider",function($routeProvider) {
    $routeProvider
    .when('/resume',{
        templateUrl:"./views/resume/resume.html",
        controller: 'resumeCtrl'
    })
    
}])

resume.controller("resumeCtrl",['$scope','$location','allformvalues',"workexperience",function($scope,$location,allformvalues,workexperience){
let values=allformvalues.getValues()
console.log(values)
// if(values.workexperience!==undefined){
//     if(values.workexperience.startdate!==undefined){
//         workexperience.setWorkExperience(true)
//     }
    
// }else{
//     workexperience.setWorkExperience(false)  
// }
// $scope.isworkexperience=workexperience.getWorkExperience()

 $scope.fullname=values.personaldetails.first_name+" "+values.personaldetails.last_name;
 $scope.designation=values.personaldetails.designation+"";
 $scope.description=values.personaldetails.city+", "+values.personaldetails.pincode+", " +values.personaldetails.country;
 $scope.contact="Phone: "+values.personaldetails.phone_number+" "+"Email: "+values.personaldetails.email
 $scope.professional_summary=values.summary.summary


     console.log(workexperience.getWorkExperience())
 let startdate=values.workexperience.startdate.toString().split(" ").splice(1,3)
 let startdatevalue=startdate.reduce((acc,current)=>{
     acc+=current+" "
     return acc
    },"")
let enddate=values.workexperience.enddate.toString().split(" ").splice(1,3)
let enddatevalue=enddate.reduce((acc,current)=>{
    acc+=current+" "
    return acc
},"")
console.log(startdatevalue,enddatevalue)
 $scope.employement_history_date=startdatevalue+" to "+enddatevalue
 $scope.employement_history=values.workexperience

 $scope.education=values.educationaldetails[0]
 $scope.educationdate=values.educationaldetails[0].month+" / "+values.educationaldetails[0].year
 $scope.skills=values.skills

 $scope.navigate=function(){
     $location.path("/")
 }

 

//  values.workexperience.startdate.split(" ").splice(1,4)+" to "+values.workexperience.enddate.split(" ").splice(1,4)
}])