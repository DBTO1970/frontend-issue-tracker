import Login from '../src/Views/Login/login';
import { useSelector } from 'react-redux';

function App() {
  const {auth} = useSelector(state => state);
  return (
    <>
      {!auth.LoggedIn ? <Login /> : 
      <h1>Hello</h1>}
    </>
  );
}

export default App;
