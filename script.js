let chart;

function drawGraph() {
  const speed = Number(document.getElementById("speed").value);

  const time = [];
  const distance = [];

  for (let t = 0; t <= 10; t++) {
    time.push(t);
    distance.push(speed * t);
  }

  const ctx = document
    .getElementById("distanceTimeChart")
    .getContext("2d");

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: time,
      datasets: [
        {
          label: "Distance (m)",
          data: distance,
          borderColor: "green",
          backgroundColor: "rgba(0,128,0,0.1)",
          borderWidth: 2,
          fill: true,
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Time (seconds)"
          }
        },
        y: {
          title: {
            display: true,
            text: "Distance (meters)"
          }
        }
      }
    }
  });
}
