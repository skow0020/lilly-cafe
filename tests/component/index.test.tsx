import { render, screen } from "@testing-library/react"
import Home from "../../pages/index"

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />)
    expect(screen.getByRole("heading", { name: "Lilly's Asian Cafe" })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Call to Order!" })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "First slide" })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Second slide" })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Third slide" })).toBeInTheDocument()
  })
})