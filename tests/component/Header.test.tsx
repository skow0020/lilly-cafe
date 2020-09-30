import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

describe("Header", () => {
  it("renders without crashing", async () => {
    const headerInfo = {
      name: "Fake Restaurant",
      phone: "(218) 834-4373",
      hours: "Hours: 4:00 - 7:00"
    }

    render(
    <Header
      restaurantName={headerInfo.name}
      phoneNumber={headerInfo.phone}
      hours={headerInfo.hours}
    />
    )
    expect(screen.getByRole("link", { name: headerInfo.phone })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: headerInfo.phone })).toHaveAttribute("href", `tel:+${headerInfo.phone}`)
    expect(screen.getByRole("link", { name: "Lilly's Asian Cafe" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about")
    expect(screen.getByRole("link", { name: "Menu" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Menu" })).toHaveAttribute("href", "/menu")
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact")
  })
})