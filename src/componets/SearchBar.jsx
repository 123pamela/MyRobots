import { useState } from "react"

function SearchBar({ onSubmit }){
    const [term, setTErm] = useState('')


    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('I need to tell the parent about some data')
        onSubmit(term)
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setTErm(event.target.value)
    }

    console.log('term', term)

    return(
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input
                    className="input is-info"
                    type="text"
                    placeholder="Info input"
                    onChange={handleChange} value={term}
                />
            </form>
        </div>
    )
}
export default SearchBar