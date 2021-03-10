google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var androidOSVersions = google.visualization.arrayToDataTable([
              ['Month',  '1.6 Donut (4)', '2.1 Eclair (7)', '2.2 Froyo (8)', '2.3 Gingerbread (9+10)', '3.2 Honeycomb (13)', '4.0 Ice Cream Sandwich (15)', '4.1/2 Jelly Bean (16, 17)'],
              ['April 2013', 0.1, 1.7, 4.0, 39.8, 0.2, 29.3, 25.0],
            ]);
            
            var androidOSVersionsOptions = {
                backgroundColor: { fill:'transparent' },
                legend: { textStyle: { color: 'white'}},
                title: 'Android OS Versions',
                vAxis: {title: '% share'},
                isStacked: true
            };
    
    
    var osShares = google.visualization.arrayToDataTable([
        ['OS', 'Share'],
        ['Android', 75.0],
        ['iOS', 14.9],
        ['BlackBerry', 4.3],
        ['Symbian', 2.3],
        ['Windows', 2.0],
        ['Linux', 1.5],
        ]);

        var browserSharesOct12 = google.visualization.arrayToDataTable([
            ['OS', 'Share'],
            ['Safari Mobile', 60.31],
            ['Android Browser', 25.95],
            ['Opera Mini', 8.24],
            ['BlackBerry', 1.63],
            ['Others', 4.12],
            ]);

            var browserSharesDec12 = google.visualization.arrayToDataTable([
                ['OS', 'Share'],
                ['Safari Mobile', 60.56],
                ['Android Browser', 22.10],
                ['Opera Mini', 10.71],
                ['Chrome', 1.48],
                ['BlackBerry', 1.17],
                ['Internet Explorer', 1.16],
                ['Symbian', 0.77],
                ['Opera Mobile', 0.62],
                ['Others', 1.43],
                ]);

                var browserSharesMar13 = google.visualization.arrayToDataTable([
                    ['OS', 'Share'],
                    ['Safari Mobile', 55.41],
                    ['Android Browser', 22.82],
                    ['Opera Mini', 12.72],
                    ['Chrome', 1.96],
                    ['BlackBerry', 0.96],
                    ['Internet Explorer', 1.58],
                    ['Symbian', 1.37],
                    ['Opera Mobile', 0.63],
                    ['Others', 2.55],
                    ]);

                    var androidScreens = google.visualization.arrayToDataTable([
                        ['OS', 'Share'],
                        ['normal hdpi', 50.1],
                        ['normal xhdpi', 25.1],
                        ['normal mdpi', 11.0],
                        ['xlarge mdpi', 4.6],
                        ['large xhdpi', 3.6],
                        ['large mdpi', 2.4],
                        ['small ldpi', 1.7],
                        ['small hdpi', 1.0],
                        ['normal ldpi', 0.4],
                        ['large ldpi', 0.1],
                        ]);

                        var tabletsMarket = google.visualization.arrayToDataTable([
                            ['OS', 'Share'],
                            ['iPad', 52],
                            ['Android', 48],
                            ]);

                            var options = {
                                backgroundColor: { fill:'transparent' },
                                legend: { textStyle: { color: 'white'}}
                            };

                            var osMarketChart = new google.visualization.PieChart(document.getElementById('os_market'));
                            osMarketChart.draw(osShares, options);

                            var browserMarketChartMar2013 = new google.visualization.PieChart(document.getElementById('mobile_browser_market_march_2013'));
                            browserMarketChartMar2013.draw(browserSharesMar13, options);

                            var browserMarketChartDec2012 = new google.visualization.PieChart(document.getElementById('mobile_browser_market_december_2012'));
                            browserMarketChartDec2012.draw(browserSharesDec12, options);

                            var browserMarketChartOct2012 = new google.visualization.PieChart(document.getElementById('mobile_browser_market_october_2012'));
                            browserMarketChartOct2012.draw(browserSharesOct12, options);

                            var androidScreensChart = new google.visualization.PieChart(document.getElementById('android_screens'));
                            androidScreensChart.draw(androidScreens, options);

                            var tabletsChart = new google.visualization.PieChart(document.getElementById('tablets_market'));
                            tabletsChart.draw(tabletsMarket, options);
                            
                            var androidOSVersionsChart = new google.visualization.SteppedAreaChart(document.getElementById('androidOSVersionsChart'));
                                    androidOSVersionsChart.draw(androidOSVersions, androidOSVersionsOptions); 
                        }