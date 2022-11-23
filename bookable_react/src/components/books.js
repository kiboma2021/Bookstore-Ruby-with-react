import React from 'react'

function books(props) {
  return (
    <div>
        <h1>This books are from the API</h1>
        {props.books.map((book) => {
            return (
            <div key={book.id}>
                <h2>{book.title}</h2>
                <p>{book.body}</p>
            </div>
            );
        })}
    </div>
  )
}

export default books
