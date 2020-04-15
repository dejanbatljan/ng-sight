import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/orders';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders:Order[] = [
    {id: 1, customer: {id: 1, name: 'Main St Bakery', state: 'CO', email:'mymail@dot.com'}, total:230, placed: new Date(2020, 4, 1), fulfilled: new Date(2020,4,5), status: 'Complete'},
    {id: 2, customer: {id: 1, name: 'Main St Bakery', state: 'CO', email:'mymail@dot.com'}, total:230, placed: new Date(2020, 4, 1), fulfilled: new Date(2020,4,5), status: 'Complete'},
    {id: 3, customer: {id: 1, name: 'Main St Bakery', state: 'CO', email:'mymail@dot.com'}, total:230, placed: new Date(2020, 4, 1), fulfilled: new Date(2020,4,5), status: 'Complete'},
    {id: 4, customer: {id: 1, name: 'Main St Bakery', state: 'CO', email:'mymail@dot.com'}, total:230, placed: new Date(2020, 4, 1), fulfilled: new Date(2020,4,5), status: 'Complete'},
    {id: 5, customer: {id: 1, name: 'Main St Bakery', state: 'CO', email:'mymail@dot.com'}, total:230, placed: new Date(2020, 4, 1), fulfilled: new Date(2020,4,5), status: 'Complete'}

  ];

  ngOnInit(): void {
  }

  goToPrevious(): void {
    console.log('Previous Button Clicked');
  }

  goToNext(): void {
    console.log('Next Button Clicked');
  }

}
