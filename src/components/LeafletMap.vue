<template>
  <div>
    <h3>An interactive leaflet map</h3>
    <div id="map" style="height: 90vh;"></div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import "leaflet.markercluster";
import icon from '../assets/Designer.png';
import markerShadow from '../assets/logo.png';

export default {
  name: 'LeafletMapView',
  data() {
    return {
      initialMap: null,
      myIcon: null
    };
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      // Initialize map
      this.initialMap = L.map('map', {
        zoomControl: true,
        zoom: 6,
        zoomAnimation: false,
        fadeAnimation: true,
        markerZoomAnimation: true
      }).setView([17.38405000, 78.45636000], 8);

      // Add tile layer
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.initialMap);

      // Define custom icon
      this.myIcon = L.icon({
        iconUrl: icon,
        iconSize: [30, 30],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: markerShadow,
        shadowSize: [60, 30],
        shadowAnchor: [22, 94]
      });

      // Add example markers
      L.marker([17.440081, 78.348915], { icon: this.myIcon }).addTo(this.initialMap);

      // Add marker clusters (example data)
      const markers = L.markerClusterGroup();
      // Assuming addressPoints is an array of points with latitude and longitude
      // addressPoints.forEach((element, index) => {
      //   const each_marker = new L.marker([element.latitude, element.longitude], { icon: this.myIcon })
      //     .bindPopup(`<strong>Hello Bangladesh!</strong><br>I am a popup number ${index}`);
      //   markers.addLayer(each_marker);
      // });
      this.initialMap.addLayer(markers);
    }
  }
};
</script>

<style scoped>
/* Your scoped CSS styles */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
