import React from 'react';
// import {Logger, ConsoleLogger} from 'react-console-logger';;
// const log = new ConsoleLogger();
class LifeCyclClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      
      {console.log("do constructor")};
    }
   
    componentDidMount() {
        {console.log("do componentDidMount")};
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
   
    componentWillUnmount() {
        {console.log("do componentWillUnmount")};
      clearInterval(this.timerID);
    }
   
    tick() {
        {console.log("do tick")};
      this.setState({
        date: new Date()
      });
    }
   
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>New {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default LifeCyclClock