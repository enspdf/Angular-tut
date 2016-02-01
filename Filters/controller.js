angular.module("mainModule", [])
    .filter("removeHtml", function () {
        return function (texto) {
            return String(texto).replace(/<[^>]+>/gm, '');
        }
    })
    .controller("FiltersController", function ($scope) {
        $scope.mi_html = "<p>Hola Mundo</p>";
    });