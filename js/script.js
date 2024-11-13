
// for maps.html
console.log("Beginning of file");
function init(){
	console.log("init function");

	var el = document.getElementById('map');
	var myLocation = new google.maps.LatLng(32.85752946561114, -117.25767633483069);
	var mapOptions = {
		center: myLocation,
		zoom: 15,
		mapTypeID: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};
	
	var myMap = new google.maps.Map(el, mapOptions);
	
	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
	});
	
	var contentString = '<h3>La Jolla Shores Beach</h3><p>I used to come here almost weekly when I lived in Cali!</p>';
	
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	marker.addListener("click", () => {
		infowindow.open(myMap, marker)
	});
}

//google.maps.event.addDomListener(window, 'load', init);
window.addEventListener('load', init);
console.log("end of file");


