function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

   /* function initMap(targetID) {
    const latLong = [38.784, -95.872];
    const map = L.map(targetID).setView(latLong, 5); // lat long zoom
   // var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
      }
    ).addTo(map);
    return map;

    
  }
  */
  
  var map = L.map('map').setView([38.784, -95.872], 5);
  
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
}).addTo(map);

var myArray = []

  async function fetchData(){
  const url = '/api/stateloc'
  const row1 = await fetch(url)
  const row2 = await row1.json()
  //console.log(row2)
  myArray = row2.data
  mapMarkers(myArray)
  //console.log(myArray)
  
    
    
    
  };
fetchData();//array not being accessed outside the function


//console.log(myArray)




var state;
var freq;


async function mapMarkers()
{
for (var i = 0; i < myArray.length; i++) {
   if(myArray[i].state=='IL'){

  
        var marker = L.marker([40.6331, -89.3985]).addTo(map);
        var popup = marker.bindPopup('<b>State:Illinois </b><br>Amount: '+myArray[i].stateFreq);
    }
    else if(myArray[i].state=='AL'){
      var marker = L.marker([32.3182, -86.9023]).addTo(map);
      var popup = marker.bindPopup('<b>State:Alabama </b><br>Amount: '+myArray[i].stateFreq);

    }
    else if(myArray[i].state=='MS'){
      var marker = L.marker([33.0000, -90.0000]).addTo(map);
      var popup = marker.bindPopup('<b>State: Mississipi </b><br>Amount: '+myArray[i].stateFreq);

    }
    else if(myArray[i].state=='TX'){
      var marker = L.marker([31.0000, -100.000]).addTo(map);
      var popup = marker.bindPopup('<b>State: Texas </b><br>Amount: '+myArray[i].stateFreq);

    }
    else if(myArray[i].state=='GA'){
      var marker = L.marker([33.247875, -83.441162]).addTo(map);
      var popup = marker.bindPopup('<b>State: Georgia </b><br>Amount: '+myArray[i].stateFreq);

    }
    else if(myArray[i].state=='WI'){
      var marker = L.marker([44.5000, -89.500000]).addTo(map);
      var popup = marker.bindPopup('<b>State: Wisconsin </b><br>Amount: '+myArray[i].stateFreq);

    }
    else if(myArray[i].state=='NC'){
      var marker = L.marker([35.8731, -80.793457]).addTo(map);
      var popup = marker.bindPopup('<b>State: North Carolina </b><br>Amount: '+myArray[i].stateFreq);

    }
    else if(myArray[i].state=='CA'){
      var marker = L.marker([36.7782, -119.417931]).addTo(map);
      var popup = marker.bindPopup('<b>State: California </b><br>Amount: '+myArray[i].stateFreq);

    }
    else if(myArray[i].state=='AR'){
      var marker = L.marker([34.0489, -111.0937]).addTo(map);
      var popup = marker.bindPopup('<b>State: Arizona </b><br>Amount: '+myArray[i].stateFreq);

    }
    else if(myArray[i].state=='LA'){
      var marker = L.marker([30.3918, -92.329]).addTo(map);
      var popup = marker.bindPopup('<b>State: Louisiana </b><br>Amount: '+myArray[i].stateFreq);

    }
    
  //var marker = L.marker([40.6331, -89.3985]).addTo(map);
 // var popup = marker.bindPopup('<b>Type: Hurricane </b><br>State:');
  //mapMarkers();
  console.log(myArray[i])
}


}


  