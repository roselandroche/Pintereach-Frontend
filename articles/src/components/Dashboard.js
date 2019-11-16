import React, { useState, useEffect } from 'react';
import Navbar from './DashboardNav';
import PinnedArticles from './PinnedArticles';
import api from '../utils/api';


function Dashboard() {
    return (
      <div>
        {/* ADD GET REQUEST TO DISPLAY ARTICLES HERE */}
        
        <Navbar />
        <PinnedArticles/>
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
