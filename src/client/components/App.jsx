import { useState } from 'react'
import '../style/App.css'
import Bike from './bike'
import NewBikeForm from './NewBikeForm'
import Statistics from './Statistics'

function App() {
  const [bikes, setBikes] = useState([])

  const saveNewBike = bike => {
    setBikes(bikes  => [bike, ...bikes])
  }

  const changeBikeStatus = (id, status) => setBikes(bikes => {
    const newBikes = [...bikes]
    newBikes[newBikes.findIndex( bike => bike.id == id)].status = status
    return newBikes
  })

  const deleteBike = id => setBikes(bikes => bikes.filter(bike => bike.id != id))

  const checkIdUniqueness = id => bikes.some(bike => bike.id == id)

  return (
    <>
      <header>
        <h1>admin.bike-booking.com</h1>
      </header>
      <main>
        <ul>
          {bikes.map(bike => 
            <Bike bike={bike} key={bike.id} changeBikeStatus={changeBikeStatus} deleteBike={deleteBike}/>
          )}
        </ul>
        <div>
          <NewBikeForm fetchCallback={saveNewBike} checkIdUniqueness={checkIdUniqueness}/>
          <Statistics bikes={bikes}/>
        </div>
      </main>
      <footer>
        <h2><span>Developer:</span> FirstName LastName</h2>
      </footer>
    </>
  )
}

export default App
