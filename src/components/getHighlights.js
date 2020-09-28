import React, { Component } from 'react'

export class getHighlights extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             videoSources: []
        }
    }
    componentDidMount(){
        fetch("https://developers.medal.tv/v1/latest?userId=10116284&categoryId=none&limit=3",
        {   
            method: 'GET',
            headers:{
                'Authorization':'pub_v1TyZB4OI6o9R99FFvKcjfOB7IRXCXPX'
            }

        }
            )
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.contentObjects);
                    this.setState({
                        isLoaded: true,
                        videoSources: result.contentObjects
                    });
                },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                     });
                }
            )
    }


    render() {

        return (
            <div>
                <h1> Game Highlights</h1>
            {this.state.videoSources.map((source,i) => (
                <div key = {i}>
                    <div className="container" dangerouslySetInnerHTML = {{__html:source.embedIframeCode}}></div>
                </div>



            ))}
            </div>

        )
    }
}

export default getHighlights
