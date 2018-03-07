export const chart1Config = {
    title: false,
    subtitle: false,
    yAxis: {
        title: {
            text: 'Score'
        }
    },
    legend: false,
    chart: {
        height: 200,
    },

    series: [{
        name: 'Correct',
        data: [20, 30, 50, 40, 60, 80, 50, 70]
    }, {
        name: 'Incorrect',
        data: [10, 20, 40, 20, 30, 40, 10, 20]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500,
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
};

export const chart2Config = {
    chart: {
        height: 280,
        type: 'column'
    },
    title: false,
    xAxis: {
        categories: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Time'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Video Time',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Time Taken',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Inactivity Time',
        data: [3, 4, 4, 2, 5]
    }, {
        name: 'Total Time',
        data: [3, 4, 4, 2, 5]
    }]
};
