import React from 'react'

const sendmail = ()=> {
    Email.send({
        // host
        // username
        // password
        // promptto
        // Form
        // subject
        // body
    }).then(
        message=>alert(message)
    )
}

const main = () => {
  return (
    <>
     <button onClick={()=> sendmail()}>send</button>
    </>
  )
}

export default main