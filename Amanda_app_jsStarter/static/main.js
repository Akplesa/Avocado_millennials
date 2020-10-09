// console.log("Hello");
// // Setting up width and height of chart 
// var svgWidth = 800;
// var svgHeight = 500;

// var margin = {
//   top: 20,
//   right: 40,
//   bottom: 80,
//   left: 100
// };

// var width = svgWidth - margin.left - margin.right;
// var height = svgHeight - margin.top - margin.bottom;

// // Creating an SVG wrapper and appending an SVG group that will hold the chart,
// // and shift the latter by left and top margins.
// var svg = d3
//   .select(".row")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);

// // Appending an SVG group
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`);

// // Initial x Params
// var chosenXAxis = "4046";

// // Updating x-scale var upon click on axis label
// function xScale(avocadoData, chosenXAxis) {

// //Creating X scales
//     var xLinearScale = d3.scaleLinear()
//     .domain([d3.min(avocadoData, d => d[chosenXAxis]) * 0.8,
//       d3.max(avocadoData, d => d[chosenXAxis]) * 2.8
//     ])
//     .range([0, width]);

//   return xLinearScale;

// }

// // Updating xAxis var upon click on axis label
// function renderAxes(newXScale, xAxis) {
//     var bottomAxis = d3.axisBottom(newXScale);
  
//     xAxis.transition()
//       .duration(1000)
//       .call(bottomAxis);
  
//     return xAxis;
//   }

//   //Updating circles group with a transition to
// // new circles
// function renderCircles(circlesGroup, newXScale, chosenXAxis) {

//     circlesGroup.transition()
//       .duration(1000)
//       .attr("cx", d => newXScale(d[chosenXAxis]));

//     return circlesGroup;
//   }


//   // Updating circles group with new tooltip
// function updateToolTip(chosenXAxis, circlesGroup) {

//     var label;
  
//     if (chosenXAxis === "4046") {
//       label = "4046 PLU:";
//     }
//     else {
//       label = "4225";
//     }
  
//     var toolTip = d3.tip()
//       .attr("class", "tooltip ")
//       .offset([80, -60])
//       .html(function(d) {
//         return (`${d.region}<br>${label} ${d[chosenXAxis]}`)
      
//       });
  
//     circlesGroup.call(toolTip);
  
//     circlesGroup.on("mouseover", function(data) {
//       toolTip.show(data);
//     })
//       //Setting up onmouseout event so that information dissapears once removing mouse from circle in scatter plot
//       .on("mouseout", function(data, index) {
//         toolTip.hide(data);
//       });

//     return circlesGroup;
//   }

 
//   fetch(`/avocadoData`, {mode: "no-cors"})
//   .then (function(avocadoData, err){
//     if (err) throw err;  
//     var trace1 = {  x: ["beer", "wine", "martini", "margarita",    "ice tea", "rum & coke", "mai tai", "gin & tonic"],  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],  type: "bar"};
// var data = [trace1];
// var layout = {  title: "'Bar' Chart"};
// Plotly.newPlot("plot", data, layout);
//  console.log(avocadoData); 

  // Retrieving data from the json and executing everything below
d3.json("/avocadoData").then(function(avocadoData, err) {
    if (err) throw err;
  console.log(avocadoData);
    // Parse data..Converting everything to numbers
    avocadoData.forEach(function(data) {
      data.PLU4046= +data.PLU4046;
      data.PLU4225 = +data.PLU4225;
      data.TotalVolume = +data.Total_volume;
      console.log(data)
    });
}).catch(function(error) {
console.log(error);
});