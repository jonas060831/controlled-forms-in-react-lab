import React, { useState } from 'react'

const Bookshelf = () => {

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title : '',
    author: ''
  })

  const handleInputChange = (event) => {
    //coz even without the form yet we know that
    //event will eventually have an input with some name hence we can
    //call event.target.name which is equivalent to some input with a name
    // and its value event.target.value also equates to input with value property

    const newBook = { [event.target.name]: event.target.value }

    setNewBook(newBook)

  }

  const handleSubmit = (event) => {
    //This function manages the submission of the form,
    //adding a new book to the list and resetting the input fields.

    //prevent reload
    event.preventDefault()

    //submit the form
    const updateBooks = [...books, newBook]

    //then reset ui
    setNewBook({ title: '', author: ''})
  }
      
  return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            {/* Form will go here */}
        </div>
        <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>
  )
}

export default Bookshelf