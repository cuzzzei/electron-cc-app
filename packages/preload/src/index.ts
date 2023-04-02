/**
 * @module preload
 */
import { contextBridge, ipcRenderer } from 'electron'
export { sha256sum } from './nodeCrypto'
export { versions } from './versions'

contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer)

//contextBridge.exposeInMainWorld('api', {
//   send: (channel: string, data: any) => {
//      // whitelist channels
//      const validChannels = ['saveAgents', 'loadAgents']
//      if (validChannels.includes(channel)) {
//         ipcRenderer.send(channel, data)
//      }
//   },

//   invoke: (channel: string, data: any) => {
//      ipcRenderer.invoke(channel, data)
//   },

//   receive: (channel: string, func: any) => {
//      const validChannels = ['agents']
//      if (validChannels.includes(channel)) {
//         // Deliberately strip event as it includes `sender`
//         ipcRenderer.on(channel, (event, ...args) => func(...args))
//      }
//   },
//})
