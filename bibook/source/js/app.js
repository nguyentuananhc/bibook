$(function(){

  $(".menu-button").on('click', function (event) {
    $(this).toggleClass("is-active");
    $(".header-mobile").toggleClass('slide-down');
  });

//pie-chart
function chart(x, name) {
  var radius = 45;
  var circumference = 2 * radius * Math.PI;
  var percent = x;

  var chart = document.getElementById(name);
  chart.style.strokeDasharray = (percent * circumference) + ' ' + circumference;
}

//dropdown-test
$('.dropdown-test').click(function(event) {
  $(this).siblings().removeClass('active')
});

chart(0.5, "skill");
chart(0.6, "iq");
chart(0.7, "eq");

//line-chart
  var ctx = document.getElementById("mychart");
  var mychart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["", "4 tháng", "5 tháng", "6 tháng", "7 tháng", "8 tháng", "9 tháng", "10 tháng"],
      datasets: [{
        label: 'Ngôn ngữ',
        data: [1.5, 1, 2.5, 2, 3, 1, 2, 1],
        fill: false,
        borderColor:'#e0ce2d',
        borderWidth: 2,
        backgroundColor: '#e0ce2d',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        lineTension: 0,
      } , {
        label: 'Vận động',
        data: [0.5, 1.5, 2, 3, 1.6, 3, 2, 1],
        fill: false,
        borderColor: '#5fd5ad',
        borderWidth: 2,
        backgroundColor: '#5fd5ad',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        lineTension: 0
      } , {
        label: 'Giao tiếp',
        data: [3, 1, 2, 2.3, 0.5, 1.6, 2, 3],
        fill: false,
        borderColor: '#fba586',
        borderWidth: 2,
        backgroundColor: '#fba586',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        lineTension: 0
      } , {
        label: 'Phát triển',
        data: [0.2, 3, 2.5, 1, 1.5, 1.8, 2.5, 0.3],
        fill: false,
        borderColor: '#3b7cad',
        borderWidth: 2,
        backgroundColor: '#3b7cad',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        lineTension: 0
      }]
    },
    options: {
      scales: {
        xAxes: [{
          gridLines : {
            display : false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero:true,
            min: 0,
            max: 4,
            stepSize: 1,
            suggestedMin: 0.5,
            suggestedMax: 4.5,
            callback: function(label, index, labels) {
              switch (label) {
                case 0:
                  return 'Tháng tuổi';
                case 1:
                  return 'Yếu (chậm)';
                case 2:
                  return 'Bình thường';
                case 3:
                  return 'Tốt';
                case 4:
                  return 'Xuất sắc';
              }
            }
          },
          gridLines : {
            drawBorder: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });
});
