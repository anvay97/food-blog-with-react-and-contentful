import React from 'react';
const Book = ({ singleBook }) => {
    const {author,bookName,bookImage,bookDescription,bookSummary } = singleBook;
    const {authorName,authorImage,authorBio} = author;
    console.log(bookSummary);

    return (
        <div className='post'>
            <h1 className='title'>{bookName}</h1>
            {bookImage && <img className='featuredImage' src={bookImage.url} alt={bookName} title={bookName} />}
             <p>{bookDescription}</p>
                <p>{bookSummary}</p>
             <div className="row">
                 <div className="col-md-6">
                    <h2>{authorName}</h2>
                    {authorImage && <img className='featuredImage' src={authorImage.url} alt={bookName} title={bookName} />}
                 </div>
                 <div className="col-md-6">
                     <p>{authorBio}</p>
                 </div>
             </div>
            
        </div>
    )
}

export default Book