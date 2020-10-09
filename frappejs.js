// Reading in data...complete.
d3.csv('data/avocado_cleaned.csv').then(function (avoData) {})
// Global Variables...complete.
var dates = []
var avgprice = []
var ttlvol = []
var hasssm = []
var hasslg = []
var hassxl = []
var hassall = []
var ttlbags = []
var smbags = []
var lgbags = []
var xlbags = []
var kind = []
var yr = []
var reg = []
// Build a getData();...complete
async function getData() {
    const response = await fetch('data/avocado_cleaned.csv')
    const data = await response.text()

    const table = data.split('\n').slice(1)
    table.forEach(row => {
        const columns = row.split(',')

        var date = columns[0]
        dates.push(date).sort
        var averagePrice = columns[1];
        avgprice.push(averagePrice)
        var totalVolume = columns[2];
        ttlvol.push(totalVolume)
        var hassSmall = columns[3];
        hasssm.push(hassSmall)
        var hassLarge = columns[4];
        hasslg.push(hassLarge)
        var hassAllSizes = columns[5];
        hassall.push(hassAllSizes)
        var totalBags = columns[6];
        ttlbags.push(totalBags)
        var smallBags = columns[7];
        smbags.push(smallBags)
        var largeBags = columns[8];
        lgbags.push(largeBags)
        var xLargeBags = columns[9];
        xlbags.push(xLargeBags)
        var type = columns[10];
        kind.push(type)
        var year = columns[11];
        yr.push(year)
        var region = columns[12];
        reg.push(region)
    })
}
// Charting the universe...
const data = {
    labels: dates,
    datasets: [
        {
            name: "Total Volume", type: "bar",
            values: ttlvol
        },
        {
            name: "Average Price", type: "line",
            values: avgprice
        }
    ]
}

const frappejs = new frappe.Chart("#frappejs", {  // or a DOM element,
                                            // new Chart() in case of ES6 module with above usage
    title: "My Awesome Chart",
    data: data,
    type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 400,
    colors: ['#7cd6fd', '#743ee2']
})