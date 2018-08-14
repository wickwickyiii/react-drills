import React, {Component} from 'react';

class Array extends Component {
    constructor (){
        super();
            this.state = {
                food: ['spaghetti','ice cream','sushi','bologna','cheese','syrup','coffee','milk','eggs','steak','chips','fish','chicken','wine']
            }
            // this.ownLine = this.ownLine.bind(this)
    }

    // ownLine (arr) {
    //     for (var i=0; i<arr.length; i++){
    //         <div> {arr[i]} </div>
    //     }
    // }
    

    render (){
        let ownLine = this.state.food.map((e,i,arr) => {
            return <p> {this.state.food[i]} </p>
        })

        return (
            <div>
                {/* <h2> {JSON.stringify(this.ownLine(this.state.food))} </h2> */}
                <div> {ownLine} </div>
            </div>
        );
    }
}

export default Array;