import{ Link } from 'react-router-dom';
import './App.scss';

function Home() {
  return (
    <div className="home">
        <div>
          <h1>Prova</h1>
          <div>
          <Link to='/ex1'> ex1 </Link>
          <Link to='/ex2'> ex2 </Link>
          <Link to='/ex3'> ex3 </Link>
          </div>
        </div>
    </div>
  );
}

export default Home;
