var skillDetails=angular.module("resumebuilder.skills",['ngRoute','resumebuilder.resumeDetails']).factory("skills_values",function(){
    var skill={}
    var skillset=[{
        id:0,
        skillName:"",
        proficiency:""
    }]
    skill.setSkills=function(id,skillName,proficiency) {
        skillset= skillset.map((i)=>{
            if(i.id===id){
                i.skillName=skillName
                i.proficiency=proficiency
            }
            return i
        })

    }
    skill.deleteSkill=function(id){
        skillset=skillset.filter((i)=>{
            return i.id!==id
        })
    }
    skill.appendSkill=function(id,skillName,proficiency){
        skillset.push({
            id:id,
            skillName:skillName,
            proficiency:proficiency
        })
    }

    skill.getSkills=function(){
        return skillset
    }
return skill
})

skillDetails.config(['$routeProvider',function($routeProvider){
    
    $routeProvider
    .when("/skills",{
        templateUrl: "./views/Skills/skills.html",
        controller:"skillCtrl"
    })
}])
skillDetails.controller("skillCtrl",['$scope','$location','skills_values','allformvalues',function($scope,$location,skills_values,allformvalues){
    $scope.update=function(details){
        console.log(details)
        $location.path("/#")
    }
    $scope.navigateBack=function(path){
        console.log(path)
        $location.path(path)
    }

    $scope.resumeSkills=skills_values.getSkills()

    $scope.addSkill=function(){
        let n=skills_values.getSkills().length
        skills_values.appendSkill(n,"","")
        // console.log(skills_values.getSkills())
        $scope.resumeSkills=skills_values.getSkills()
    }
    
    $scope.deleteSkill=(id)=>{
        skills_values.deleteSkill(id)
        // console.log(skills_values.getSkills())
        $scope.resumeSkills=skills_values.getSkills()
    }

    $scope.update=function(id,skill,proficiency){
        skills_values.setSkills(id,skill,proficiency)
    }


    $scope.saveNext=function(){
        let values=allformvalues.getValues()
        values.skills=skills_values.getSkills()
        allformvalues.setValues(values)
        console.log(allformvalues.getValues())
        
      $location.path("/summary")
    }
    $scope.navigateBack=function(path){
      console.log(path)
        $location.path(path)
    }
  }])