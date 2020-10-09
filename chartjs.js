// Reading in data...complete.
d3.csv('data/avocado_cleaned.csv').then(function (avoData) {
    // Getting loopy to turn columns into callable lists...complete.
    // avoData.forEach((dex) => {
    //     Object.entries(dex).forEach(([key, value]) => {
    //         if (key === '') {
    //             index.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((day) => {
    //     Object.entries(day).forEach(([key, value]) => {
    //         if (key === "Date") {
    //             date.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((price) => {
    //     Object.entries(price).forEach(([key, value]) => {
    //         if (key === "AveragePrice") {
    //             averagePrice.push("$" + value);
    //         }
    //     })
    // })
    // avoData.forEach((volume) => {
    //     Object.entries(volume).forEach(([key, value]) => {
    //         if (key === "TotalVolume") {
    //             totalVolume.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((small) => {
    //     Object.entries(small).forEach(([key, value]) => {
    //         if (key === "HassSmall") {
    //             hassSmall.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((large) => {
    //     Object.entries(large).forEach(([key, value]) => {
    //         if (key === "HassLarge") {
    //             hassLarge.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((all) => {
    //     Object.entries(all).forEach(([key, value]) => {
    //         if (key === "HassAllSizes") {
    //             hassAllSizes.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((bag) => {
    //     Object.entries(bag).forEach(([key, value]) => {
    //         if (key === "TotalBags") {
    //             totalBags.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((smallbag) => {
    //     Object.entries(smallbag).forEach(([key, value]) => {
    //         if (key === "SmallBags") {
    //             smallBags.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((largebag) => {
    //     Object.entries(largebag).forEach(([key, value]) => {
    //         if (key === "LargeBags") {
    //             largeBags.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((xlargebag) => {
    //     Object.entries(xlargebag).forEach(([key, value]) => {
    //         if (key === "XLargeBags") {
    //             xLargeBags.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((typ) => {
    //     Object.entries(typ).forEach(([key, value]) => {
    //         if (key === "type") {
    //             type.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((anyo) => {
    //     Object.entries(anyo).forEach(([key, value]) => {
    //         if (key === "year") {
    //             year.push(value);
    //         }
    //     })
    // })
    // avoData.forEach((reg) => {
        // Object.entries(reg).forEach(([key, value]) => {
        //     if (key === "region") {
        //         region.push(value);
            }
        // }
        )
    // })
// })
// Global Variables
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
// Build a getData();...complete.
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
// Charting the universe...complete.
chartIt();
async function chartIt() {
    await getData();
    var ctx = document.getElementById('chartjs');
    var chartjs = new Chart(ctx, {
        type: 'line',
        data: {
            labels: yr,
            datasets: [{
                label: 'Average Price',
                data: avgprice,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'Total Volume',
                data: ttlvol,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'Small Avocados',
                data: hasssm,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'Large Avocados',
                data: hasslg,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'All Size Avocados',
                data: hassxl,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'Total Bags',
                data: ttlbags,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'Small Bags',
                data: smbags,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'Large Bags',
                data: lgbags,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'Extra Large Bags',
                data: ttlbags,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'Type',
                data: kind,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'Year',
                data: yr,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            },
            {
                label: 'Region',
                data: reg,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                showLine: false
            }
        ]
        },
        options: {
            scales: {
                yAxes: [{stacked: false,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
}