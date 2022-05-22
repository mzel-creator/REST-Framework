import React from 'react';
import './App.css';
import UserList from './components/User.js'
import axios from 'axios'
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/user/')
      .then(response => {
        const users = response.data
          this.setState(
          {
            'users': users
          }
        )
      }).catch(error => console.log(error))
  }
  
  // componentDidMount() {
  //   const users = [
  //     {
  //       'first_name': 'Фёдор',
  //       'last_name': 'Достоевский',
  //       'birthday_year': 1821
  //     },
  //     {
  //       'first_name': 'Александр',
  //       'last_name': 'Грин',
  //       'birthday_year': 1880
  //     },
  //   ]
  //   this.setState(
  //     {
  //       'users': users
  //     }
  //   )
  // }
    
  render () {
    return (
      <div>
        <Header />
        <UserList users={this.state.users} />
        <Footer />
      </div>
    )
  }
}

export default App;
