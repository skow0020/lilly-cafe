import React from "react"
import theme from "../styles/theme"

interface PageTitleProps {
    title: string
    id: string
}

const PageTitleStyle = {
    color: theme.colors.bronze,
    fontFamily: theme.fontFamily.vibes
}

const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {
    return (
        <h1 id={props.id} style={PageTitleStyle} className='pageTitle'>{props.title}</h1>
    )
}

export default PageTitle