import React from 'react'
import marked from 'marked'

const Post = ({ foodArticle }) => {
    const { name, featuredImage, description } = foodArticle.fields
    const postDescription = marked(description)
    return (
        <div className='post'>
            <h2 className='title'>{name}</h2>
            {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={name} title={name} />}
            <section dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    )
}

export default Post