import React from 'react'
import Layout from '../../components/layout/Layout'
import Slider from '../../components/slider/Slider'
import About from '../../components/about/About'
import Team from '../../components/team/Team'
import ContactUs from '../../components/contactUs/ContactUs'

function HomePage() {
    return (
        <Layout>
            <Slider />
            <About />
            <Team />
            <ContactUs />
        </Layout>
    )
}

export default HomePage