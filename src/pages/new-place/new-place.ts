import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlacesService} from "../../services/places.services";
import {Geolocation} from "@ionic-native/geolocation";

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesService: PlacesService, private navController: NavController, private geolocation: Geolocation) {}

  onAddPlace(value: {title: string}) {
    this.placesService.addPlace(value);
    this.navController.pop();
  }

  onLocateUser() {
    this.geolocation.getCurrentPosition()
      .then(
        (location) => {
          console.log('Location fetched successfully')
        }
      )
      .catch(
        (error) => console.log('An error occurred')
      );
  }

}
