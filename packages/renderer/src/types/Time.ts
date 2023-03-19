import { TimeJSON } from '/@/types/JSON'

export class Time {
   private hour: number
   private minute: number

   constructor(hour?: number, minute?: number) {
      const d = new Date()
      const currentHour = d.getHours()
      const currentMinute = d.getMinutes()

      if (
         hour === undefined ||
         minute === undefined ||
         !this.isValid(hour, minute)
      ) {
         this.hour = currentHour
         this.minute = currentMinute
         return
      }

      this.hour = hour
      this.minute = minute
   }

   private format(num: number): string {
      return num.toLocaleString('en-US', {
         minimumIntegerDigits: 2,
         useGrouping: false,
      })
   }

   private isValidHour(hour: number): boolean {
      return hour >= 0 && hour <= 23
   }

   private isValidMinute(minute: number): boolean {
      return minute >= 0 && minute <= 59
   }

   private isValid(hour: number, minute: number): boolean {
      return this.isValidHour(hour) && this.isValidMinute(minute)
   }

   public toInt(): number {
      return this.hour * 100 + this.minute
   }

   public getHour(): number {
      return this.hour
   }

   public getMinute(): number {
      return this.minute
   }

   public setHour(hour: number) {
      if (this.isValidHour(hour)) {
         this.hour = hour
      }
   }

   public setMinute(minute: number) {
      if (this.isValidMinute(minute)) {
         this.minute = minute
      }
   }

   public static fromString(s: string): Time {
      const [hour, minute] = s.split(':').map((s) => Number(s))
      return new Time(hour, minute)
   }

   public toString(): string {
      const hour = this.format(this.hour)
      const minute = this.format(this.minute)

      return `${hour}:${minute}`
   }

   public toJSON(): TimeJSON {
      return {
         hour: this.hour,
         minute: this.minute,
      }
   }

   public static fromJSON(json: TimeJSON): Time {
      return new Time(json.hour, json.minute)
   }

   public assign(other: Time): Time {
      this.hour = other.hour
      this.minute = other.minute
      return this
   }

   public isEqual(other: Time): boolean {
      return this.toInt() === other.toInt()
   }

   public isDifferent(other: Time): boolean {
      return !this.isEqual(other)
   }

   public isLesserThan(other: Time): boolean {
      return this.toInt() < other.toInt()
   }

   public isLesserOrEquals(other: Time): boolean {
      return !this.isGreatherThan(other)
   }

   public isGreatherThan(other: Time): boolean {
      return !this.isEqual(other) && !this.isLesserThan(other)
   }

   public isGreaterOrEquals(other: Time): boolean {
      return !this.isLesserThan(other)
   }
}
