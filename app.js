const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July'
];
const data = {
  labels: labels,
  datasets: [{
    label: 'Stock Price',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
    data: [10, 20, 30, 40, 50, 60, 70]
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

var myChart = new Chart(
  document.getElementById('chart'),
  config
);
