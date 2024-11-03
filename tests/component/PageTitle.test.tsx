import { render, screen } from "@testing-library/react"
import PageTitle from "../../components/PageTitle"

describe("PageTitle", () => {
  it("renders the PageTitle component with the required props", () => {
    const pageTitleProps = {
      title: "Test Title",
      id: "testTitle"
    }

    render(<PageTitle {...pageTitleProps} />)

    expect(screen.getByText(pageTitleProps.title)).toBeInTheDocument()
  })

  it("renders the h1 element with the correct text", () => {
    const pageTitleProps = {
      title: "Test Title",
      id: "testTitle"
    }

    render(<PageTitle {...pageTitleProps} />)

    const h1Element = screen.getByText(pageTitleProps.title)
    expect(h1Element.tagName).toBe("H1")
  })

  it("renders the h1 element with the correct style", () => {
    const pageTitleProps = {
      title: "Test Title",
      id: "testTitle"
    }

    render(<PageTitle {...pageTitleProps} />)

    const h1Element = screen.getByText(pageTitleProps.title)
    expect(h1Element).toHaveStyle({
      color: "bronze",
      fontFamily: "vibes"
    })
  })
})
