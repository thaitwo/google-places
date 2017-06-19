// Import scss file for webpack to compile
import './scss/style.scss';


class App {
  constructor() {
    this.infowindow;
    this.map;
    this.sf = new google.maps.LatLng(37.7576793,-122.5076401);
    this.pyrmont = {lat: 37.7847028, lng: -122.4001237};

    this.request = {
      location: this.pyrmont,
      radius: 500,
      type: ['restaurant']
    };

    this.renderMap();

    this.defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));

    this.input = document.getElementById('searchTextField');
    this.options = {
      bounds: this.defaultBounds,
      types: ['geocode']
    };

    this.autocomplete = new google.maps.places.Autocomplete(this.input, this.options);
    this.autocomplete.bindTo('bounds', this.map);
  }


  renderMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: this.pyrmont,
      zoom: 15
    });

    this.infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch(this.request, this.callback.bind(this));
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

    const placeLoc = place.geometry.location;
    const marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      that.infowindow.setContent(place.name);
      that.infowindow.open(map, this);
    });
  }
}

new App();