import { useNavigate, useLocation } from 'react-router'

const Details = (props: any) => {
  const navigate = useNavigate()
  const { state } = useLocation()
  console.log(state)
  return (
    <div>
      <h1>Heeeeyyyy Details page</h1>

      <button onClick={() => navigate('/')}>Ir a Home</button>
    </div>
  )
}

export default Details
