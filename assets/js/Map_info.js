var lat=13.055,lon=77.55;
var image,targetSVG,x;
makeMap("dark","cadetblue","brown",lat,lon);

$(".light-badge").click(function(){
	
	makeMap("light","cadetblue","black",lat,lon);
	 $("#chartdiv").trigger("change");
	
});
$(".dark-badge").click(function(){
	
	makeMap("dark","cadetblue","brown",lat,lon);
	
});


function makeMap(theme, bgColor, clr,latt, longi) {
targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
 map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": theme,
  "projection": "miller",

  "imagesSettings": {
    "rollOverColor": "#000",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#000",
    "color": "#000"
  },

  "areasSettings": {
    "unlistedAreasColor": bgColor
  },

  "dataProvider": {
    "map": "worldLow",
	 getAreasFromMap: true,

     lines: [{
         id: "line1",
         latitudes: [latt, latt, latt],
         longitudes: [longi, longi, longi]
     }],
    "images": [  {
		"id":"obj1",
      "zoomLevel": 5,
      "scale": 0.5,
      "title": latt+" , "+longi,
	  color: clr,	
	  scale: 1.0,	
      "latitude": latt,
      "longitude": longi,
       svgPath: targetSVG,
       animateAlongLine: true,
       lineId: "line1"
    } ]
  },

	
} );


x=map.dataProvider.lines[0];

	
// add events to recalculate map position when the map is moved or zoomed
map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them

function updateCustomMarkers(  ) {
	
  // get map object
  //var map = event.chart;

  // go through all of the images
  
    // get MapImage object
     image = map.dataProvider.images[0];

    // check if it has corresponding HTML element
    if ( 'undefined' == typeof image.externalElement )
      image.externalElement = createCustomMarker( image );
	//setInterval(function(){

    // reposition the element accoridng to coordinates

	//alert(latt);	
    var xy = map.coordinatesToStageXY( longi, latt);
    image.externalElement.style.top = xy.y + 'px';
    image.externalElement.style.left = xy.x + 'px';
		//},1000);
  
}
	
	

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.title;
  holder.style.position = 'absolute';

  // maybe add a link to it?
//  if ( undefined != image.url ) {
//    holder.onclick = function() {
//      window.location.href = image.url;
//    };
//    holder.className += ' map-clickable';
//  }

  // create dot
  var dot = document.createElement( 'div' );
  dot.className = 'dot';
  holder.appendChild( dot );

  // create pulse
//  var pulse1 = document.createElement( 'div' );
//  pulse1.className = 'pulse1';
//  holder.appendChild( pulse1 );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}
	
}

