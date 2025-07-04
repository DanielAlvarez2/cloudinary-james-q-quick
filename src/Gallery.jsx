import React,{useState,useEffect} from 'react'

export default function Gallery(){
    const [imageIds,setImageIds] = useState('')
    const loadImages = async()=>{
        try{
            const res = await fetch('/api/images')
            const data = await res.json()
            console.log(data)
            setImageIds(data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        loadImages()
    },[])
    return (
        <div>
            <h1>Gallery</h1>
        </div>
    )
}