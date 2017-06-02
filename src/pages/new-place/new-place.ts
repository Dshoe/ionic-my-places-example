import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlacesService} from "../../services/places.services";

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesService: PlacesService, private navController: NavController) {}

  onAddPlace(value: {title: string}) {
    this.placesService.addPlace(value);
    this.navController.pop();
  }

}
