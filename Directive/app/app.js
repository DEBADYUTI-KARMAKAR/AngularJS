let myapp = angular.module('myapp',[]);

myapp.controller('myappcontroller',['$scope', function($scope){

    $scope.institute =[ 
        {
            name:"Debadyuti",
            course:"Node Js",
            fees:100,
            available: true
        },
        {
            name:"Ayan",
            course:"Java",
            fees:80,
            available: true
        },
        {
            name:"Saheb",
            course:"Python",
            fees:56,
            available: false
        }

    ];
   


}]);

