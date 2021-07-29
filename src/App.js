import React, {useRef} from 'react';
import Hello from './hello';
import InputSample from './InputSample';
import UserList from './UserList';


function App() {
  const users =[
    {
        id :1,
        username : 'velopert',
        email: 'public.velopert@gmail.com'
    },
    {
        id :2,
        username : 'tester',
        email: 'tester@example.com'
    },
    {
        id :3,
        username : 'lis',
        email : 'lis@gmail.com'
    }

    
];
  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }
  return (
    <UserList users={users}/>
  )
}

export default App;
