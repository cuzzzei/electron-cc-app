


export interface Api {
   send: (
      channel: 'saveAgents' | 'loadAgents',
      body?: {
         filename: string
         content: string
      }
   ) => void
   receive: (channel: 'agents', data: any) => void
}
