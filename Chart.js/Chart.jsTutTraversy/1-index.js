let myChart = document.getElementById("myChart").getContext("2d");

let massPopChart = new Chart(myChart, {
  type: "line", //?bar, HorizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: labelsForCities,
    datasets: [
      {
        label: "Population",
        data: labelsForPopulation,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: borderColor,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Largest Cities in Massachusets",
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      legend: {
        position: "right",
      },
      tooltips: {
        enabled: true,
      }
    },
  },
});
