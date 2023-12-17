import { Component, ViewEncapsulation } from '@angular/core';
import { WhishItem } from './shared/wishItem';

const filters = [
  (item: WhishItem) => item,
  (item: WhishItem) => item.isDone,
  (item: WhishItem) => !item.isDone,
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  selectedFilter: any = 0
  itemText: string = ''

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


  filter = [
    { id: 0, value: 'All' },
    { id: 1, value: 'Done' },
    { id: 2, value: 'Undone' },
  ]

  items: WhishItem[] = [
    new WhishItem('Coffee', true),
    new WhishItem('IPhone 15 Pro Max'),
    new WhishItem('Range Rover'),
  ]

  get filteredItems(): WhishItem[] {
    return this.items.filter(filters[this.selectedFilter])
    // let value = this.selectedFilter;
    // if (value == 0) {
    //   return this.items
    // } else if (value == 1) {
    //   return this.items.filter(item => item.isDone)
    // } else {
    //   return this.items.filter(item => !item.isDone)
    // }
  }

  addNewItem(e) {
    e.stopPropagation()
    this.items.push(new WhishItem(this.itemText))
    this.itemText = ''

  }

  onCheckItem(item: any) {
    item.isDone = !item.isDone
  }

}
