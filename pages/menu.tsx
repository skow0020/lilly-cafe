import React from "react"
import MenuCard from "../components/MenuCard"
import { getMenuItemsData } from "../lib/items"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import PageTitle from "../components/PageTitle"

const MenuStyle = {
    textAlign: "center",
    paddingBottom: "100px"
} as React.CSSProperties

const RowStyle = {
    display: "inline=block"
}

const Menu: React.FC = ({ beefItems, veggieItems, appetizers }: any) => {
    return (
        <Container style={MenuStyle}>
            <PageTitle id="menuTitle" title="Menu" />
            <Row xs={1} className="card-deck row-1" style={RowStyle}>
                <MenuCard id="card-1" type="Appetizers" menuCardItems={appetizers} />
                <MenuCard id="card-2" type="Vegetable" menuCardItems={veggieItems} />
                <MenuCard id="card-3" type="Chicken" menuCardItems={beefItems} />
            </Row>
            <br></br>
            <Row xs={1} className="card-deck row-2" style={RowStyle}>
                <MenuCard id="card-4" type="Beef" menuCardItems={beefItems} />
                <MenuCard id="card-5" type="Vegetable" menuCardItems={veggieItems} />
                <MenuCard id="card-6" type="Chicken" menuCardItems={beefItems} />
            </Row>
            <br></br>
            <Row xs={1} className="card-deck row-3" style={RowStyle}>
                <MenuCard id="card-7" type="Beef" menuCardItems={beefItems} />
                <MenuCard id="card-8" type="Vegetable" menuCardItems={veggieItems} />
                <MenuCard id="card-9" type="Chicken" menuCardItems={beefItems} />
            </Row>
        </Container>
    )
}

export async function getStaticProps(): Promise<any> {
    const beefItems = getMenuItemsData("beef")
    const veggieItems = getMenuItemsData("veggie")
    const appetizers = getMenuItemsData("Appetizers")

    return {
        props: {
            beefItems,
            veggieItems,
            appetizers
        }
    }
}

export default Menu
