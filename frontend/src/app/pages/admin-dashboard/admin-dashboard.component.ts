import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public primaryXAxis: any;
  public chartData: any;
  // public title: string = '';
  public primaryYAxis: any;
  constructor() { }

  ngOnInit(): void {
    this.chartData = [
      { months: "Jan", category: 30 },
      { months: "Feb", category: 25 },
      { months: "Mar", category: 10 },
      { months: "Apr", category: 50 },
      { months: "May", category: 50 },
      { months: "Jun", category: 40 },
      { months: "Jul", category: 40 },
      { months: "Aug", category: 30 },
      { months: "Sep", category: 10 },
      { months: "Oct", category: 5 },
      { months: "Nov", category: 3 },
      { months: "Dec", category: 8 },
    ];
    this.primaryXAxis = {
      valueType: 'Category',
      title: 'Months'
    };
    this.primaryYAxis = {
      minimum: 0,
      maximum: 80,
      interval: 10,
      title: 'Category'
    };
  }


}
