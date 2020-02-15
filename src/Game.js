import React, { Component } from 'react';
import {View} from 'react-native';
// import Matter from 'matter-js';
// import { GameEngine } from 'react-native-game-engine'

// const style = createStyleSheet

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            running: true
        }
        this.gameEngine = null
    }
    setUpWorld = () => {
        
    } 
    render() {
        return (
            <View style={{backgroundColor: "white", flex: 1}} ></View>
        )
    }
}

export default Game