ns1blankspace.controller('HomeController', function ($scope, $location, $routeParams, ns1blankspaceCoreModel)
{
	$scope.objects = ns1blankspaceModel.objects.get();
}