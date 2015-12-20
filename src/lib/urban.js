import urban from 'urban'

export const search = (input) => {
  return new Promise((resolve, reject) => {
    const term = urban(input)
    term.first((word) => {
      word ? resolve(word.definition) : resolve("Word not found")
    })
  })
}
