import xboxApi from "node-xbox"
import * as Views from "./live-views"
const client = xboxApi(process.env.XBOX_API)


const getXuid = (gamertag) => {
  return new Promise((resolve, reject) => {
    client.profile.xuid(gamertag, (err, data) => {
      err ? reject(new Error(err)) : resolve(data)
    })    
  })
}

const getPresence = (xuid) => {
  return new Promise((resolve, reject) => {
    client.profile.presence(xuid, (err, data) => {
      err ? reject(new Error(err)) : resolve(data)
    })
  })
}

const prepareResponse = (presenceJson, gamertag) => {
  let presence = JSON.parse(presenceJson)
    , reply    = `${gamertag} is ${presence.state}\\n`

  if (presence.state === "Offline") {
    reply = Views.formatForOffline(reply, presence)
  } else if (presence.state === "Online") {
    reply = Views.formatForOnline(reply, presence)
  }

  return reply
}

export { getXuid, getPresence, prepareResponse }
