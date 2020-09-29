
import React, { Component } from 'react'

export default class mainPage extends Component {
    render() {
        return (
            <>
            <div id = "topBanner" className = 'container-fluid'> 
                <div id ="nameWrapper"> 
                    <h1 id = "consoleError">> </h1>
                    <h1 id  = "title">   Elmer Vasquez</h1>
                </div>

            </div>

            <div id = "descriptionBanner" className = 'container-fluid'>
                    <h1>About Me</h1>
                    <div id = "paragraph" >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo luctus enim eu aliquam tincidunt facilisi eget. Purus commodo consequat malesuada et tortor sed luctus malesuada. Sollicitudin neque adipiscing suspendisse aenean nulla sem vitae. Volutpat id hendrerit neque integer felis venenatis est vitae.</p>
                    </div>
            </div>


            <div className = 'container-fluid'>
                <div id = "bottomBanner">
                
                </div>
            </div>
            </>
        )
    }
}
