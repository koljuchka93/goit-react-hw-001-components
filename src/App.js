import './App.css';
import Profile from './components/profile/profile';
import user from './components/profile/user.json'

const App = () => (
  <>
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </>
);

export default App;
