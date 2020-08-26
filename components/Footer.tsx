import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <div className="footer" style={style}>
            <Link href="/">
                <a>← Back home</a>
            </Link>
        </div>
    )
}

const style = {
    backgroundColor: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
} as React.CSSProperties

export default Footer