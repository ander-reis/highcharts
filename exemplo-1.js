const data = [
    {
        name: "Dia 1",
        y: 1,
        x: 1
    },
    {
        name: "Dia 2",
        y: 2,
        x: 2
    },
    {
        name: "Dia 3",
        y: 3,
        x: 3
    },
    {
        name: "Dia 4",
        y: 4,
        x: 4
    },
    {
        name: "Dia 5",
        y: 5,
        x: 5
    }
];
const title = document.getElementsByTagName('title')[0].innerText;

const options = {
    chart: {
        type: 'bar',
        renderTo: document.getElementById('chart')
    },
    title: {
        text: title
    },
    xAxis: {
        title: {
            text: 'Dias'
        },
        minRange: 1
    },
    series: [
        {
            name: "Janeiro",
            data: data
        },
        {
            name: "Fevereiro",
            data: [
                {
                    name: "Dia 1",
                    y: 3,
                    x: 1
                },
                {
                    name: "Dia 3",
                    y: 5,
                    x: 3
                },
                {
                    name: "Dia 5",
                    y: 7,
                    x: 5
                }
            ]
        },
        {
            name: "Março",
            data: [
                {
                    name: "Dia 1",
                    y: 1,
                    x: 1
                },
                {
                    name: "Dia 2",
                    y: 2,
                    x: 2
                },
                {
                    name: "Dia 3",
                    y: 3,
                    x: 3
                },
                {
                    name: "Dia 4",
                    y: 7,
                    x: 4
                },
                {
                    name: "Dia 5",
                    y: 9,
                    x: 5
                }
            ]
        },
        {
            name: "Abril",
            data: [
                {
                    name: "Dia 1",
                    y: 9,
                    x: 1
                },
                {
                    name: "Dia 2",
                    y: 2,
                    x: 2
                },
                {
                    name: "Dia 3",
                    y: 8,
                    x: 3
                },
                {
                    name: "Dia 4",
                    y: 6,
                    x: 4
                },
                {
                    name: "Dia 5",
                    y: 4,
                    x: 5
                }
            ]
        },
    ]
};

const chart = new Highcharts.Chart(options);

//        for (let i = 0; i <= 5; i++) {
//            setTimeout(() => {
//                chart.addSeries({
//                    name: "Junho",
//                    data: [8, 1, 7, 5, 3]
//                })
//            }, i * 1000);
//        }