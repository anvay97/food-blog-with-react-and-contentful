import React from 'react'
import Post from './Post'

const Posts = ({ posts, articleCount }) => {
    return (
        
        <div className="container" style={{marginTop: '5%'}}>
            {articleCount > 1 ? <p><h1 className="center">We have {articleCount} Recipes </h1></p>
                    : <p><h1 className="center">We have {articleCount} Recipe </h1></p> }
            {posts.map((article, index) => <Post foodArticle={article} key={index} />)}
        </div>
    )
}

export default Posts
