import { Link } from 'react-router-dom';
import './App.scss';

function Home() {
  return (
    <div className="home-page">
      <div className='home'>
        <h1 className='txt'>Prova 4° Bimestre</h1>
        <p className='txt1'>Matheus Caldeira</p>
        <p className='txt1'>Nauan Santos</p>
        <p className='txt2'>Dia 07/10</p>
        <div className='links'>
          <Link className='exericios' to='/ex1'> Exercicio 1 </Link>
          <Link className='exericios' to='/ex2'> Exercicio 2 </Link>
          <Link className='exericios' to='/ex3'> Exercicio 3 </Link>
        </div>
        <p className='txt2'>Dia 11/10</p>
        <div className='links'>
          <Link className='exericios' to='/ex4'> Exercicio 4 </Link>
          <Link className='exericios' to='/ex5'> Exercicio 5 </Link>
          <Link className='exericios' to='/ex6'> Exercicio 6 </Link>
        </div>
        <p className='txt2'>Dia 14/10</p>
        <div className='links'>
          <Link className='exericios' to='/ex7'> Exercicio 7 </Link>
          <Link className='exericios' to='/ex8'> Exercicio 8 </Link>

        </div>
        <p className='txt2'>Dia 16/10</p>
        <div className='links'>
          <Link className='exericios' to='/ex9'> Exercicio 9 </Link>
          <Link className='exericios' to='/ex10'> Exercicio 10 </Link>
          <Link className='exericios' to='/ex11'> Exercicio 11 </Link>

        </div>
        <p className='txt2'>Ultimos exericios de react</p>
        <div className='links'>
          <Link className='exericios' to='/ex12'> Exercicio 12 </Link>
          <Link className='exericios' to='/ex13'> Exercicio 13 </Link>
          <Link className='exericios' to='/ex14'> Exercicio 14 </Link>
        </div>
      </div>
      </div>
      );
}

      export default Home;
