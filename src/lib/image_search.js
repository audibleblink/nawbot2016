import * as google from 'googleapis'
const customsearch = new google.customsearch('v1')

const auth = process.env.GOOGLE_TOKEN
const cx   = process.env.GOOGLE_CX


export default function(queryString, options = {}) {
  const defaults = { 
    cx, 
    auth, 
    fileType: "jpg, png",
    q: queryString
  }
  
  let settings = Object.assign({}, defaults, options)
  
  return new Promise((resolve, reject) => {
    customsearch.cse.list(settings, (err, resp) => {
      debugger
      if (err) {
        reject(err)
      } else {
        const imageUrl = resp.items[0].pagemap.cse_image[0].src
        resolve(imageUrl)
      }
    })
    
  })
}
