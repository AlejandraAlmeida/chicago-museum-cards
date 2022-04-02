import axios from 'axios'

const getArtWorkApi = async () => {
  const url = 'https://api.artic.edu/api/v1/artworks'
  return await axios.get(url)
    .then(res => {
      console.log('Successfully call')
      return res.data
    })
    .catch((err) => {
      console.log(JSON.stringify(err))
      throw Error('API fails')
    })
}
export default getArtWorkApi
