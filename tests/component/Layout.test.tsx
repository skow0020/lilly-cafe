import { render, screen } from "@testing-library/react"
import Layout from "../../components/Layout"

describe("Layout", () => {
  it("renders the Layout component with children", () => {
    const childrenText = "This is a child component"
    render(
      <Layout>
        <div>{childrenText}</div>
      </Layout>
    )

    expect(screen.getByText(childrenText)).toBeInTheDocument()
  })

  it("renders the Header component with the correct props", () => {
    render(
      <Layout>
        <div>Child Component</div>
      </Layout>
    )

    expect(screen.getByText("Lilly's Asian Cafe")).toBeInTheDocument()
    expect(screen.getByText("Hours: 12:00 - 3:00, 4:00 - 7:30")).toBeInTheDocument()
    expect(screen.getByText("(218) 834-4373")).toBeInTheDocument()
  })
})
