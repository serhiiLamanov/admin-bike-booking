import '../style/new-bike-form.css'

export default function NewBikeForm({fetchCallback, checkIdUniqueness}){
    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target
        const myFormData = new FormData(form)
        myFormData.append("status", "available")
        
        const formDataObj = Object.fromEntries(myFormData.entries())
        fetchCallback(formDataObj)

        form.reset()
     }

     const validateId = ({target}) => 
        target.setCustomValidity(checkIdUniqueness(target.value) ? "All Bike IDs should be unique" : "")
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required minLength="5"/>
            <input type="text" name="type" placeholder="Type" required minLength="5"/>
            <input type="color" name="color" placeholder="Color" required/>
            <input type="number" name="wheelSize" placeholder="Wheel size" required min="0" max="914"/>
            <input type="number" name="price" placeholder="Price" required min="0" step="0.01"/>
            <input type="text" name="id" placeholder="ID (slug): ХХХХХХХХХХХХХ" required minLength="5" pattern="\w+" onChange={validateId}/>
            <textarea name="description" placeholder="Description" cols="30" rows="5" required minLength="5"></textarea>
            <button type="submit">save</button>
            <button type="reset">clear</button>
        </form>
    )
}