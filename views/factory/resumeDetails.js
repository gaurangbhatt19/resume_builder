var resume=angular.module("resumebuilder.resumeDetails",[])

resume.factory("allformvalues",function(){
    var resumevalues={
        
    }
    var values={
        personaldetails:{
            
        },
        educationaldetails:[{
            
        }],
        workexperience:{
            startdate:"",
            enddate:""
        }
        
        ,skills:[
            {id: 0, skillName: "JavaScript", proficiency: "Intermediate"},
            { id: 1, skillName: "Java", proficiency: "Intermediate" },
            { id: 2, skillName: "Demo Skill", proficiency: "Intermediate" },
            { id: 3, skillName: "Demo Skill", proficiency: "Intermediate" },
            {id: 0, skillName: "JavaScript", proficiency: "Intermediate"},
            { id: 1, skillName: "Java", proficiency: "Intermediate" },
            { id: 2, skillName: "Demo Skill", proficiency: "Intermediate" },
            { id: 3, skillName: "Demo Skill", proficiency: "Intermediate" }
        ],summary:{

        }}

        resumevalues.setValues=function(formValues){
            values=formValues
        }
        resumevalues.getValues=function(){
            return values
        }
    return resumevalues
})