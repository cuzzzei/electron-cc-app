import { TimeDefinition } from '/@/types/definitions/Time'

export class Time implements TimeDefinition {
   private hour: number
   private minute: number

   constructor(hour: number, minute: number) {
      this.hour = hour
      this.minute = minute
   }

   // getters
   public getHour() {
      return this.hour
   }
   public getMinute() {
      return this.minute
   }

   // setters
   public setHour(hour: number) {
      this.hour = hour
   }
   public setMinute(minute: number) {
      this.minute = minute
   }

   public toString(): string {
      const hour: string = this.hour.toLocaleString('en-US', {
         minimumIntegerDigits: 2,
         useGrouping: false,
      })
      const minute: string = this.minute.toLocaleString('en-US', {
         minimumIntegerDigits: 2,
         useGrouping: false,
      })

      return `${hour}:${minute}`
   }
}
