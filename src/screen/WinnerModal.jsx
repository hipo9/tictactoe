import stl from './winnerModal.module.css';
export const WinnerModal = ({ winner, handleRestart, msg }) => {
	return (
		<div className={stl.modal}>
			<div className={stl.modal__container}>
				<h1 className={stl.modal__title}>
					{msg} {winner == 'Empate' ? '' : winner}
				</h1>
				<button
					className={stl.modal__btnRestart}
					onClick={handleRestart}
				>
					Jugar de nuevo
				</button>
			</div>
		</div>
	);
};
