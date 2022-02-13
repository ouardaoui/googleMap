import casual from "casual-browserify";

export class Company {
  companyName: string
  companyPhrase: string
  location: {
    lat: number,
    lng: number
  }
  constructor() {
    this.companyName = casual.company_name
    this.companyPhrase = casual.company_suffix
    this.location = {
      lat: parseFloat(casual.latitude),
      lng: parseFloat(casual.longitude)
    }
  }
  makerContent(): string {
    return `
    <div>
      <h1>Name ${this.companyName}</h1>
      <h3>Name ${this.companyPhrase}</h3>
    </div>
    `
  }
}