//Array per la percentuale
var percent = [
    {
        data: 'HTML',
        percent: 78
    },
    {
        data: 'CSS',
        percent: 83
    },
    {
        data: 'JavaScript',
        percent: 75
    },
    {
        data: 'Laravel',
        percent: 80
    },
    {
        data: 'PHP',
        percent: 78
    }
];
cicloFor(percent)

//Ciclo il mio array
function cicloFor(percent){
var myFeature = {};
for (var i = 0; i < percent.length; i++) {
    singolo = percent[i];
    var data = singolo.data;
    var perc = singolo.percent;
        if (myFeature[data] === undefined) {
            myFeature[data] = 0;
        }
        myFeature[data] = perc
        operazione(myFeature)
    }
};

// Ciclo for in i valori da inserire nel mio grafico
function operazione(myData) {
    var labelData = [];
    var dataPercent = [];

    for (var key in myData) {
        labelData.push(key);
        dataPercent.push(myData[key]);
    }

     compilaGrafico(labelData, dataPercent);
};

// Compilo il grafico con i valori
function compilaGrafico(label, data){
    var ctx = $('#grafico');
    var chart = new Chart(ctx, {

        type: 'horizontalBar',
        data: {
            datasets: [{
                data: data,
                backgroundColor: ['#595959', '#595959', '#595959', '#595959', '#595959'],
                borderColor: ['#000000','#000000','#000000','#000000','#000000'],
                borderWidth:2
                // hoverBackgroundColor: ['#ff4d4d'],
            }],

            labels: label
        },
        options: {
            scales: {
            xAxes: [{
                ticks: {
                    min: 0, // Edit the value according to what you need
                    max:100
                }
            }],
            yAxes: [{
                stacked: true
            }]
        },
        legend: {
       display: false
        },
    //     tooltips: {
    //     callbacks: {
    //        label: function(tooltipItem) {
    //               return tooltipItem.yLabel;
    //        }
    //     }
    // },

        events: {
        showTooltips: false
    },
        responsive: true,
                tooltips: {
                  callbacks: {
                    label: function(tooltipItem, data) {
                      return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                    }
                }
            },
        }
    })
};

//
// // Compilo il grafico con i valori 2
//     var ctx = $('#grafico2');
//     var chart = new Chart(ctx, {
//
//         type: 'doughnut',
//         data: {
//             datasets: [{
//                 data: [50, 50],
//                 backgroundColor: ['#1a8cff'],
//                 hoverBackgroundColor: ['#80bfff'],
//                 borderWidth: 2
//             }],
//
//             labels: ['jQuery']
//         },
//         options: {
//
//         responsive: true,
//                 tooltips: {
//                   callbacks: {
//                     label: function(tooltipItem, data) {
//                       return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
//                     }
//                 }
//             },
//         }
//     });
//
// // Compilo il grafico con i valori 3
//     var ctx = $('#grafico3');
//     var chart = new Chart(ctx, {
//
//         type: 'doughnut',
//         data: {
//             datasets: [{
//                 data: [70, 30],
//                 backgroundColor: ['#47d147'],
//                 hoverBackgroundColor: ['#85e085'],
//                 borderWidth: 2
//             }],
//
//             labels: ['Laravel/Sass']
//         },
//         options: {
//
//         responsive: true,
//                 tooltips: {
//                   callbacks: {
//                     label: function(tooltipItem, data) {
//                       return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
//                     }
//                 }
//             },
//         }
//     });
//
// // Compilo il grafico con i valori 3
//     var ctx = $('#grafico4');
//     var chart = new Chart(ctx, {
//
//         type: 'doughnut',
//         data: {
//             datasets: [{
//                 data: [60, 40],
//                 backgroundColor: ['#e6e600'],
//                 hoverBackgroundColor: ['#ffff4d'],
//                 borderWidth: 2
//             }],
//
//             labels: ['PHP']
//         },
//         options: {
//
//         responsive: true,
//                 tooltips: {
//                   callbacks: {
//                     label: function(tooltipItem, data) {
//                       return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
//                     }
//                 }
//             },
//         }
//     });

// My project
$('.one').mouseenter(function(){
    var thisImg = $(this);
    $(this).addClass('none');
    $('.two').addClass('active');
});

$('.two').mouseleave(function(){
    var thisImg = $(this);
    $(this).removeClass('active');
    $('.one').removeClass('none');
});

$('.three').mouseenter(function(){
    var thisImg = $(this);
    $(this).addClass('none');
    $('.four').addClass('active');
});

$('.four').mouseleave(function(){
    var thisImg = $(this);
    $(this).removeClass('active');
    $('.three').removeClass('none');
});

// Hello click
$('.top-sx h1').click(function(){
    var thisFont = $(this);
    $(thisFont).addClass('none');
    $('.click').addClass('block');
});
