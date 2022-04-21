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
    ["Diabetes", "Count out of 400 for each gender"],
    ["Male with Diabetes", 240],
    ["Female with Diabetes", 138],
    ["Male with NO diabetes", 160],
    ["Female with NO diabetes", 262],
  ]);

  var options = {
    pieHole: 0.4,
    width: 700,
    height: 300,
    chartArea: { left: 0, top: 10, width: "100%", height: "100%" },
    colors: ["#339af0", "#cc5de8", "#20c997", "#fcc419"],
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
    ["Age", "Male", "Female", "Total"],
    ["0-18", 5, 3, 8],
    ["19-25", 25, 15, 40],
    ["26-40", 40, 20, 60],
    ["40-60", 60, 30, 90],
    ["60+", 110, 70, 180],
  ]);

  var options = {
    vAxis: { title: "People" },
    hAxis: { title: "Age" },
    width: 1300,
    height: 400,
    colors: ["#228be6", "#e64980", "#fa5252"],
    chartArea: { left: 200, top: 60 },
    seriesType: "bars",
    animation: {
      duration: 300,
      easing: "in",
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
