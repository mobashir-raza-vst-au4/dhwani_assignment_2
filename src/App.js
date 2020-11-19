import './App.css';
import React, { Component } from 'react'
import Boxes from './Components/Boxes';
export default class App extends Component {
  state={
    firstBox: 0,
    secondBox: 0,
    thirdBox: -1,
    forthBox: -1,
    fifthBox: "auto"
  }
  handleFirstBox = () => {
    // console.log("firstbox")
    this.setState({
      firstBox: 1
    })
    if(this.state.firstBox === 1){
      this.setState({
        firstBox: 0
      })
    }
    if(this.state.fifthBox === -1) {
      this.setState({
        firstBox: -1
      })
    }
  }

  handleSecondBox = () => {
    // console.log("secondbox")
    this.setState({
      secondBox: 1
    })
    if(this.state.secondBox === 1){
      this.setState({
        secondBox: 0
      })
    }
    if(this.state.fifthBox === -1) {
      this.setState({
        secondBox: -1
      })
    }
  }

  handleThirdBox = ()=> {
    // console.log("thirdbox")
    this.setState({
      thirdBox: 0
    })
    if(this.state.thirdBox === 0){
      this.setState({
        thirdBox: -1
      })
    }
    if(this.state.fifthBox === -1) {
      this.setState({
        thirdBox: -2
      })
    }

  }

  handleForthBox = () => {
    // console.log("forthbox")
    this.setState({
      forthBox: 0
    })
    if(this.state.forthBox === 0){
      this.setState({
        forthBox: -1
      })
    }
    if(this.state.fifthBox === -1) {
      this.setState({
        forthBox: -2
      })
    }
  }

  handleFifthBox = () => {
    // console.log("secondbox")
    if(this.state.fifthBox === "auto"){
    this.setState({
      fifthBox: -1,
      firstBox: 0,
      secondBox: 0,
      thirdBox: -1,
      forthBox: -1
    })
  }
    if(this.state.fifthBox === -1){
      this.setState({
        fifthBox: "auto",
        firstBox: 0,
        secondBox: 0,
        thirdBox: -1,
        forthBox: -1
      })
    }
    
  }

  componentWillUpdate = () => {
    // console.log("cdu>>")
    if(this.state.firstBox === 1 && this.state.secondBox === 1 && this.state.thirdBox ===0 && this.state.forthBox ===0){
      // console.log("updating")
      this.setState({
        fifthBox: "auto"
      })
    }
  }
  
  render() {
    return (
      <div>
      <div className="firstRow">
        <Boxes onClick={() => {this.handleFirstBox()}} style={{"z-index": `${this.state.firstBox}`}} title="1" className="firstBox"/>
        <Boxes onClick={() => {this.handleSecondBox()}} style={{"z-index": `${this.state.secondBox}`}} title="2" className="secondBox"/>
      </div>
      <div className="middleRow">
        <Boxes onClick={() => {this.handleFifthBox()}} style={{"z-index": `${this.state.fifthBox}`}} title="5" className="fifthBox"/>
      </div>
      <div className="secondRow">
        <Boxes onClick={() => {this.handleThirdBox()}} style={{"z-index": `${this.state.thirdBox}`}} title="3" className="thirdBox"/>
        <Boxes onClick={() => {this.handleForthBox()}} style={{"z-index": `${this.state.forthBox}`}} title="4" className="forthBox"/>
      </div>
      </div>
    )
  }
}