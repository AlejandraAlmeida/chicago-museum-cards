import axios from 'axios'

const getArtWorkApi = async () => {
  const url = `${process.env.REACT_APP_HOST_NAME_API}/artworks`
  console.log(url, '000000000000')
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
