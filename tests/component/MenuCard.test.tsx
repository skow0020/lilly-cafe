import { render, screen } from "@testing-library/react"
import MenuCard from "../../components/MenuCard"
import { testData } from "../data"

describe("MenuCard", () => {
  it("renders without crashing", async () => {
    render(
      <MenuCard id="card-1" type="Appetizers" menuCardItems={testData} />
    )
    expect(screen.getByRole("link", { name: `${testData[2].item}, ${testData[2].price}` })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: `${testData[2].item}, ${testData[2].price}` })).toHaveAttribute("href", `/menuItem/Appetizers?id=${testData[2].id}`)
  })
})