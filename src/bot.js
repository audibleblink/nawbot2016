import * as XBL from './lib/live'
import imageSearch from './lib/image_search'
import * as urbanDict from './lib/urban'

export const respond = (req, res) => {

  let request = req.body
    , keyword = request.trigger_word
    , sourceUser = request.user_name
    , message = request.text

  if (keyword == "!live") {
    let gamertag = message.replace(RegExp(keyword + " "), "")
    XBL.getXuid(gamertag)
      .then(XBL.getPresence)
      .then((presence) => {
        return XBL.prepareResponse(presence, gamertag)
      })
      .then((response) => { replyWith(response, res) })
      .catch((err) => { 
        replyWith(new Error(err), res) 
      })
  }


  if (keyword === "!ping") {
    replyWith("pong!", res)
  }


  if (keyword === "!img") {
    const query = message.replace(RegExp(keyword + " "), "")
    imageSearch(query)
      .then((url) => replyWith(url, res))
      .catch((err) => replyWith(err, res) )
  }


  if (keyword === "!gif") {
    const query = message.replace(RegExp(keyword + " "), "")
    imageSearch(`gif ${query}`)
      .then((url) => replyWith(url, res))
      .catch((err) => replyWith(err, res))
  }
  
  
  if (keyword === "!urban") {
    const term = message.replace(RegExp(keyword + " "), "")
    urbanDict.search(term)
      .then((definition) => replyWith(definition, res))
  }
}


const replyWith = (body, res) => {
  console.log("Replying with " + body)
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end(`{"text": "${body}", "unfurl_links": true}`)
}
