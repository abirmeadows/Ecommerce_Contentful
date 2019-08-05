import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import RoomsContainer from '../components/RoomsContainer'
import { Link } from 'react-router-dom'

export default class Rooms extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <>
                <Hero hero="roomsHero">
                    <Banner title="our rooms" white>
                        <Link to="/" className="btn-primary">
                            return home
                        </Link>
                    </Banner>
                </Hero>
                <RoomsContainer />
            </>
        )
    }
}
