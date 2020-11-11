import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({ foodArticle }) => {
    const {name,featuredImage} = foodArticle;

    return (
        <div className='post'>
            <Link to={{
                pathname: `food/${foodArticle.name}`,
                food: foodArticle
            }}>
                    <h1 className='title'>{name}</h1>
            </Link>
            {featuredImage && <img className='featuredImage' src={featuredImage.url} alt={name} />}
        </div>
    )
}

export default Post