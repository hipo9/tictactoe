import { Board } from './components/Board';

export const AppTicTac = () => {
	return (
		<>
			<header className='container'>
				<h1>Tic tac toe</h1>
			</header>

			<main className='container'>
				
				<Board />
			</main>

			<footer className='footer'>
				<p>Hecho por Hipólito</p>
			</footer>
		</>
	);
};
