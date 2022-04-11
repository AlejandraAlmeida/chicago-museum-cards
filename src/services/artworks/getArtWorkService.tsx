import getArtWorkMapper from './getArtWorksMapper'
import getArtWorkApi from './getArtworksApi'

const getArtWorkService = (page:number) => {
  console.log('Calling getArtWorkService')
  return getArtWorkApi(page)
    .then(res => {
      return getArtWorkMapper(res.data)
    })
}
export default getArtWorkService
