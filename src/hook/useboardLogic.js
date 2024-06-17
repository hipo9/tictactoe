import { useEffect, useState } from 'react';
import { getWinner } from '../helpers/getWinner';

export const useBoardLogic = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [winner, setWinner] = useState(null);

	const clearGame = () => {
		const newSquares = squares.slice().fill(null);
		setSquares(newSquares);
		setXIsNext(true);
		setWinner(null);
	};

	const pressSquare = (position) => {
		if (squares.every((n) => n !== null)) return;
		if (squares[position] === 'X' || squares[position] === 'O') return;
		if (winner) return;
		const newSqares = squares.slice();

		if (xIsNext) {
			newSqares[position] = 'X';
		} else {
			newSqares[position] = 'O';
		}
		setSquares([...newSqares]);
		setXIsNext(!xIsNext);
	};

	useEffect(() => {
		setWinner(getWinner(squares));
		if (squares.every((sq) => sq !== null)) setWinner('Empate');
	}, [squares, winner]);

	return { squares, xIsNext, winner, clearGame, pressSquare };
};
