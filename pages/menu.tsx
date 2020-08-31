import React from 'react'
import MenuCard from '../components/MenuCard'
import { getMenuItemsData } from '../lib/items'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import PageTitle from '../components/PageTitle'

const MenuStyle = {
    textAlign: "center",
    paddingBottom: "100px"
} as React.CSSProperties

const RowStyle = {
    display: "inline=block"
}

const Menu: React.FC = ({ beefItems, veggieItems }: any) => {
    return (
        <Container style={MenuStyle}>
            <PageTitle title="Menu" />
            <Row xs={1} className="card-deck" style={RowStyle}>
                <MenuCard type="Beef" menuCardItems={beefItems} />
                <MenuCard type="Vegetable" menuCardItems={veggieItems} />
                <MenuCard type="Chicken" menuCardItems={beefItems} />
            </Row>
            <br></br>
            <Row xs={1} className="card-deck" style={RowStyle}>
                <MenuCard type="Beef" menuCardItems={beefItems} />
                <MenuCard type="Vegetable" menuCardItems={veggieItems} />
                <MenuCard type="Chicken" menuCardItems={beefItems} />
            </Row>
            <br></br>
            <Row xs={1} className="card-deck" style={RowStyle}>
                <MenuCard type="Beef" menuCardItems={beefItems} />
                <MenuCard type="Vegetable" menuCardItems={veggieItems} />
                <MenuCard type="Chicken" menuCardItems={beefItems} />
            </Row>
        </Container>
    )
}

export async function getStaticProps(): Promise<any> {
    const beefItems = getMenuItemsData("beef")
    const veggieItems = getMenuItemsData("veggie")

    return {
        props: {
            beefItems,
            veggieItems
        }
    }
}

export default Menu
