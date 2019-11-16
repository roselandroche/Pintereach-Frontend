import React, { useState, useEffect } from 'react'
import ArticleGroup from './ArticleGroup'
import Navbar from './DashboardNav'
import axios from 'axios'
import api from '../utils/api';
import data from './dummyData'


function Dashboard() {

    const [articles, setArticles] = useState(data)
    const [filteredArticles, updateArticles] = useState(data)
   

    const search = data =>{
        updateArticles(data)
    }

  
    
    useEffect(()=>{
    
    

        // api().get('/api/articles').then(res=>{
        //     console.log(res)0
        // })

        
    }, [])

    return (
      <div>
        {/* ADD GET REQUEST TO DISPLAY ARTICLES HERE */}
        
        <Navbar />
        <ArticleGroup search={search} name="Resources" articles={filteredArticles}/>
    
       </div>
    )
}



{/* <Form>

{ touched.category && errors.category && <p className='error'>{errors.category}</p> }
<Field component="select" name="category">
    <option value="" disabled>Select Category:</option>
    <option value="news">News</option>
    <option value="entertainment">Entertainment</option>
    <option value="sports">Sports</option>
    <option value="money">Money</option>
    <option value="lifestyle">Lifestyle</option>
    <option value="food">Food and Drink</option>
    <option value="travel">Travel</option>
    <option value="other">Other</option>
</Field>
</Form>


export default withFormik({
        mapPropsToValues: (values) => {
           return { 
               category: values.category || ''
           }
        },
} */}

export default Dashboard
