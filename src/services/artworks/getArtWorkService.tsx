import getArtWorkMapper from './getArtWorkMapper'
import getArtWorkApi from './getArtworksApi'

const getArtWorkService = () => {
  return getArtWorkApi()
    .then(res => {
      return getArtWorkMapper(res.data)
    })
}
export default getArtWorkService
