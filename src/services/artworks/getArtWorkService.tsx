import getArtWorkMapper from './getArtWorkMapper'
import getArtWorkApi from './getArtworksApi'

const getArtWorkService = () => {
  console.log('Calling getArtWorkService')
  return getArtWorkApi()
    .then(res => {
      return getArtWorkMapper(res.data)
    })
}
export default getArtWorkService
