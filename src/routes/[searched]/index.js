export async function GET({params}){
  const url = `https://itunes.apple.com/search?term=${params.searched}&entity=song`
  const itunesSearched = await fetch(url)
  const res = await itunesSearched.json()
  let songResults = res.results
  return {body:{songResults}}
}