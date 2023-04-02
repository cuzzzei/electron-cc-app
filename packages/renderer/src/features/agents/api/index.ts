import { Status } from '/@/components/Toast'

export interface ReadFromDiskResponse {
   result: string
   status: Status
   data?: string
}

export interface WriteToDiskResponse {
   result: string
   status: Status
}
