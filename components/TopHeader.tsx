import React from "react"
import Row from "react-bootstrap/Row"
import theme from "../styles/theme"
import { FaPhoneSquareAlt } from "react-icons/fa"

interface TopHeaderProps {
    phoneNumber: string
    hours: string,
    id: string
}

const TopHeader: React.FC<TopHeaderProps> = (props: TopHeaderProps) => {

    const phoneNum = formatPhoneNumber(props.phoneNumber)

    return (
        <Row id={props.id} style={TopHeaderStyle}>
            <span className="phoneNum" style={phoneStyle}>
                <a href={`tel:+${props.phoneNumber}`} style={phonehref}>
                    <FaPhoneSquareAlt /> {phoneNum}
                </a>
            </span>
            <div className="hours" style={hoursStyle}>
                {props.hours}
            </div>
        </Row>
    )
}

const TopHeaderStyle = {
    padding: "10px",
    background: theme.colors.darkBlue
}

const phoneStyle = {
    display: "flex",
    flexBasis: 0,
    flexGrow: 1,
    paddingLeft: "15px"
}

const phonehref = {
    color: theme.colors.white
}

const hoursStyle = {
    display: "flex",
    paddingRight: "15px"
}

const formatPhoneNumber = (str) => {
    const cleaned = ("" + str).replace(/\D/g, "")
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)

    return "(" + match[1] + ") " + match[2] + "-" + match[3]
}

export default TopHeader