export async function GET({params}){

  const res = await fetch(`https://itunes.apple.com/search?term=${params.songId}&entity=song`)
  const data = await res.json()
 
  return {
    body: {songResult:data.results[0]}
  }

}