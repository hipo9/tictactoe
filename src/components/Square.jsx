import stl from './square.module.css';

export const Square = ({ value, handleClick }) => {
	return (
		<div className={stl.square} onClick={() => handleClick()}>
			<p>{value}</p>
		</div>
	);
};
