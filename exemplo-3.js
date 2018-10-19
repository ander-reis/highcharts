const options = {
    chart: {
        type: 'pie',
        renderTo: document.getElementById('chart')
    },
    title: {
        text: 'Pie'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            showInLegend: true
        }
    },
    series: [{
        name: 'Idade',
        data: [
            {name: 'Anderson 1', y: 39, sliced: true, selected: true},
            {name: 'Anderson 2', y: 38},
            {name: 'Anderson 3', y: 49},
            {name: 'Anderson 4', y: 45},
            {name: 'Anderson 5', y: 63},
        ]
    }]
};

new Highcharts.chart(options);