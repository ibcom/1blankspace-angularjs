ns1blankspace.service('ContactPersonModel', function ()
{
	//Service will become provider
	//Ignoring iID at moment
	//view-model
	
	this.search = function (iID)
	{
		return 
		[
			{
				firstname: 'John',
				surname: 'Smith',
				email: 'john@email.com'
			}
		]
	}
}