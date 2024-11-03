import { render, screen } from "@testing-library/react"
import NavBar from "../../components/NavBar"

describe("NavBar", () => {
  it("renders the NavBar component", () => {
    render(<NavBar />)
    expect(screen.getByRole("navigation")).toBeInTheDocument()
  })

  it("renders the Navbar.Brand component with the correct text", () => {
    render(<NavBar />)
    expect(screen.getByText("Lilly's Asian Cafe")).toBeInTheDocument()
  })

  it("renders the Nav.Link components with the correct href attributes", () => {
    render(<NavBar />)
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about")
    expect(screen.getByRole("link", { name: "Menu" })).toHaveAttribute("href", "/menu")
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact")
    expect(screen.getByRole("link", { name: /facebook/i })).toHaveAttribute("href", "https://www.facebook.com/OfficialLillysCafe")
  })
})
