import { useNavigate } from 'react-router'

const Details = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Heeeeyyyy Details page</h1>

      <button onClick={() => navigate('/')}>Ir a Home</button>
    </div>
  )
}

export default Details
