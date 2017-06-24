/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import scss file for webpack to compile


__webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    var _this = this;

    _classCallCheck(this, App);

    // this.infowindow;
    // this.map;
    this.sf = new google.maps.LatLng(37.7831, -122.4039);
    // this.pyrmont = {lat: 37.7847028, lng: -122.4001237};
    this.card = document.getElementById('card');

    // MAP
    this.mapOptions = {
      center: this.sf,
      zoom: 12
    };
    this.map = new google.maps.Map(document.getElementById('map'), this.mapOptions);

    // AUTOCOMPLETE
    this.$searchContainer = document.getElementById('search-ac');
    this.acOptions = {
      types: ['establishment']

      // this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.card);

    };this.autocomplete = new google.maps.places.Autocomplete(this.$searchContainer, this.acOptions);
    this.autocomplete.bindTo('bounds', this.map);

    // MARKER
    this.markerOptions = {
      position: this.sf
    };
    this.infoWindow = new google.maps.InfoWindow();
    this.marker = new google.maps.Marker({
      map: this.map
    });
    // this.marker.setMap(this.map);


    google.maps.event.addListener(this.autocomplete, 'place_changed', function () {
      _this.infoWindow.close();
      var place = _this.autocomplete.getPlace();
      console.log(place);

      if (place.geometry.viewport) {
        _this.map.fitBounds(place.geometry.viewport);
      } else {
        _this.map.setCenter(place.geometry.location);
        _this.map.setZoom(17);
      }

      _this.marker.setPosition(place.geometry.location);
      _this.infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
      _this.infoWindow.open(_this.map, _this.marker);

      google.maps.event.addListener(_this.marker, 'click', function (e) {

        _this.infoWindow.open(_this.map, _this.marker);
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

  _createClass(App, [{
    key: 'renderMap',
    value: function renderMap() {
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
  }, {
    key: 'callback',
    value: function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          this.createMarker(results[i]);
        }
      }
    }
  }, {
    key: 'createMarker',
    value: function createMarker(place) {
      var that = this;

      var placeLocation = place.geometry.location;
      var marker = new google.maps.Marker({
        map: this.map,
        position: placeLocation
      });

      google.maps.event.addListener(marker, 'click', function () {
        that.infowindow.setContent(place.name);
        that.infowindow.open(map, marker);
      });
    }
  }]);

  return App;
}();

new App();

/***/ })
/******/ ]);