import { render, screen } from "@testing-library/react"
import Footer from "../../components/Footer"

describe("Footer", () => {
  it("renders without crashing", async () => {
    render(<Footer />)
    expect(screen.getByRole("link", { name: "← Back home" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "← Back home" })).toHaveAttribute("href", "/")
  })
})