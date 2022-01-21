let myapp = angular.module('myapp',['ngRoute']);

myapp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl:'views/home.html'
        })
        .when('/directory',{
            templateUrl: 'views/directory.html',
            controller: 'myappcontroller'
        }).otherwise({
            redirectTo: '/home'
        })
}]);
myapp.controller('myappcontroller',['$scope','$http', function($scope,$http){

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

    $http.get('data/institute.json')
    .then(function(response){

        console.log(response);
        $scope.institute = response.data;
    });
   


}]);

