import React, { useState, useEffect } from 'react'
import api from '../utils/api';

function Dashboard() {
    return (
      <div>
        <Navbar />
        <PinnedArticles/>
       </div>
    )
}
export default Dashboard