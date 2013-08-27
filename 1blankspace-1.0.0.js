//Public Interfaces

var ns1blankspaceConfig = function($routeProvider)
{
	$routeProvider
		.when('/',
		{
			controller: 'AuthController',
			template: '/jscripts/angularjs/1blankspace-1.0.0.html'
		})
		.when('/home',
		{
			controller: 'HomeController',
			template: '/jscripts/angularjs/1blankspace.home-1.0.0.html'
		})
		.when('/show/contactPerson/:id',
		{
			controller: 'ContactPersonController',
			template: '/jscripts/angularjs/1blankspace.contactPerson.show-1.0.0.html'
		});

	$scope.objects =
	[
		{
			name: 'contactPerson',
			title: 'Contact Person'
		},
		{
			name: 'contactBusiness',
			title: 'Contact Business'
		}
	]	
}

var ns1blankspace = angular.module('ns1blankspace', []).config(ns1blankspaceConfig);

//DIRECTIVES

//Attachements
//Search
//Edit button
//Save button