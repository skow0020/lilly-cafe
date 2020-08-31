import React from 'react'
import Row from 'react-bootstrap/Row'

interface TopHeaderProps {
    phoneNumber: string
    hours: string
}

const TopHeader: React.FC<TopHeaderProps> = (props: TopHeaderProps) => {
    return (
        <Row>
            <div className="phoneNum" style={phoneStyle}>
                <span className="text">{props.phoneNumber}</span>
            </div>
            <div className="hours" style={hoursStyle}>
                {props.hours}
            </div>
        </Row>
    )
}

const phoneStyle = {
    display: "flex",
    flexBasis: 0,
    flexGrow: 1,
    paddingLeft: "15px"
}

const hoursStyle = {
    display: "flex",
    paddingRight: "15px"
}

export default TopHeader