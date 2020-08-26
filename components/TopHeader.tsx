import React from 'react'

interface TopHeaderProps {
    phoneNumber: string
    hours: string
}

const TopHeader: React.FC<TopHeaderProps> = (props: TopHeaderProps) => {
    return (
        <div className="row">
            <div className="phoneNum" style={phoneStyle}>
                <span className="text">{props.phoneNumber}</span>
            </div>
            <div className="hours" style={hoursStyle}>
                {props.hours}
            </div>
        </div>
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