/*
-----------------------------
SmartSoft creative Solutions
-----------------------------
app.js
******
Desarrollado por: Camilo Agüero
Creación: 15/5/2015
Última modificación: 16/5/2015
*/
(function() {
	
	var app = angular.module("CineCenfotec", []);
	
	var MainController = function($scope){ 
		
		//variable que guarda la tanda que se seleccionó
		var tandaSeleccionada;

		//Cuando se carga lo único visible es la pantalla de login
		$scope.loginShow=true;  

		//Esta función se llama con la directiva ng-submit
		$scope.login = function(){
			//Asigna como usuario loggeado al $scope.user
			$scope.userLogged = $scope.user;
			//Esconde el login y muestra la pantalla de películas y el header
			$scope.loginShow = false;
			$scope.moviesShow = true;
			$scope.bienvenidoShow = true;
			//carga las películas
			loadMovies();
		}

		function loadMovies(){

			$scope.movies = [
				{
					Name: "Avengers, Age of Ultron",
					Description: "La película más nueva de Avengers.",
					Pic: "img/Avengers.jpeg",
					Tandas:
					{
						Horario1: "Jueves a las 7pm",
						Horario2: "Domingo a las 9pm"
					}
				},
				{
					Name: "Fast and Furious 7",
					Description: "La película de carros donde van muy rápido, y uno de los maes se murió.",
					Pic: "img/FastAndFurious7.jpg",
					Tandas:
					{
						Horario1: "Martes a las 7pm",
						Horario2: "Lunes a las 5pm"
					}
				},
				{
					Name: "Mad Max",
					Description: "La película acerca de las aventuras de Max.",
					Pic: "img/MadMax.jpg",
					Tandas:
					{
						Horario1: "Viernes a las 6pm",
						Horario2: "Sábado a las 3pm"
					}
				}
			];
		}

		$scope.movieSelected = function(tanda){

			//Se guarda la tanda en memoria
			tandaSeleccionada = tanda;
			//Se esconden las películas y se muestra la pantalla de asientos
			$scope.moviesShow = false;
			$scope.seatsShow = true;
		}

	}

    app.controller("MainController", MainController); 
	
}());