Qva.LoadScript("/QvAjaxZfc/QvsViewClient.aspx?public=only&name=Extensions/GoogleAnalyticsActiveUsers/jquery-1.11.1.min.js", function() {
Qva.LoadScript("/QvAjaxZfc/QvsViewClient.aspx?public=only&name=Extensions/GoogleAnalyticsActiveUsers/GoogleAnalyticsActiveUsers.js", function() {
Qva.LoadScript("https://apis.google.com/js/client.js?onload=authorize", function() {

	Qva.AddExtension("GoogleAnalyticsActiveUsers", function() {

	 Qva.LoadCSS("/QvAjaxZfc/QvsViewClient.aspx?public=only&name=Extensions/GoogleAnalyticsActiveUsers/main.css");


	 CLIENT_ID =  this.Layout.Text0.text;
	 PROFILE_ID = this.Layout.Text1.text;


	this.Element.innerHTML = "";
	var mainDiv = document.createElement('div');
	mainDiv.className = "MainBox";

	var topDiv = document.createElement('div');
	topDiv.className = "active-top";
	topDiv.appendChild(document.createTextNode("Right now"));

	var bottomDiv = document.createElement('div');
	bottomDiv.className = "active-bottom";
	bottomDiv.appendChild(document.createTextNode("active users on site"));

	var activeDiv = document.createElement('div');
	activeDiv.id = "active-users";
	activeDiv.className = "ActiveUsers";

	var authbutton = document.createElement('button');
	authbutton.id = 'auth-button';
	authbutton.appendChild(document.createTextNode("authorize"));
	authbutton.addEventListener('click', authorize);

	mainDiv.appendChild(authbutton);
	mainDiv.appendChild(topDiv);
	mainDiv.appendChild(activeDiv);
	mainDiv.appendChild(bottomDiv);

	this.Element.appendChild(mainDiv);

	});	
});
});
});






