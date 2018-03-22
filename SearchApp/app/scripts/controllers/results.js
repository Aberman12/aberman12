'use strict';

/**
 * @ngdoc function
 * @name searchAppApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the searchAppApp
 */
angular.module('searchAppApp')
  .controller('ResultsCtrl', function () {
    
    this.getInfo = function(){
      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      var placeInfo = document.getElementById('placeInfo');
      var button = document.getElementById('button');
      var select = document.getElementById('selectCategories');
      var el = document.getElementById('results');
      var url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&radius=${placeInfo.value}&type=${select.value}&key=AIzaSyBjJgsiwEMEEvEQi4uE7Y4YjlFU14p4iwA`;
      console.log(url);
      console.log(el);
      $.getJSON(url, function(data){
        let html = '';
        let keys = Object.keys(data);
        html += "<div class='weather'>";
        keys.forEach(function(val){
                 html += '<strong>' + val + '</strong>' + ': ' + JSON.stringify(data[val]) + "<br>";
        })

        html += "</div><br>";

    el.html(html);

      });

    });
    };

      }
  });
