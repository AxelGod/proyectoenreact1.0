import { useState } from "react"

const App = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <form onSubmit={ev => { 
                ev.preventDefault(); 
                setName(ev.target.name.value) }}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p> resultados para: {name}</p>
        </div>
    )
}
export default App;