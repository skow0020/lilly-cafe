import React from 'react'
import Row from 'react-bootstrap/Row'

interface TopHeaderProps {
    phoneNumber: string
    hours: string,
    id: string
}

const TopHeader: React.FC<TopHeaderProps> = (props: TopHeaderProps) => {

    const phoneNum = formatPhoneNumber(props.phoneNumber)

    return (
        <Row id={props.id} style={TopHeaderStyle}>
            <div className="phoneNum" style={phoneStyle}>
                <a href={`tel:+${props.phoneNumber}`} style={phonehref}>
                    {phoneNum}
                </a>
            </div>
            <div className="hours" style={hoursStyle}>
                {props.hours}
            </div>
        </Row>
    )
}

const TopHeaderStyle = {
    padding: "10px"
}

const phoneStyle = {
    display: "flex",
    flexBasis: 0,
    flexGrow: 1,
    paddingLeft: "15px"
}

const phonehref = {
    color: "white"
}

const hoursStyle = {
    display: "flex",
    paddingRight: "15px"
}

const formatPhoneNumber = (str) => {
    const cleaned = ('' + str).replace(/\D/g, '');  
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
};

export default TopHeader