import React, { useState } from 'react'

const Bookshelf = () => {

  const [something, setSomething] = useState()
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