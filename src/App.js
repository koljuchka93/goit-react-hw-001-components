import React from 'react';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics'
import FriendsList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transaction/Transaction';

import user from './components/Profile/user.json';
import data from './components/Statistics/data.json'
import friends from './components/FriendList/friendlist.json'
import transaction from './components/Transaction/transactions.json'

const App = () => (
  <>
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendsList friends={friends} />
    <TransactionHistory transaction={transaction} />
  </>
);

export default App;
