import { render, screen } from "@testing-library/react"
import Map from "../../components/Map"

describe("Map", () => {
  it("renders the Map component with the required props", () => {
    const mapProps = {
      center: { lat: 47.0254538, lng: -91.6761874 },
      zoom: 14,
      id: "mapView"
    }

    render(<Map {...mapProps} />)

    expect(screen.getByTestId("mapView")).toBeInTheDocument()
  })

  it("renders the GoogleMap component with the correct props", () => {
    const mapProps = {
      center: { lat: 47.0254538, lng: -91.6761874 },
      zoom: 14,
      id: "mapView"
    }

    render(<Map {...mapProps} />)

    const googleMap = screen.getByTestId("mapView")
    expect(googleMap).toHaveAttribute("id", mapProps.id)
    expect(googleMap).toHaveAttribute("center", JSON.stringify(mapProps.center))
    expect(googleMap).toHaveAttribute("zoom", mapProps.zoom.toString())
  })

  it("renders the Marker component with the correct position", () => {
    const mapProps = {
      center: { lat: 47.0254538, lng: -91.6761874 },
      zoom: 14,
      id: "mapView"
    }

    render(<Map {...mapProps} />)

    const marker = screen.getByTestId("marker")
    expect(marker).toHaveAttribute("position", JSON.stringify(mapProps.center))
  })
})
