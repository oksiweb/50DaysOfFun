import React, { useState } from "react"
import ImageCard from "./ImageCard.tsx"
import data from "../data/images"
import { Image } from "../types/image"

function ImageCardList() {
  const [images, setImages] = useState<Image[]>(data)
  const handleClick = (id: number) => {
    setImages(prev => {
      return prev.map(image => ({
        ...image,
        active: image.id === id
      }))
    })
  }
  return (
    <div className="container">
      {images.map(({ id, title, imageUrl, active }) => (
        <ImageCard key={id} id={id} active={active} onClick={() => handleClick(id)} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  )
}

export default ImageCardList
