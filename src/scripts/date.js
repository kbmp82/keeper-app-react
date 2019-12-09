class GetDate {
    constructor() {
      this.date = new Date()
      this.currentTime = this.date.getHours()
      this.currentYear = this.date.getFullYear()
    }
    getYear() {
        return this.currentYear
    }
  }
  
  export { GetDate as default };
  