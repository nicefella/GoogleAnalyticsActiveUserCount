//alert("hrer");
  // Replace with your client ID from the developer console.
  var CLIENT_ID = '';
  var PROFILE_ID = '';	

  // Set authorized scope.
  var SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];

  var oldtotalResults = 0;

  function authorize(event) {

    // Handles the authorization flow.
    // `immediate` should be false when invoked from the button click.
    var useImmdiate = event ? false : true;
    var authData = {
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: useImmdiate
    };

    gapi.auth.authorize(authData, function(response) {
      var authButton = document.getElementById('auth-button');
      if (response.error) {
        authButton.hidden = false;
      }
      else {
        authButton.hidden = true;
        handleCounter(PROFILE_ID);
      }
    });
  }



function handleCounter(profileId) {
 
  gapi.client.load('analytics', 'v3').then(function() {
		queryCoreReportingApi(profileId);   
  		var queryInt = setInterval(function () {queryCoreReportingApi(profileId)}, 5000);
  });

}



function queryCoreReportingApi(profileId) {

 
  gapi.client.analytics.data.realtime.get({
                ids: 'ga:' + profileId,
                metrics: "rt:activeUsers"
            })
  .then(function(response) {
     var formattedJson = JSON.stringify(response.result, null, 2);
    var totalResults = response.result.rows[0][0]; //response.result.totalResults ? +response.rows[0][0] : 0
    
    
    drawActiveUsers(totalResults, oldtotalResults);
    
  })
  .then(null, function(err) {
      // Log any errors.
      console.log(err);
  });

}

function drawActiveUsers(currentValue, oldValue) {

	  var delta = currentValue - oldValue;	
  	  var element = document.getElementById('active-users');
      var timeout;
  
  if (delta != 0) {
    
     var animationClass = delta > 0 ? 'is-increasing' : 'is-decreasing';
      element.className += (' ' + animationClass);

      clearTimeout(timeout);
      timeout = setTimeout(function() {
        element.className =
            element.className.replace(/ is-(increasing|decreasing)/g, '');
      }, 3000);
    
  }

  
    element.innerHTML =  '<b class="ActiveUsers-value">'+currentValue+'</b>';
    oldtotalResults = currentValue;
  
}
































  