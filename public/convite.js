var app = angular.module("BabyShowerApp", ["ngRoute"])

.config(function($routeProvider) {
    $routeProvider
        .when("/convite/:convite", {
            templateUrl: "convite.html",
            controller: 'ConviteController'
        })
        .otherwise('error.html');
})

.controller("ConviteController", function($scope, $routeParams, $window) {
  $scope.contato = {};
  $scope.fralda = "fralda-g.jpg";

  $scope.carregarContato = function() {
    $scope.contato = JSON.parse($window.atob($routeParams.convite));
    $scope.fralda = "fralda-" + $scope.contato.fralda.toLowerCase() + ".jpg";

    console.log($scope.fralda);
  };
})

.controller("CodeController", ($scope, $window) => {
  $scope.contato = {};
  $scope.resultado = "";
  $scope.codigo = "";
  $scope.validacao = "";

  $scope.gerarCodigo = () => {
    var objeto = JSON.stringify($scope.contato);
    $scope.resultado = $window.btoa(objeto);
  };

  $scope.validarCodigo = () => {
    $scope.validacao = JSON.parse($window.atob($scope.codigo));
  };
});
