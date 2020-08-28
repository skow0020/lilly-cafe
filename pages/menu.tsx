import React from 'react'
import MenuCard from '../components/MenuCard'
import { getMenuItemsData } from '../lib/items'
import PageTitle from '../components/PageTitle'

const Menu: React.FC = ({ beefItems, veggieItems }: any) => {
    return (
        <div className='container'>
            <PageTitle title="Menu" />
            <div className="container">
                <div className="card-deck">
                    <MenuCard type="Beef" menuCardItems={beefItems}/>
                    <MenuCard type="Vegetable" menuCardItems={veggieItems}/>
                    <MenuCard type="Chicken" menuCardItems={beefItems}/>
                </div>
            </div>
        </div>
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
