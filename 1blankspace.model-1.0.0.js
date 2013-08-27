ns1blankspace.service('ns1blankspaceCoreModel', function ()
{
	//Service will become provider eventually
	//Service is just adding function to namespace
	//Ignoring iID at moment
	//view-model
	
	this.objects = 
	{
		get: 	function (iID)
				{
					return 
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
	}			
}