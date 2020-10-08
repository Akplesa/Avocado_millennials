const h = "900px";

function pageChange(value) {
    d3.select(".plot img").remove();
    Plotly.purge("plot");
    if (value === "Home") {
        home();
    } else if (value === "Scatter") {
        vis1();
    } else if (value === "Line") {
        vis2();        
    } else if (value === "Disabled") {
        vis3();        
    } else if (value === "Heatmap") {
        test1();
    }
};

function home() {
    d3.select(".plot")
        .append("img")
        .attr("src", "assets/images/avocado.jpg")
        .attr("class", "img-fluid")
        .attr("height", h)
};

function vis1() {
    d3.select(".plot")
        .append("img")
        .attr("src", "assets/images/300px-Buddy_christ.jpg")
        .attr("class", "img-fluid")
        .attr("height", h)

};

function vis2() {
    d3.select(".plot")
        .append("img")
        .attr("src", "assets/images/ugandan-knuckles.jpg")
        .attr("class", "img-fluid")
        .attr("height", h)
}

function vis3() {
    d3.select(".plot")
        .append("img")
        .attr("src", "assets/images/Webp.net-resizeimage-27.jpg")
        .attr("class", "img-fluid")
        .attr("height", h)
};

function test1() {
    var trace1 = {  x: ["beer", "wine", "martini", "margarita", "ice tea", "rum & coke", "mai tai", "gin & tonic"],  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],  type: "bar"};
    var data = [trace1];
    var layout = {  title: "'Bar' Chart"};
    Plotly.newPlot("plot", data, layout);

};

// Page Change Listener
d3.selectAll("a.nav-item.nav-link").on("click", function() {
    var value = d3.select(this).text();
    pageChange(value);  
});
// Makes the currently selected view 'active' and removes 'active' from others
$(".navbar-nav .nav-link").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });