export default class Country {
  constructor (
    id,
    name,
    cases,
    deaths,
    recoveries,
    visualData,
    visualLabels
  ) {
    this.id = id
    this.name = name
    this.cases = cases
    this.deaths = deaths
    this.recoveries = recoveries
    this.visualData = visualData
    this.visualLabels = visualLabels
  }
}
