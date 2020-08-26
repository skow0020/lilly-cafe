import React from 'react'
import Link from 'next/link'
import { getMenuItemsData } from '../lib/items'

const menuListStyle = {
    width: "18rem"
}

const MenuCard: React.FC = ({ allMenuItemsData }: any) => {
    return (
        <div className="col-sm">
            <div className="card" style={menuListStyle}>
                <div className="card-header" style={{ 'color': 'black' }}>
                    Beef
                            </div>
                <ul className="list-group list-group-flush">
                    {allMenuItemsData.map(({ id, price, item }) => (
                        <li className="list-group-item" key={id}>
                            <Link href="/menuItem/[id]" as={`/menuItem/${id}`}>
                                <a>{item}, {price}</a>
                            </Link>
                            <br />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export async function getStaticProps(): Promise<any> {
    const allMenuItemsData = getMenuItemsData()
    console.log(allMenuItemsData)
    return {
        props: {
            allMenuItemsData
        }
    }
}

export default MenuCard