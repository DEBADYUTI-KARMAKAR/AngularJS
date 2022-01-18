let myapp = angular.module('myapp',[]);

myapp.controller('myappcontroller',['$scope', function($scope){

    $scope.institute =[ 
        {
            name:"Debadyuti",
            course:"Node Js"
        },
        {
            name:"Ayan",
            course:"Java"
        },
        {
            name:"Saheb",
            course:"Python"
        }

    ];
   


}]);

