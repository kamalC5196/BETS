gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 20,
            padding: 10,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    }; 

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 20,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

 var chart_labels = ["00h", "01h", "02h", "03h", "04h", "05h", "06h", "07h", "08h", "09h", "10h", "11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h","24h"];
    var chart_data = [6,6,4,5,8,8,7,12,12,6,18,16,12,10,12,12,12,9,9,8,7,4,6,9,10];

    var ctx = document.getElementById("chartBig1").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "Satellites locked",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: chart_data,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple
    };
    var myChartData = new Chart(ctx, config);
    

    var ctx = document.getElementById("CountryChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.3, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

	var myChart1 = new Chart(ctx, {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: ['GPS', 'GLONASS', 'GALELIO', 'IRNSS'],
        datasets: [{
          label: "Satellites Visible",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [18,12,10,7],
        }]
      },
      options: gradientBarChartConfiguration
		
    });

var g1;
    document.addEventListener("DOMContentLoaded", function(event) {
        g1 = new JustGage({
            id: "g1",
            value: "0",
            min: 0,
            max: 100,
            donut: true,
            gaugeWidthScale: 0.11,
            counter: true,
			label: "dBHz",
			pointer: true,
			pointerOptions: {
			toplength: 2,
			bottomlength: -15,
			bottomwidth: 12,
 		    color: '#8e8e93',
			
},
		    hideInnerShadow: false
        });
 
 var g2;
    
        g2 = new JustGage({
            id: "g2",
            value: "0",
            min: 0,
            max: 100,
            donut: true,
            gaugeWidthScale: 0.11,
            counter: true,
			label: "dBHz",
			pointer: true,
			pointerOptions: {
			toplength: 2,
			bottomlength: -15,
			bottomwidth: 12,
 		    color: '#8e8e93'
},
		    hideInnerShadow: false
        });
	

 var g3;
    
        g3 = new JustGage({
            id: "g3",
            value: "0",
            min: 0,
            max: 100,
            donut: true,
            gaugeWidthScale: 0.11,
            counter: true,
			label: "dBHz",
			pointer: true,
			pointerOptions: {
			toplength: 2,
			bottomlength: -15,
			bottomwidth: 12,
 		    color: '#8e8e93'
},
		    hideInnerShadow: false
        });
	

 var g4;
    
        g4 = new JustGage({
            id: "g4",
            value: "0",
            min: 0,
            max: 100,
            donut: true,
            gaugeWidthScale: 0.11,
            counter: true,
			label: "dBHz",
			pointer: true,
			pointerOptions: {
			toplength: 2,
			bottomlength: -15,
			bottomwidth: 12,
 		    color: '#8e8e93'
},
		    hideInnerShadow: false
        });

setInterval(function(){
  g1.refresh(getRandomInt(40,55));
  g2.refresh(getRandomInt(50,55));
  g3.refresh(getRandomInt(30,40));
  g4.refresh(getRandomInt(25,40));
},5000)

});
  
