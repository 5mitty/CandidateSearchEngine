import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';


function App() {
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  console.log("GITHUB TOKEN: ", githubToken);
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
