import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Intersection from '../components/Intersection'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <>
                <Hero>
                    <Banner title="splendour rooms" subtitle="deluxe rooms starting at $299">
                        <Link to="/rooms" className="btn-primary">
                            our rooms
                        </Link>
                    </Banner>
                </Hero>
                <Intersection />
                <Services />
                <Intersection alt />
                <FeaturedRooms />
            </>
        )
    }
}
