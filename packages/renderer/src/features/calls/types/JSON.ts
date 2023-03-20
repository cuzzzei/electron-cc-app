import { NameJSON, TimeJSON } from '/@/types/JSON'

export interface CallJSON {
   id: string
   startTime: TimeJSON
   duration: TimeJSON
   clientName: NameJSON
   description: string
}
