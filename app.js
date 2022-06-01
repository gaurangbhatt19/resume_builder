var resumebuilder=angular.module("resumebuilder",['ngRoute','resumebuilder.homepage','ngMaterial','resumebuilder.skills','resumebuilder.educationDetails',"resumebuilder.summary","resumebuilder.resumeDetails",'resumebuilder.workexperience','reumebuilder.resume'])

resumebuilder.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
resumebuilder.controller("resumevalues",['$scope',function($scope){
    console.log("Resume")
}])