import logo from './logo.svg';
import './App.css';
import User from './User'
import React, { Component } from 'react';
class App extends Component {
  constructor()
  {
    super();
    this.state={users : [{ name: "Mudassar husnain", age: 20, address: "Chak no 56-a/12-l" }, { name: "Mudassar Husnain", age: 20, address: "Chak no 56-a/12-l" }, { name: "Muzammal Jutt", age: 23, address: "Chak no 56-A/12-l" }]
}
  }
  // const [users, setState] = useState[{ name: "Mudassar husnain", age: 20, address: "Chak no 56-a/12-l" }, { name: "Mudassar Husnain", age: 20, address: "Chak no 56-a/12-l" }, { name: "Muzammal Jutt", age: 23, address: "Chak no 56-A/12-l" }])
  // console.log(users.length)
  // let len = users.length
  // console.log(len)
  Update_Users()
  {
    console.log(this.state.users)
    this.setState({users : [{ name: "Mudassar Jutt", age: 20, address: "Chak no 56-a/12-l" }, { name: "Mudassar Jutt sab", age: 20, address: "Chak no 56-a/12-l" }, { name: "Muzammal Jutt", age: 23, address: "Chak no 56-A/12-l" }]})
    console.log(this.state.users)
  }
  render()
  {
  
  return (
    <div className="App">
      {this.state.users.map((user,index) => (
        <User name={user.name} age={user.age} address={user.address} />
      ))}
      <button onClick={()=>this.Update_Users()}>Update Users</button>
    </div>
  );
}
}


export default App;
