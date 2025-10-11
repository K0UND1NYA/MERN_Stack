import React from 'react'

function HtmlForms() {
  return (
    <div>
        <form>
            <input type="email" id="id" placeholder='Enter ur email' required/>
            <input type='password' id="pass" placeholder='Enter ur password' required/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default HtmlForms