import React from "react"
import MenuCard from "../components/MenuCard"
import { getMenuItemsData } from "../lib/items"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import PageTitle from "../components/PageTitle"
import { textStyle } from "../styles/theme"

const MenuStyle = {
    textAlign: "center",
} as React.CSSProperties

const RowStyle = {
    display: "inline=block"
}

interface FoodItem {
    id: string,
    item: string,
    price: string,
    description: string
}


interface MenuProps {
    beefItems: Array<FoodItem>,
    veggieItems: Array<FoodItem>,
    appetizers: Array<FoodItem>,
    soups: Array<FoodItem>,
    chickenItems: Array<FoodItem>
}

const Menu: React.FC<MenuProps> = ({ beefItems, veggieItems, appetizers, soups, chickenItems }: MenuProps) => {
    return (
        <Container style={MenuStyle}>
            <PageTitle id="menuTitle" title="Menu" />
            <p style={textStyle}>* indicates a spicy dish</p>
            <Row xs={1} className="card-deck row-1" style={RowStyle}>
                <MenuCard id="card-1" type="Appetizers" menuCardItems={appetizers} />
                <MenuCard id="card-2" type="Vegetable" menuCardItems={veggieItems} />
                <MenuCard id="card-3" type="Chicken" menuCardItems={chickenItems} />
            </Row>
            <br></br>
            <Row xs={1} className="card-deck row-2" style={RowStyle}>
                <MenuCard id="card-4" type="Beef" menuCardItems={beefItems} />
                <MenuCard id="card-5" type="Soups" menuCardItems={soups} />
            </Row>
        </Container>
    )
}

export async function getStaticProps(): Promise<any> {
    const beefItems = getMenuItemsData("Beef")
    const veggieItems = getMenuItemsData("Vegetable")
    const appetizers = getMenuItemsData("Appetizers")
    const soups = getMenuItemsData("Soups")
    const chickenItems = getMenuItemsData("Chicken")
    console.log(appetizers)

    return {
        props: {
            beefItems,
            veggieItems,
            appetizers,
            soups,
            chickenItems
        }
    }
}

export default Menu
