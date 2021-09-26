import React from 'react'
import "./Card.css"

function Card({ title, description,imgSrc }) {
    return (
        <div>
            <div class="card-deck yeasin" > 
                <div class="card img-fluid" style={{ background: `url(${imgSrc})`}}>
                    {/* <img class="card-img-top" src={imgSrc} alt="Card image cap"/> */}
                    <div class="card-body">
                        <h5 class=" card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
