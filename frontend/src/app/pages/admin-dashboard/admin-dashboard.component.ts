import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sidebar: any;
  constructor() { }

  ngOnInit(): void {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];;
    const data = {
      labels: labels,
      datasets: [{
        label: 'Category',
        data: [65, 59, 20, 25, 80, 81, 10, 56, 55, 40, 30, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(190, 27, 51,0.2)',
          'rgba(196, 136, 145,0.2)',
          'rgba(0, 255, 255,0.2)',
          'rgba(0, 255, 98,0.2)',
          'rgba(87, 87, 6,0.2)'
        ], borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgb(190, 27, 51)',
          'rgb(196, 136, 145)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 98)',
          'rgb(87, 87, 6)'
        ],
        borderWidth: 1
      }]
    };

    const myChart = new Chart("myChart", {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    if (window.innerWidth < 1024) {
      this.sidebar = false;
    } else {
      this.sidebar = true;
    }
  }
}
