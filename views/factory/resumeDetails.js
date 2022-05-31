var resume=angular.module("resumebuilder.resumeDetails",[])

resume.factory("allformvalues",function(){
    var resumevalues={
        
    }
    var values={
        personaldetails:{

        },
        educationaldetails:{

        },skills:{

        },summary:{

        }}

        resumevalues.setValues=function(formValues){
            values=formValues
        }
        resumevalues.getValues=function(){
            return values
        }
    return resumevalues
})