"use strict";

/** FOR MOBILE NAVIGATION */
const bntNav = document.querySelector(".nav-btn");
const container = document.querySelector(".container");

bntNav.addEventListener("click", function () {
  container.classList.toggle("nav-open");
});
/** MOBILE NAV END */

google.charts.load("current", { packages: ["corechart"] });

/** PIE CHART */
function drawPieChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Population Count"],
    ["2000", 150822],
    ["2011", 366194],
    ["2021", 536620],
    ["2030", 644046],
    ["2045", 783654],
  ]);

  var options = {
    pieHole: 0.4,
    width: 700,
    height: 350,
    chartArea: { left: 70, top: 20, width: "100%", height: "100%" },
    colors: ["#339af0", "#cc5de8", "#20c997", "#fcc419", "#f06595"],
    legend: {
      alignment: "center",
      textStyle: { fontSize: 16 },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawPieChart);
/** PIE END */

/** COLUMN CHART */
function drawColumnChart() {
  var data = google.visualization.arrayToDataTable([
    [
      "Year",
      "Africa",
      "Europe",
      "Middle East and North Africa",
      "North America and Caribbean",
      "South and Central America",
      "South-East Asia",
      "Western Pacific",
    ],
    ["2000", 2533, 22373, 17008, 21375, 8553, 34882, 44098],
    ["2011", 14700, 52771, 32600, 37700, 25122, 71407, 131895],
    ["2021", 23634, 61425, 72672, 50547, 32497, 90205, 205640],
    ["2030", 33446, 67000, 95000, 57000, 40000, 113300, 238300],
    ["2045", 55254, 69000, 135700, 63000, 49000, 151500, 260200],
  ]);

  var options = {
    vAxis: { title: "People" },
    hAxis: { title: "Year" },
    height: 450,
    colors: [
      "#228be6",
      "#e64980",
      "#fa5252",
      "#868e96",
      "#12b886",
      "#fd7e14",
      "#15aabf",
      "#7950f2",
    ],
    chartArea: { left: 150, top: 35, width: "70%", height: "75%" },
    seriesType: "bars",
    animation: {
      duration: 4000,
      easing: "out",
      startup: "true",
    },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("columnchart")
  );
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawColumnChart);
/** COLUMN END */

/** AREA CHART */
function drawAreaChart() {
  var data = google.visualization.arrayToDataTable([
    ["Region", "Age (0-19yr)"],
    ["Africa", 59.5],
    ["Europe", 294.9],
    ["Middle East and North Africa", 192.5],
    ["North America and Caribbean", 192.5],
    ["South and Central America", 121.3],
    ["South-East Asia", 244.5],
    ["Western Pacific", 107.9],
  ]);

  var options = {
    vAxis: { title: "People" },
    hAxis: { title: "Year: 2021" },
    height: 450,
    colors: ["#228be6", "#e64980", "#fa5252"],
    chartArea: { left: 125, top: 35, width: "75%", height: "70%" },
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("areachart")
  );
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawAreaChart);
/** AREA CHART END */
