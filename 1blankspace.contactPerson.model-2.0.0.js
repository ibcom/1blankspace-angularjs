ns1blankspace.service('ContactPersonModel', function ()
{
	//Service will become provider eventually
	//Service is just adding function to namespace
	//Ignoring iID at moment
	//view-model
	
	this.search = function (iID)
	{
		return 
		[
			{
				id: 1,
				firstname: 'John',
				surname: 'Smith',
				email: 'john@email.com'
			}
		]
	}
}