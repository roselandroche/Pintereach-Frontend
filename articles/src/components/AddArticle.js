import React from 'react'

function AddArticle(props) {
    const [newArticle, setNewArticle] = useState({
        title: '',
        summary: ''
    })

    const handleChange = event => {
        setNewArticle({
            ...newArticle,
            [event.target.name]: event.target.value
        }) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        api()
            .post('api/articles/', newArticle)
            .then(res => {
                console.log(res.data)
                props.history.push(`/dashboard`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={newArticle.title}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='summary'
                    placeholder='Summary'
                    value={newArticle.summary}
                    onChange={handleChange}
                />
                <button type='submit'>Add Article</button>
            </form>
        </div>
    )
}
export default AddArticle;
