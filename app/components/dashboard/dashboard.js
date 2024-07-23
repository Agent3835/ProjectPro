export const init = () => {
   // Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
    Highcharts.chart('container-spline', {
        chart: {
        type: 'spline'
        },
        title: {
        text: 'Monthly Average Temperature'
        },
        subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
        },
        xAxis: {
        categories: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        accessibility: {
            description: 'Months of the year'
        }
        },
        yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
        },
        tooltip: {
        crosshairs: true,
        shared: true
        },
        plotOptions: {
        spline: {
            marker: {
            radius: 4,
            lineColor: '#666666',
            lineWidth: 1
            }
        }
        },
        series: [{
        name: 'Tokyo',
        marker: {
            symbol: 'square'
        },
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
            y: 26.4,
            marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            },
            accessibility: {
            description: 'Sunny symbol, this is the warmest point in the ' +
                'chart.'
            }
        }, 22.8, 17.5, 12.1, 7.6]
    
        }, {
        name: 'Bergen',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 1.5,
            marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            },
            accessibility: {
            description: 'Snowy symbol, this is the coldest point in the ' +
                'chart.'
            }
        }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
        }]
    });
    
    Highcharts.chart('container-area', {
        chart: {
            type: 'area'
        },
        accessibility: {
            description: 'Image description: An area chart compares the nuclear ' +
                'stockpiles of the USA and the USSR/Russia between 1945 and ' +
                '2024. The number of nuclear weapons is plotted on the Y-axis ' +
                'and the years on the X-axis. The chart is interactive, and the ' +
                'year-on-year stockpile levels can be traced for each country. ' +
                'The US has a stockpile of 2 nuclear weapons at the dawn of the ' +
                'nuclear age in 1945. This number has gradually increased to 170 ' +
                'by 1949 when the USSR enters the arms race with one weapon. At ' +
                'this point, the US starts to rapidly build its stockpile ' +
                'culminating in 31,255 warheads by 1966 compared to the USSR’s 8,' +
                '400. From this peak in 1967, the US stockpile gradually ' +
                'decreases as the USSR’s stockpile expands. By 1978 the USSR has ' +
                'closed the nuclear gap at 25,393. The USSR stockpile continues ' +
                'to grow until it reaches a peak of 40,159 in 1986 compared to ' +
                'the US arsenal of 24,401. From 1986, the nuclear stockpiles of ' +
                'both countries start to fall. By 2000, the numbers have fallen ' +
                'to 10,577 and 12,188 for the US and Russia, respectively. The ' +
                'decreases continue slowly after plateauing in the 2010s, and in ' +
                '2024 the US has 3,708 weapons compared to Russia’s 4,380.'
        },
        title: {
            text: 'US and USSR nuclear stockpiles'
        },
        subtitle: {
            text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
                'target="_blank">FAS</a>'
        },
        xAxis: {
            allowDecimals: false,
            accessibility: {
                rangeDescription: 'Range: 1940 to 2024.'
            }
        },
        yAxis: {
            title: {
                text: 'Nuclear weapon states'
            }
        },
        tooltip: {
            pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>' +
                'warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'USA',
            data: [
                null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
                1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
                28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
                26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
                23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
                21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
                10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
                5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
                3750, 3708, 3708, 3708, 3708
            ]
        }, {
            name: 'USSR/Russia',
            data: [
                null, null, null, null, null, null, null, null, null,
                1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
                3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
                14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
                32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
                32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
                13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
                5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
                4310, 4495, 4477, 4489, 4380
            ]
        }]
    });
    

}