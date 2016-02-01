angular.module("MyFirstApp", [])
    .run(function ($rootScope) {
        $rootScope.nombre = "Sebastian";
    })
    .controller("FirstController", function ($scope) {
        $scope.nombre = "Nombre desde hijo";
        setTimeout(function (){
            $scope.$apply(function () {
                $scope.nombre = ":3";
            });
        }, 1000);
    })
    .controller("ChildController", function ($scope) {

    });