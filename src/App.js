import{ Link } from 'react-router-dom';
import './App.scss';

function Home() {
  return (
    <div className="home-page">
        <div className='home'>
          <h1 className='txt'>Prova 4° Bimestre</h1>
          <p className='txt1'>Matheus Caldeira</p>
          <p className='txt1'>Nauan Santos</p>
          <div className='links'>
          <Link className='exericios' to='/ex1'> Exercicio 1 </Link>
          <Link className='exericios' to='/ex2'> Exercicio 2 </Link>
          <Link className='exericios' to='/ex3'> Exercicio 3 </Link>
          </div>
        </div>
    </div>
  );
}

export default Home;
