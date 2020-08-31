import React from 'react'

interface PageTitleProps {
    title: string
}

const PageTitleStyle = {
    color: "#c8a97e",
    fontFamily: "Great Vibes"
}

const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {
    return (
        <h1 style={PageTitleStyle} className='pageTitle'>{props.title}</h1>
    )
}

export default PageTitle