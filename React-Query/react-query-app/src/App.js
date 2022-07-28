import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SuperHeroesPage } from './SuperHeroesPage/Superheroes.page';
import { HomePage } from './HomePage/Home.page.js';
import { RQSuperHeroesPage } from './RQSuperHeroesPage/RQSuperheroes.page';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'> Home </Link>
              </li>
              <li>
                <Link to="/super-heroes"> Traditional Super Heroes </Link>
              </li>
              <li>
                <Link to="/rq-super-heroes"> RQ Super Heroes </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path='/super-heroes' element={<SuperHeroesPage></SuperHeroesPage>}></Route>
            <Route exact path='/rq-super-heroes' element = { <RQSuperHeroesPage></RQSuperHeroesPage> }></Route>
            <Route exact path = '/' element={<HomePage></HomePage>}></Route>
          </Routes>
        </div>
      </Router>

      <ReactQueryDevtools initialIsOpen={false}  position='bottom-right' />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}

    </QueryClientProvider>
  );
}

export default App;
