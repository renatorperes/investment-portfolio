fetch("data/Performance.json")
  .then(response => response.json())
  .then(data => {
    const ctx = document.getElementById("performanceChart");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Portfolio (%)",
            data: data.portfolio,
            borderWidth: 2
          },
          {
            label: "Benchmark (%)",
            data: data.benchmark,
            borderWidth: 2
          }
        ]
      }
    });
  });
