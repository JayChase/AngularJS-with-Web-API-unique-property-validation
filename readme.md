#AngularJS with Web API: unique property validation

This is the source code for the MSDN sample [**AngularJS with Web API: unique property validation**](https://code.msdn.microsoft.com/AngularJS-with-Web-API-8210527d). For a full description of the code please visit the link.

##Overview

This sample demonstrates how to impliment unique constraint validation and error handling in an AngularJS single page application (SPA) served by a Web API controller. Two approaches are demonstrated.

* simple: (validation on save) when saving an entity any errors caused by a unique property value already existing are returned to the SPA. Those errors can then be handled, informing the user that the offending property value is not unique. 
* advanced: (interactive field level validation) when entering a new value for a unique property the SPA checks, via an API call, whether the value is 'available'. If it is not an error is reported to the user and the user cannot save the new record until the error has been rectified. 

The approaches are not exclusive, and in a real world application can be used together. In this simplified scenario the user only has the option to add a new record but the same appproach can be taken for updating existing entities.

