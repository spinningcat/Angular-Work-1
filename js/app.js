angular.module('plunker', [])

  .controller('MainCtrl', function($scope) {
    $scope.foo = {
      bar: 'world'
    };
    
    var employees = [
				{firstName: "Ben", lastName : "Hastings", gender : "Male", salary:5500},
				{firstName: "John", lastName : "Kirby", gender : "Male", salary:5500},
				{firstName: "Anna", lastName : "Darava", gender : "Male", salary:6500}
		];
		
		$scope.employees = employees;
  });

