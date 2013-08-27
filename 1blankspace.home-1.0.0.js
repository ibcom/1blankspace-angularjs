ns1blankspace.controller('HomeController', function ($scope, $location, $routeParams, ns1blankspaceModel)
{
	$scope.objects = ns1blankspaceModel.objects.get();
}