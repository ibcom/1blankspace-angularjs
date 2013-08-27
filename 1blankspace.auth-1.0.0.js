ns1blankspace.controller('ContactPersonController', function ($scope, $location, $routeParams, ContactPersonModel)
{
	//ContactPersonModel is linked via Dependency Injection

	$scope.objectContext = $routeParams.id;
	$scope.contactPerson = ContactPersonModel.search();
}