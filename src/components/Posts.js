import React from 'react'
import Post from './Post'

const Posts = ({ posts, articleCount }) => {
    return (
        
        <div className="container" style={{marginTop: '5%'}}>
            {articleCount > 1 ? <h1 className="center">We have {articleCount} Recipes </h1>
                    : <h1 className="center">We have {articleCount} Recipe </h1> }
            {posts.map((article, index) => <Post foodArticle={article} key={article.sys.id} />)}
        </div>
    )
}

export default Posts
