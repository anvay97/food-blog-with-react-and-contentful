import React from 'react'
import Book from './Book'


const Books = ({ books, bookCount }) => {
    return (
        <div className="container" style={{marginTop: '5%'}}>
            <h1 className="center">We have {bookCount} Books In Our Inventory</h1>
            {books.map((book, index) => <Book singleBook={book} key={index} />)}
        </div>
    )
}

export default Books
