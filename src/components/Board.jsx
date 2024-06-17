import { Square } from './Square';
import stl from './board.module.css';
import { WinnerModal } from '../screen/WinnerModal';
import { useBoardLogic } from '../hook/useboardLogic';

export const Board = () => {
	const { squares, winner, xIsNext, pressSquare, clearGame } =
		useBoardLogic();

	const handleClick = (position) => {
		pressSquare(position);
	};
	const handleRestart = () => {
		clearGame();
	};

	return (
		<>
			{winner && (
				<WinnerModal
					handleRestart={handleRestart}
					winner={winner}
					msg={
						winner == 'Empate' ? 'Empate' : 'Felicidades al ganador'
					}
				/>
			)}
			<div className={stl.container}>
				<div className={stl.board}>
					<Square
						value={squares[0]}
						handleClick={() => handleClick(0)}
						squares={squares}
					/>
					<Square
						value={squares[1]}
						handleClick={() => handleClick(1)}
						squares={squares}
					/>
					<Square
						value={squares[2]}
						handleClick={() => handleClick(2)}
					/>
					<Square
						value={squares[3]}
						handleClick={() => handleClick(3)}
					/>
					<Square
						value={squares[4]}
						handleClick={() => handleClick(4)}
					/>
					<Square
						value={squares[5]}
						handleClick={() => handleClick(5)}
					/>
					<Square
						value={squares[6]}
						handleClick={() => handleClick(6)}
					/>
					<Square
						value={squares[7]}
						handleClick={() => handleClick(7)}
					/>
					<Square
						value={squares[8]}
						handleClick={() => handleClick(8)}
					/>
				</div>

				<div className={stl.board__turnoTxt}>
					<p>Turno de: </p>

					<div style={{ display: 'flex', gap: '1rem' }}>
						<p className={`${stl.board__o} ${xIsNext && 'turn'}  `}>
							X
						</p>
						<p
							className={`${stl.board__o} ${
								!xIsNext && 'turn'
							}  `}
						>
							O
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
