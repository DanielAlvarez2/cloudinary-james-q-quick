import React, {useState} from 'react'

export default function Upload(){
    const [fileInputState, setFileInputState] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const handleFileInputChange = (e)=>{
        const file = e.target.files[0]
        previewFile(file)
    }
    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
            setPreviewSource(reader.result)
        }
    }
    return(
        <div>
            <h1>Upload</h1>
            <form>
                <input  type='file' 
                        name='image' 
                        onChange={handleFileInputChange} 
                        value={fileInputState} 
                        className='form-input' />
                <br/><br/>
                <button className='btn'
                        type='submit'>
                    Upload    
                </button>
            </form>
            {previewSource && (
                <img    src={previewSource} 
                        alt='Image Preview' 
                        style={{height:'300px'}} />
            )}
        </div>
    )
}