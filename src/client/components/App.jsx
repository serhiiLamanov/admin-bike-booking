import { useEffect, useState } from 'react'
import '../style/App.css'
import Bike from './bike'
import NewBikeForm from './NewBikeForm'
import Statistics from './Statistics'

function App() {
  const [bikes, setBikes] = useState([])

  useEffect( () =>{
    const loadBikes = async() =>{
       try{
        const response = await fetch("/bikes")
        const bikes = await response.json()
        setBikes(bikes)
      }catch(err){
        console.error(err)
      }
    }
    loadBikes()   
  }, [])

  const saveNewBike = async bike => {
    const response = await fetch("/bikes", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(bike)
    })
    const savedBike = await response.json()
    setBikes(bikes  => [savedBike, ...bikes])
  }

  const changeBikeStatus = async (_id, status) => {
    const response = await fetch(`/bikes/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({status: status})
    })
    if(response.ok){
      setBikes(bikes => {
        const newBikes = [...bikes]
        newBikes[newBikes.findIndex( bike => bike._id == _id)].status = status
        return newBikes
      })
    }else{
      console.log("bike saving failed",response.status)
    }
    }

  const deleteBike = async _id => {
    const response = await fetch(`/bikes/${_id}`, {
      method: "DELETE"
    })

    if(response.ok){
      setBikes(bikes => bikes.filter(bike => bike._id != _id))
    }else{
      console.log("bike deleting failed", response.status)
    }
    
  }

  const checkIdUniqueness = _id => bikes.some(bike => bike._id == _id)

  return (
    <>
      <header>
        <h1>admin.bike-booking.com</h1>
      </header>
      <main>
        <ul>
          {bikes.map(bike => 
            <Bike bike={bike} key={bike._id} changeBikeStatus={changeBikeStatus} deleteBike={deleteBike}/>
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
