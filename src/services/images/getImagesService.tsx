import getImagesApi from './getImagesApi'

const getImagesService = (): Promise<string> => {
  console.log('Calling getArtWorkService')
  // TODO: use a param
  return getImagesApi('0330a6dd-774e-eff1-0073-2be5f85b81d0')
    .then((res) => {
      return res.data
    })
}
export default getImagesService
