interface Mappable {
  location: {
    lat: number,
    lng: number
  }
  makerContent(): string
}
export class CustomMap {
  private googleMap: google.maps.Map
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 1
    })
  }
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }

    })
    marker.addListener("click", () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.makerContent()
      })
      infowindow.open(this.googleMap, marker)
    })
  }
}