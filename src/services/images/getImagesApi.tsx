import axios from 'axios'

const getImagesApi = async (imageId: string): Promise<any> => {
  console.log(imageId)
  const url = `${process.env.REACT_APP_HOST_IMAGES_API}/${imageId}/full/843,/0/default.jpg`
  console.log(url)
  return await axios
    .get(url)
    .then((res) => {
      console.log('Successfully getImagesApi call')
      return res.data
    })
    .catch((err) => {
      console.log(JSON.stringify(err))
      throw Error('API fails')
    })
}
export default getImagesApi
