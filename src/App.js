import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowingCard from './components/FollowerCard';
import './App.css';

class App extends React.Component {
  state = {
    // user = personal profile card, followings = Youtuber I follow since I do not have followers
    user: {},
    following: [],
  };

  getUsers = () => {
    axios
      .get('https://api.github.com/users/emfresh2o')
      .then((response) => {
        console.log(response.data);
        this.setState({ user: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get('https://api.github.com/users/emfresh2o/following')
      .then((res) => {
        this.setState({ ...this.state, following: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className='container'>
        <div className='user'>
          <UserCard user={this.state.user} />
        </div>
        <header>
          <h3 style={{ paddingTop: '30%', paddingLeft: '20px' }}>
            GitHub Followings:
          </h3>
        </header>
        <div className='cards'>
          {this.state.following.map((following) => (
            <FollowingCard
              key={following.id}
              img={following.avatar_url}
              following={following.login}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
