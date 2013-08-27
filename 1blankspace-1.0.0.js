//ROUTES (Public Interfaces)

var ns1blankspaceConfig = function($routeProvider)
{
	$routeProvider
		.when('/',
		{
			controller: 'CoreController',
			template: '/1blankspace-1.0.0.html'
		})
		.when('/home',
		{
			controller: 'HomeController',
			template: '/1blankspace.home-1.0.0.html'
		})
		.when('/show/contactPerson/:id',
		{
			controller: 'ContactPersonController',
			template: '/1blankspace.contactPerson.show-1.0.0.html'
		});
}

var ns1blankspace = angular.module('ns1blankspace', []).config(ns1blankspaceConfig);

ns1blankspace.controller('CoreController', function ($scope, $location, $routeParams, ns1blankspaceAuthModel)
{
  ns1blankspaceAuthModel.user.get().then(function(data)
  {
  		$scope.user = data;
  		if($scope.user.status == 'OK')
  		{
  			$location.path('/home');
  		}
  });
}

ns1blankspace.directive('ns1blankspaceAuth', function ()
{
	return 
	{
		restrict: 'A',
		templateUrl: '/1blankspace.attachments.auth-1.0.0.html',
		controller: 'AuthController',
		scope:
		{
			logonName: '= ',
			logonPassword: '= '
		}
	}
}

ns1blankspace.directive('ns1blankspaceAttachments', function ()
{
	return 
	{
		restrict: 'A',
		templateUrl: '/1blankspace.attachments.show-1.0.0.html',
		controller: 'AttachmentsController',
		scope:
		{
			object: '@object',
			objectContext: '@objectContext'
		}
	}
}

//Search
//Edit
//Save