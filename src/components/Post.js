import React from 'react';
import marked from 'marked';
import parse from 'html-react-parser';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import {Link} from 'react-router-dom';

const Post = ({ foodArticle }) => {
    const {name,featuredImage,description} = foodArticle;
    // console.log(foodArticle.sys.id);
    const rawRichTextField = foodArticle.summary.json;
    let richTextSummary=  documentToHtmlString(rawRichTextField);
    let foodSummary = parse(richTextSummary);
    const postDescription = marked(description)
    return (
        <div className='post'>
            <Link to={`food/${foodArticle.sys.id}`}>
                    <h1 className='title'>{name}</h1>
            </Link>
            {featuredImage && <img className='featuredImage' src={featuredImage.url} alt={name} />}
            {/* <section dangerouslySetInnerHTML={{ __html: postDescription }} />
            <section id="rich-text-body">
                <h1>Summary : </h1> 
                {foodSummary}
            </section> */}
        </div>
    )
}

export default Post