function pageChange(value) {
    const h = "900px";
    d3.select(".plot img")
        .remove()
    if (value === "Home") {
        console.log(1);
        d3.select(".plot")
            .append("img")
            .attr("src", "assets/images/avocado.jpg")
            .attr("class", "img-fluid")
            .attr("height", h)
        d3.select
    } else if (value === "Comparisons") {
        console.log(2);
        d3.select(".plot")
            .append("img")
            .attr("src", "assets/images/300px-Buddy_christ.jpg")
            .attr("class", "img-fluid")
            .attr("height", h)
    } else if (value === "Heatmap") {
        console.log(3);
        d3.select(".plot")
            .append("img")
            .attr("src", "assets/images/ugandan-knuckles.jpg")
            .attr("class", "img-fluid")
            .attr("height", h)
    } else if (value === "Disabled") {
        console.log(4);
        d3.select(".plot")
            .append("img")
            .attr("src", "assets/images/Webp.net-resizeimage-27.jpg")
            .attr("class", "img-fluid")
            .attr("height", h)
    }
};

function chart() {

};

function heatMap() {

};







// var svgWidth = 960;
// var svgHeight = 500;

// var margin = {
//   top: 20,
//   right: 40,
//   bottom: 80,
//   left: 100
// };

// var width = svgWidth - margin.left - margin.right;
// var height = svgHeight - margin.top - margin.bottom;

// var svg = d3
//     .select(".plot")
//     .append("svg")
//     .attr("width", svgWidth)
//     .attr("height", svgHeight)
// var visArea = svg.append("g");

// Page Change Listener
d3.selectAll("a.nav-item.nav-link").on("click", function() {
    var value = d3.select(this).text();
    console.log(value);
    pageChange(value);  
});

$(".navbar-nav .nav-link").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });