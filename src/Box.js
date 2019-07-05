import React from 'react'

export default class Box extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            backgroundColor: '#000'
        }
    }

    getColor() {
        let items = ['green', 'red']
        //IMPLEMENT GET OR PUSH FROM ACTUAL ENDPOINT HERE
        return items[Math.floor(Math.random()*items.length)]
    }

    componentDidMount() {
        this.interval = setInterval(() => 

        this.setState({ 
            backgroundColor: this.getColor()
        }), 1000);
      }

    render() {
        return <div
            key={this.props.key}
            style={this.props.style}
        >
            {this.props.boxId}
            <div style={{ backgroundColor: this.state.backgroundColor, widht: '80px', height: '80px'}}>
            </div>
        </div>
    }
}