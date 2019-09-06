import { Component, OnInit } from '@angular/core';

import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menuitem.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string = this.route.parent.snapshot.params['id']

    this.menu = this.restaurantService.getMenuItemInfoByRestaurantId(id)
  }

  public addMenuItem(item: MenuItem) {
    console.log(item)
  }

}
