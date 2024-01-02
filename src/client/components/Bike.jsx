import '../style/bike.css'

export default function Bike({bike, changeBikeStatus, deleteBike}){

    const {name, type, color, status, price, _id} = bike
    console.log(status)
    const formattedPrice = Number(price).toFixed(2).padStart(5, "0")

    return(
        <li className={`bike bike-${status}`}>
            <div>
                <p><strong>{name}</strong> - {type}({color})</p>
                <p className="bike-id">ID:{_id}</p>
                <p className="bike-status">STATUS 
                    <select initialvalue={status} onChange={e => changeBikeStatus(_id, e.target.value)}>
                        <option value="available" selected={status=="available"}>Available</option>
                        <option value="busy" selected={status=="busy"}>Busy</option>
                        <option value="unavailable" selected={status=="unavailable"}>Unavailable</option>
                    </select>
                </p>
            </div>
            <div className="bike-right-col">
                <button onClick={() => deleteBike(_id)}>×</button>
                <p>{formattedPrice} UAH/hr.</p>
            </div>
        </li>
    )
}