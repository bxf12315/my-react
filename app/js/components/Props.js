import React from 'react';

var myStyle = {color:'red',textAlign:'center'}

class Name extends React.Component {
  render() {
    return <h1 style={myStyle}>websit: {this.props.name}</h1>;
  }
}
class Url extends React.Component {
  render() {
    return <h1>websit: {this.props.url}</h1>;
  }
}
class Nickname extends React.Component {
  render() {
    return <h1> name: {this.props.nickname}</h1>;
  }
}

function App(props) {
    return (
        <div>
            <Name name={props.name}/>
            <Url  url={props.url}/>
            <Nickname  nickname={props.nickname}/>
        </div>
    );
}

export default App