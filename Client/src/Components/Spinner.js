import React from 'react'
import spinner from "../../src/Img/spinner.jpg"
const Spinner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
        <img
          src={spinner}
          style={{
            width: "20px",
            margin: "auto",
            marginTop: "200px",
            display: "block",
          }}
          alt='Loading'
        />
      </div>
    )
}

export default Spinner
