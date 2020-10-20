import React from 'react'
import marked from 'marked'

const Post = ({ foodArticle }) => {
    const { name, featuredImage, description } = foodArticle.fields
    const postDescription = marked(description)
    return (
        <div className='post'>
            <h1 className='title'>{name}</h1>
            <h3>New Changes</h3>
            {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={name} title={name} />}
            <section dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    )
}

export default Post