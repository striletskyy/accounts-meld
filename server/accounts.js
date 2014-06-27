// Set up login services
Meteor.startup(function() {

  // Remove configuration entries in case service is already configured
  ServiceConfiguration.configurations.remove({
    $or: [{
      service: "facebook"
    },  {
      service: "google"
    },
    {
        service: "twitter"
    }, {
      service: "linkedin"
    }, {
        service: "github"
    }]
  });

  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "facebook",
    "appId": "769472786418635",
    "secret": "7dd51609fa39ec9112466df80b28306a"
  });

    ServiceConfiguration.configurations.insert({
        "service": "google",
        "clientId": "581798009459-qj541h4rtisof7cl3p85fmh08321lsk2.apps.googleusercontent.com",
        "client_email": "581798009459-qj541h4rtisof7cl3p85fmh08321lsk2@developer.gserviceaccount.com",
        "secret": "GTWFbom5w2Phu4W6HbSsykFH"
    });

    ServiceConfiguration.configurations.insert({
        "service": "twitter",
    });

    ServiceConfiguration.configurations.insert({
        "service": "github",
        "clientId": "XXXXXXXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    });



    console.log(Accounts.oauth);

  // Add GitHub configuration entry
  /*ServiceConfiguration.configurations.insert({
    "service": "github",
    "clientId": "XXXXXXXXXXXXXXXXXXXX",
    "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  });

  // Add Google configuration entry


  // Add Linkedin configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "linkedin",
    "clientId": "XXXXXXXXXXXXXX",
    "secret": "XXXXXXXXXXXXXXXX"
  });*/
});