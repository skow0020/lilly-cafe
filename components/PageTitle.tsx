import React from 'react'

interface PageTitleProps {
    title: string
    id: string
}

const PageTitleStyle = {
    color: "#c8a97e",
    fontFamily: "Great Vibes"
}

const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {
    return (
        <h1 id={props.id} style={PageTitleStyle} className='pageTitle'>{props.title}</h1>
    )
}

export default PageTitle