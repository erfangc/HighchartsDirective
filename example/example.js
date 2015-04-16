var app = angular.module('App', ['highcharts-directive'])
app.controller('MainCtrl', function ($scope) {
    var johnSeries = {
        name: 'John',
        id: 'john',
        data: [3, 4, 3, 5, 4, 10, 12]
    };
    $scope.chart = {
        series: [johnSeries, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
        }],
        config: getChartConfig()
    }

    $scope.chart2 = {
        series: [{
            name: 'John',
            id: 'john',
            type: 'spline',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Jane',
            type: 'spline',
            data: [1, 3, 4, 3, 3, 5, 4]
        }],
        config: getChartConfig()
    }

    $scope.removeJohn = function () {
        $scope.chart.config.api.removeSeries({id: 'john'})
        $scope.chart2.config.api.removeSeries({id: 'john'})
        $scope.johnRemoved = true
    }

    $scope.addJohn = function () {
        $scope.chart.config.api.addSeries(johnSeries)
        $scope.chart2.config.api.addSeries(johnSeries)
        $scope.johnRemoved = false
    }
})

function getChartConfig() {
    return {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Average fruit consumption during one week'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            plotBands: [{
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Fruit units'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        }
    }
}