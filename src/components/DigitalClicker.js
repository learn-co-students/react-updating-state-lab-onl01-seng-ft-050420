import React from 'react';

class DigitalClicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           timesClicked: 0
        }
        
    }
    
    goingUp = () => {
     this.setState(previousState => {
         return {
             timesClicked: previousState.timesClicked + 1
            
         }
         
     })
    }

    render() {
        //debugger // this is the digital clicker,
        //then state is the current state of it as an object so {timesClicked: 0}
        // then timesclicked is the value from the object which is 0
        //this is what gets something labeled
        return (
            <div>
            <button  id ="button" onClick= {this.goingUp}>{this.state.timesClicked}</button>

            
        </div>
        )
    }
}

export default DigitalClicker

