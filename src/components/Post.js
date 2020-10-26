import React from 'react';
import marked from 'marked';
import {Link} from 'react-router-dom';


const Post = ({ foodArticle }) => {
    const {name,featuredImage,description } = foodArticle;
    console.log(foodArticle);
    const postDescription = marked(description)
    return (
        <div className='post'>
          <Link to={{
              pathname: '/detail',
              aboutProps:{
                  name: foodArticle.name
              }
          }}><h1 className='title'>{name}</h1></Link>
            {featuredImage && <img className='featuredImage' src={featuredImage.url} alt={name} />}
            <section dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    )
}

export default Post