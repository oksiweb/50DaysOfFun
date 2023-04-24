import React from "react"
import { render, fireEvent } from "@testing-library/react"
import ImageCard from "../components/ImageCard"

const image = {
  id: 1,
  imageUrl: "https://example.com/image.jpg",
  title: "Test Image",
  active: false
}

describe("ImageCard", () => {
  it("should render correctly", () => {
    const { getByText, getByTestId } = render(<ImageCard {...image} />)
    expect(getByTestId("image-card")).toBeInTheDocument()
    expect(getByText("Test Image")).toBeInTheDocument()
    expect(getByTestId("image-card")).toMatchSnapshot()
  })

  it("should add active class on click", () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<ImageCard {...image} active={true} onClick={handleClick} />)
    const imageCard = getByTestId("image-card")
    fireEvent.click(imageCard)
    expect(handleClick).toHaveBeenCalledWith(1)
    expect(imageCard).toHaveClass("active")
    expect(getByTestId("image-card")).toMatchSnapshot()
  })

  it("should not add active class if not active", () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<ImageCard {...image} onClick={handleClick} />)
    const imageCard = getByTestId("image-card")
    fireEvent.click(imageCard)
    expect(handleClick).toHaveBeenCalledWith(1)
    expect(imageCard).not.toHaveClass("active")
    expect(getByTestId("image-card")).toMatchSnapshot()
  })
})
