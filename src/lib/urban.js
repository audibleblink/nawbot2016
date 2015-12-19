import urban from 'urban'

const search = (input) => {
    
  return new Promise((resolve, reject) => {
    const term = urban(input)
    term.first((word) => {
      if(!word) {
        resolve("Word not found")
      } else {
        resolve(word.definition)
      }
    })
  })
  
}

export { search }
