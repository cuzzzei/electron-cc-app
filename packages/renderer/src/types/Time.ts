export class Time {
   private hour: number
   private minute: number

   constructor(hour: number, minute: number) {
      this.hour = hour
      this.minute = minute
   }

   private format(num: number): string {
      return num.toLocaleString('en-US', {
         minimumIntegerDigits: 2,
         useGrouping: false,
      })
   }

   private isValid(hour: number, minute: number): boolean {
      return true
   }

   private toInt(): number {
      return 1
   }

   public getHour(): number {
      return this.hour
   }
   public getMinute(): number {
      return this.minute
   }

   public setHour(hour: number) {
      this.hour = hour
   }
   public setMinute(minute: number) {
      this.minute = minute
   }

   public toString(): string {
      const hour = this.format(this.hour)
      const minute = this.format(this.minute)

      return `${hour}:${minute}`
   }

   public assign(other: Time): Time {
      return this
   }

   public isEqual(other: Time): boolean {
      return false
   }

   public isDifferent(other: Time): boolean {
      return false
   }

   public isGreatherThan(other: Time): boolean {
      return false
   }

   public isGreaterOrEquals(other: Time): boolean {
      return false
   }

   public isLesserThan(other: Time): boolean {
      return false
   }

   public isLesserOrEquals(other: Time): boolean {
      return false
   }
}
