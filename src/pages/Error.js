import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default class Error extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Hero>
                <Banner title="404" subtitle="page not found" />
            </Hero>
        )
    }
}
