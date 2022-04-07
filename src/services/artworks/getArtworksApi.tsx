import axios from 'axios'

const getArtWorkApi = async (): Promise<any> => {
  const url = `${process.env.REACT_APP_HOST_NAME_API}/artworks`
  return await axios.get(url)
    .then(res => {
      console.log('Successfully getArtWorkApi call')
      return res.data
    })
    .catch((err) => {
      console.log(JSON.stringify(err))
      throw Error('API fails')
    })
}
export default getArtWorkApi
