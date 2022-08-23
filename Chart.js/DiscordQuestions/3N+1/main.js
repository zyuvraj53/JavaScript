let chart = document.getElementById("chart").getContext("2d");
let num = 41;

let lineChart = new Chart(chart, {
  type: "line",
  data: {
    labels: generateNums(generateSequence(num).length),
    datasets: [
      {
        label: "Line Dataset for n = " + num,
        data: generateSequence(num),
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: borderColor,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: findGreatest(generateSequence(num)) + 50,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Line Chart",
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      // legend: {
      //   position: "right",
      // },
      tooltips: {
        enabled: true,
      },
    },
  },
});
