import React from 'react'
import PageTitle from '../components/PageTitle'

const homeContentStyle = {
    color: "#c8a97e",
    fontFamily: "Great Vibes"
}

const Home: React.FC = () => {
    return (
        <div className='home'>
            <PageTitle title="Lilly's Asian Cafe" />
            <h2 style={homeContentStyle}>Two Harbors, MN</h2>

            <h3 style={homeContentStyle}>Come get your freaking delicious food</h3>
        </div>
    )
}

export default Home
