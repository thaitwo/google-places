// Import scss file for webpack to compile
import './scss/style.scss';


class App {
  constructor() {
    // this.infowindow;
    // this.map;
    this.sf = new google.maps.LatLng(37.7831, -122.4039);
    // this.pyrmont = {lat: 37.7847028, lng: -122.4001237};
    this.card = document.getElementById('card');

    // MAP
    this.mapOptions = {
      center: this.sf,
      zoom: 12,
    }
    this.map = new google.maps.Map(document.getElementById('map'), this.mapOptions);

    // AUTOCOMPLETE
    this.$searchContainer = document.getElementById('search-ac');
    this.acOptions = {
      types: ['establishment']
    }

    // this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.card);

    this.autocomplete = new google.maps.places.Autocomplete(this.$searchContainer,this.acOptions);
    this.autocomplete.bindTo('bounds', this.map);

    // MARKER
    this.markerOptions = {
      position: this.sf
    }
    this.infoWindow = new google.maps.InfoWindow();
    this.marker = new google.maps.Marker({
      map: this.map
    });
    // this.marker.setMap(this.map);



    google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      this.infoWindow.close();
      const place = this.autocomplete.getPlace();
      console.log(place);


      if (place.geometry.viewport) {
        this.map.fitBounds(place.geometry.viewport);
      } else {
        this.map.setCenter(place.geometry.location);
        this.map.setZoom(17);
      }


      this.marker.setPosition(place.geometry.location);
      this.infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
      this.infoWindow.open(this.map, this.marker);


      google.maps.event.addListener(this.marker,'click', (e) => {

        this.infoWindow.open(this.map, this.marker);

      });
    });




    // INFO WINDOW
    // this.infoWindowOptions = {
    //   content: 'Moscone Is Here!'
    // };

    // this.infoWindow = new google.maps.InfoWindow(this.infoWindowOptions);

    // google.maps.event.addListener(this.marker,'click', (e) => {

    //   this.infoWindow.open(this.map, this.marker);

    // });


    // this.request = {
    //   location: this.pyrmont,
    //   radius: 500,
    //   type: ['restaurant']
    // };

    // this.renderMap();

    // this.input = document.getElementById('searchTextField');
    // this.options = {
    //   bounds: this.defaultBounds,
    //   types: ['geocode']
    // };



    // this.autocomplete = new google.maps.places.Autocomplete(this.input);
    // this.autocomplete.bindTo('bounds', this.map);

    // this.infowindow = new google.maps.InfoWindow();

    // this.defaultBounds = new google.maps.LatLngBounds(
    //   new google.maps.LatLng(-33.8902, 151.1759),
    //   new google.maps.LatLng(-33.8474, 151.2631));


  }


  renderMap() {
    // Render map
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.pyrmont,
      zoom: 15
    });

    // Display pop-up window with place info
    // this.infowindow = new google.maps.InfoWindow();
    // const service = new google.maps.places.PlacesService(this.map);
    // service.nearbySearch(this.request, this.callback.bind(this));
  }




  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }



  createMarker(place) {
    const that = this;

    const placeLocation = place.geometry.location;
    const marker = new google.maps.Marker({
      map: this.map,
      position: placeLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
      that.infowindow.setContent(place.name);
      that.infowindow.open(map, marker);
    });
  }
}

new App();