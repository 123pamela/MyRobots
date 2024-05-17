import { useState } from "react"
import Card from "./Card"

function RobotsList({ robots }){
    const renderRobot = robots.map((robots) => {
        
        return <Card  key={robots.id} name={robots.name} email={robots.email}></Card>
    })

    return(
        <div className="container ">
            <div className="columns is-multiline">
                {renderRobot} 
            </div>
        </div>
    )
}

export default RobotsList