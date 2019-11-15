import React, { useState, useEffect } from 'react'
import Navbar from './DashboardNav'
import PinnedArticles from './PinnedArticles'

function ArticleList() {
    return (
        <div>
        <Navbar />
        <PinnedArticles/>
        </div>
    )
}

export default ArticleList
