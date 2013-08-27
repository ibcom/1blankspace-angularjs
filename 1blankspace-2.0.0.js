//Public Interfaces

var ns1blankspaceConfig = function($routeProvider)
{
	$routeProvider
		.when('/',
		{
			controller: 'HomeController',
			template: '/jscripts/angularjs/1blankspace-1.0.0.html'
		})
		.when('/home',
		{
			controller: 'HomeController',
			template: '/jscripts/angularjs/1blankspace.home-1.0.0.html'
		})
		.when('/contactPerson/:id',
		{
			controller: 'ContactPersonController',
			template: '/jscripts/angularjs/1blankspace.contactPerson-1.0.0.html'
		});
}

var ns1blankspace = angular.module('ns1blankspace', []).config(ns1blankspaceConfig);