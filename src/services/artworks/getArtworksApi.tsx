import axios from 'axios'
import { ArtWorksResponse } from './model'

const getArtWorkApi = async (): Promise<ArtWorksResponse> => {
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
