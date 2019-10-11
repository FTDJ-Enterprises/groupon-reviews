import React from 'react';

class App extends React.Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    componentDidMount() {
        let randomProductId = Math.floor(Math.random() * 100);
        fetch(`/api/${randomProductId}/reviews/`)
        .then ((response) => response.json())
        .then((data) => console.log(data))
    }

    render() {
        return (
            <div>
                <p>Hi You</p>
            </div>
        )
    }
}

export default App;