import casual from "casual-browserify";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number
  }
  constructor() {
    this.name = casual.name
    this.location = {
      lat: parseFloat(casual.latitude),
      lng: parseFloat(casual.longitude)
    }
  }
  makerContent(): string {
    return `Name : ${this.name}`
  }
}