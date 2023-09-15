import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
    return (
        <>
            <section className='Portfolio top' id='portfolio'>
                <div className='container'>
                    <div className='heading text-center '>
                        <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                        <h1>My Portfolio</h1>
                    </div>

                    <div className='content grid'>
                        {Portfolio_data.map((value, index) => {
                            return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} link={value.link} />
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio