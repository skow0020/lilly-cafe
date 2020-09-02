import React from 'react'
import Link from 'next/link'

interface MenuCardProps {
    menuCardItems: Array<{ id: string, price: string, item: string }>
    type: string
    id: string
}

const menuListStyle = {
    width: "18rem"
}

const MenuCard: React.FC<MenuCardProps> = (props: MenuCardProps) => {
    return (
        <div id={props.id} className="card" style={menuListStyle}>
            <div className="card-header" style={{ 'color': 'black' }}>
                {props.type}
            </div>
            <ul className="list-group list-group-flush">
                {props.menuCardItems.map(({ id, price, item }) => (
                    <li className="list-group-item" key={id}>
                        <Link href="/menuItem/[id]" as={`/menuItem/${id}`}>
                            <a>{item}, {price}</a>
                        </Link>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuCard