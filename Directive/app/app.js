let myapp = angular.module('myapp',[]);

myapp.controller('myappcontroller',['$scope', function($scope){

    $scope.removedata = function(institutes){
        let removedata = $scope.institute.indexOf(institutes);
        $scope.institute.splice(removedata,1);
    }
    $scope.addStudent = function(){
        $scope.institute.push({
            name: $scope.student.name,
            course:$scope.student.course,
            fees:parseInt($scope.student.fees),
            available:true
        });
        $scope.student.name="";
        $scope.student.course="";
        $scope.student.fees="";
    };
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
        },
        {
            name:"Parthib",
            course:"C",
            fees:40,
            
            available: true
        },
        {
            name:"Rajdeep",
            course:"C++",
            fees:60,
            
            available: true
        }

    ];
   


}]);

