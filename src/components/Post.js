import React from 'react';
import marked from 'marked';
import parse from 'html-react-parser';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Post = ({ foodArticle }) => {
    const {name,featuredImage,description} = foodArticle;
    const rawRichTextField = foodArticle.summary.json;
    let richTextSummary=  documentToHtmlString(rawRichTextField);
    let foodSummary = parse(richTextSummary);
    const postDescription = marked(description)
    return (
        <div className='post'>
        <h1 className='title'>{name}</h1>
            {featuredImage && <img className='featuredImage' src={featuredImage.url} alt={name} />}
            <section dangerouslySetInnerHTML={{ __html: postDescription }} />
            <section id="rich-text-body">
                <h1>Summary : </h1> 
                {foodSummary}
            </section>
        </div>
    )
}

export default Post