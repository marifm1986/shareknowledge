import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  selectedValue: any

  vegetables: any = [
    {
      vegName: 'Carrot',
    },
    {
      vegName: 'Broccoli',
    },
    {
      vegName: 'Spinach',
    },
    {
      vegName: 'Tomato',
    },
    {
      vegName: 'Zucchini',
    },
    {
      vegName: 'Radish',
    },
    {
      vegName: 'Cauliflower',
    },
    {
      vegName: 'Artichoke',
    },
    {
      vegName: 'Eggplant',
    },
    {
      vegName: 'Asparagus',
    },
    {
      vegName: 'Beetroot',
    },
    {
      vegName: 'Snow Peas',
    },
    {
      vegName: 'Butternut Squash',
    },
    {
      vegName: 'Kale',
    },
  ];

}
