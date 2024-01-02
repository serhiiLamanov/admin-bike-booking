import '../style/statistics.css'

export default function Statistics({bikes}){
    let available = 0
    let average = 0
    let booked = 0

    bikes.forEach(({status, price}) => {
        status == "available" ? available++
        : status == "busy" ? booked++ : ''
        average += +price
    })
    
    average /= bikes.length || 1
    average = average.toFixed(2)

    return(
        <div className="statistics">
            <h3>statistics</h3>
            <p>Total Bikes: <strong>{bikes.length}</strong></p>
            <p>Available Bikes: <strong>{available}</strong></p>
            <p>Booked Bikes: <strong>{booked}</strong></p>
            <p>Average bike cost: <strong>{average}</strong> UAH/hr.</p>
        </div>
    )
}