import React from 'react'
import Book from './Book'


const Books = ({ books, bookCount }) => {
    return (
        <div className="container" style={{marginTop: '5%'}}>
             {bookCount > 1 ? <h1 className="center">We have {bookCount} Books </h1>
                    : <h1 className="center">We have {bookCount} Book </h1> }
            {books.map((book, index) => <Book singleBook={book} key={index} />)}
        </div>
    )
}

export default Books
