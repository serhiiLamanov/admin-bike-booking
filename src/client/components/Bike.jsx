import '../style/bike.css'

export default function Bike({bike, changeBikeStatus, deleteBike}){

    const {name, type, color, status, price, id} = bike
    
    const formattedPrice = Number(price).toFixed(2).padStart(5, "0")

    return(
        <li className={`bike bike-${status}`}>
            <div>
                <p><strong>{name}</strong> - {type}({color})</p>
                <p className="bike-id">ID:{id}</p>
                <p className="bike-status">STATUS 
                    <select initialvalue={status} onChange={e => changeBikeStatus(id, e.target.value)}>
                        <option value="available">Available</option>
                        <option value="busy">Busy</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                </p>
            </div>
            <div className="bike-right-col">
                <button onClick={() => deleteBike(id)}>×</button>
                <p>{formattedPrice} UAH/hr.</p>
            </div>
        </li>
    )
}