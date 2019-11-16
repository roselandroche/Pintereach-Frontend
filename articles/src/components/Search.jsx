import React, {useState} from 'react'


export default function SearchForm({search, articles}){
    const [results, setResults] = useState()

    const handleChanges = e =>{
        setResults(e.target.value)
    }
    const submitHandler = e =>{
        e.preventDefault()

        const filtered = articles.filter(el=>{
            return el.title.toLowerCase().indexOf(results.toLowerCase()) !== -1;
        })
        console.log(filtered)
        search(filtered)
        console.log(results)
    }


    return (
        <section className="search-form">
            <form onSubmit={submitHandler}>
                <input 
                onChange={handleChanges}
                type="text"
                name="search"
                id="search"
                placeholder="Search" 
                className="styled-input"/>
            </form>
        </section>
    )
}