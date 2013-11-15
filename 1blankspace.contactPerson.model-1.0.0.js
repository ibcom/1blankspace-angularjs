ns1blankspace.provider('ContactPersonModel', function ()
{
	//Service will become provider eventually
	//Service is just adding function to namespace
	//Ignoring iID at moment
	//view-model
	
	this.endPoint = 'CONTACT_PERSON';

	this.setEndPoint = function(sEndpoint)
	{
		this.endPoint = sEndpoint;
	}

	this.$get = function ()
	{
		return	{
					search: function (iID)
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
	}	
});