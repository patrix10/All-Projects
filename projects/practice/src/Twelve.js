import React from 'react'
import { useState } from 'react'

const Twelve = () => {
    const [file, setFile] = useState(null)

    const handleFile = (e) => {
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
    }
  return (
    <div>
      <input type="file" accept='image/*' onChange={handleFile} />
      {file && <img src={URL.createObjectURL(file)} alt='uploaded'/>}
    </div>
  )
}

export default Twelve
