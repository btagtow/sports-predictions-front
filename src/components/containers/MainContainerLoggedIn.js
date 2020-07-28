import React from 'react'

export default function MainContainer(props) {
    const {betting_points, regularContainer} = props
    return (
        <div>
        
            <h4>Your available betting points: {betting_points}</h4>
            {regularContainer}
            
        </div>
    )
}
