window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Activity Graph- $186K"
        },
        axisY: {
            title: "Growth Rate (in k)",
            suffix: "k"
        },
        axisX: {
            title: "Countries"
        },
        data: [{
            type: "column",
            yValueFormatString: "#,##0.0#\"k\"",
            dataPoints: [
                { label: "India", y: 7.1 },	
                { label: "China", y: 6.70 },	
                { label: "Indonesia", y: 5.00 },
                { label: "Australia", y: 2.50 },	
                { label: "Mexico", y: 2.30 },
                { label: "UK", y: 1.80 },
                { label: "United States", y: 1.60 },
                { label: "Japan", y: 1.60 }
                
            ]
        }]
    });
    chart.render();
    
    }
    