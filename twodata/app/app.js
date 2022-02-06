let myapp = angular.module('myapp',[]);

myapp.controller('myappcontroller', function($scope){

    

    $scope.data = [
        {
            id:1,
            language:'Hindi'
        },
        {
            id:2,
            language:'English'
        },
        {
            id:3,
            language:'Bengali'
        },
    
    ];


});

