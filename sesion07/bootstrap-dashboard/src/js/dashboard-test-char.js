var ctx = document.getElementById('myTestChart').getContext('2d')
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)'
            ],
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

