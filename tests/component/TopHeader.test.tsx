import { render, screen } from "@testing-library/react"
import TopHeader from "../../components/TopHeader"

describe("TopHeader", () => {
  it("renders the TopHeader component with the required props", () => {
    const topHeaderProps = {
      phoneNumber: "2188344373",
      hours: "Hours: 12:00 - 3:00, 4:00 - 7:30",
      id: "topHeader"
    }

    render(<TopHeader {...topHeaderProps} />)

    expect(screen.getByText("(218) 834-4373")).toBeInTheDocument()
    expect(screen.getByText(topHeaderProps.hours)).toBeInTheDocument()
  })

  it("formats the phone number correctly", () => {
    const topHeaderProps = {
      phoneNumber: "2188344373",
      hours: "Hours: 12:00 - 3:00, 4:00 - 7:30",
      id: "topHeader"
    }

    render(<TopHeader {...topHeaderProps} />)

    expect(screen.getByText("(218) 834-4373")).toBeInTheDocument()
  })

  it("renders the hours correctly", () => {
    const topHeaderProps = {
      phoneNumber: "2188344373",
      hours: "Hours: 12:00 - 3:00, 4:00 - 7:30",
      id: "topHeader"
    }

    render(<TopHeader {...topHeaderProps} />)

    expect(screen.getByText(topHeaderProps.hours)).toBeInTheDocument()
  })
})
