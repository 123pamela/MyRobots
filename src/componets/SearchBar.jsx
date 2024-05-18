import { useState } from "react"

function SearchBar({ onSubmit }){
    const [term, SetTerm] = useState('')


    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('necesito decirle al componente padre')
        onSubmit(term)
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        SetTerm(event.target.value)
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