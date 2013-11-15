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