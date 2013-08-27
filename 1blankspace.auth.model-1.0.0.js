ns1blankspace.factory('ns1blankspaceAuthModel', function ($http)
{	
	return
	{
		user:
		{
			get: 	function()
					{
						return $http(
						{
							method: 'POST',
							url: '/rpc/core/?method=CORE_GET_USER_DETAILS'
						})
						.then(function(result)
						{
							return result.data;
						});
					}
		}			
	}
}

