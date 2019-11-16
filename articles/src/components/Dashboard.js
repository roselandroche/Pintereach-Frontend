import React, { useState, useEffect } from 'react'
import PinnedArticles from './ArticleGroup'
import Navbar from './DashboardNav'
import axios from 'axios'
import api from '../utils/api';


function Dashboard() {


    const [articles, setArticles] = useState([
        {
            "id": 1,
            "title": "Pokemon electronic game",
            "summary": "Pokémon, electronic game series from Nintendo that debuted in Japan in 1995 and later became wildly popular in the United States. The series, originally produced for the company’s Game Boy line of handheld consoles, was introduced in 1998 to the United States with two titles, known to fans as Red and Blue.",
            "link": "https://www.britannica.com/topic/Pokemon-electronic-game",
            "image": "https://cdn.britannica.com/s:700x450/70/122270-004-0564DF2A.jpg",
            "user_id": 1,
            "category": "Game"
        },
        {
            "id": 2,
            "title": "Dota 2",
            "summary": "Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne",
            "link": "https://en.wikipedia.org/wiki/Dota_2",
            "image": "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/02/24144435/0_vbw4wQW_Xq2_3eOo.jpg",
            "user_id": 2,
            "category": "Game"
        }
    ])


    // useEffect(()=>{
    //     axios.get('https://lambda-bw-pintereach.herokuapp.com/api/articles/')
    //     .then(res=>{
    //         console.log(res)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // }, [])

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
