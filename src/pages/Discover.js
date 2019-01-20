import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
    state = {
        image: "",
        match: false,
        matchCount: 0
    };

    componentDidMount() {
        this.loadNextDog();
    }

    handleBtnClick = event => {
        //get the data value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        //clone this.state to the newState object
        //We'll modify this object and use it to set out component's state
        const newState = { ...this.state };

        if (btnType === "pick") {
            //set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
            newState.match = 1 === Math.floor(Math.random() *5) + 1;

            //set newState.matchCount equal to its current value or its current value + 1 depending on if the dog likes us
            newState.matchCount = newState.match ? newState.matchCount + 1 : newState.matchCount;
        }
        else {
            //if we thumbs downed the dog, we haven't matched with it
            newState.match = false;
        }

        //Replace our component's state with newState and load the next dog image
        this.setState(newState);
        this.loadNextDog();
    };

    loadNextDog = () => {
        API.getRandomDog()
        .then(res =>
            this.setState({
                image:res.data.message
            })
            ).catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1 className="text-center">Make New Friends</h1>
                <h3 className="text-center">Thumbs up on any pups you'd like to meet!</h3>
                <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
                <h1 className="text-center">
                Made friends with {this.state.matchCount} pups so far.
                </h1>
                <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
                Yay! That pup liked you!
                </Alert>
            </div>
        );
    }
}

export default Discover;