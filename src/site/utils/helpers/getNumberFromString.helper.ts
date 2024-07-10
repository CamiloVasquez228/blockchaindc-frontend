export const getNumberFromString = (text: string) => {
  const regex = /\d+/

  const match = regex.exec(text)

  return match ? match[0] : ''
}
