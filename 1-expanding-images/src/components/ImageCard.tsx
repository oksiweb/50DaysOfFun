import React from "react"
import { Image } from "../types/image"

interface ImageCardProps extends Image {
  onClick?: (id: number) => void
}

function ImageCard({ id, imageUrl, title, active, onClick }: ImageCardProps) {
  const handleClick = () => {
    onClick?.(id)
  }

  return (
    <div className={`panel ${active && "active"}`} data-testid="image-card" onClick={handleClick} style={{ backgroundImage: `url(${imageUrl})` }}>
      <h3>{title}</h3>
    </div>
  )
}

export default ImageCard
