import { useState } from 'react'
import { useNavigate } from 'react-router'
import getArtWorkService from '../services/artworks/getArtWorkService'

const Home = () => {
  // eslint-disable-next-line  no-unused-vars
  const [imgUrl, setImgUrl] = useState('')
  const navigate = useNavigate()
  let artworks = []
  // eslint-disable-next-line  no-unused-vars

  const apiCall = () => {
    getArtWorkService().then(res => {
      artworks = [...res]
      console.log(artworks, 'heeeeeeey')
      setImgUrl(`${process.env.REACT_APP_HOST_IMAGES_API}/${res[0].imageId}/full/843,/0/default.jpg`)
      // imgUrl ? console.log(imgUrl) : ''
    })
  }

  return (
    <div>
      <h1>Heeeeyyyy Home</h1>
      <button onClick={() => navigate('/details')}>Ir a details</button>
      <button onClick={() => apiCall()}>get artworks</button>
      <div>
        {imgUrl && <img src={imgUrl} alt="cositas" />}
      </div>
    </div>
  )
}

export default Home
