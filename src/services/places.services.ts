export class PlacesService {

  private places: {title: string}[] = [];

  addPlace(place: {title: string}) {
    this.places.push(place);
  }

  getPlace() {
    return this.places.slice();
  }

}
