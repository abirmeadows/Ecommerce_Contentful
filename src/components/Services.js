import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Have as many cocktails as you want for no cost whatsoever!'
            },
            {
                icon: <FaHiking />,
                title: 'endless hiking',
                info: 'All hiking facilities provided with your package.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttle vans',
                info: 'Go for site viewing with your large family.'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: 'Strong beer to get you all in the mood for the day.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
