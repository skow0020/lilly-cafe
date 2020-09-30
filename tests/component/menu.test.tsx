import { render, screen } from "@testing-library/react"
import Menu from "../../pages/menu"
import { testData } from "../data"

describe("Menu", () => {
  it("renders without crashing", async () => {
    render(
      <Menu beefItems={testData} veggieItems={testData} appetizers={testData} soups={testData} chickenItems={testData}/>
    )
    const listItems: HTMLElement[] = await screen.findAllByRole("link", { name: `${testData[2].item}, ${testData[2].price}` })

    expect(listItems.length).toBe(5)
    expect(listItems[2]).toHaveAttribute("href", `/menuItem/Chicken?id=${testData[2].id}`)
  })
})