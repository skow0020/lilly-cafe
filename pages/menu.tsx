import React from 'react'
import MenuCard from '../components/MenuCard'
import { getMenuItemsData } from '../lib/items'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const PageTitleStyle = {
    color: "#c8a97e",
    fontFamily: "Great Vibes"
}

const MenuStyle = {
    position: "relative",
    top: "100px",
    bottom: "200px"
} as React.CSSProperties

const Menu: React.FC = ({ beefItems, veggieItems }: any) => {
    return (
        <Container style={MenuStyle}>
            <Row>
                <h1 style={PageTitleStyle} className='pageTitle'>Menu</h1>
            </Row>
            <div className="card-deck">
                <MenuCard type="Beef" menuCardItems={beefItems} />
                <MenuCard type="Vegetable" menuCardItems={veggieItems} />
                <MenuCard type="Chicken" menuCardItems={beefItems} />
            </div>
            <br></br>
            <div className="card-deck">
                <MenuCard type="Beef" menuCardItems={beefItems} />
                <MenuCard type="Vegetable" menuCardItems={veggieItems} />
                <MenuCard type="Chicken" menuCardItems={beefItems} />
            </div>
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
