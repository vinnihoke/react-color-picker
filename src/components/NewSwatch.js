import PropTypes from 'prop-types';
import styles from '../styles/NewSwatch.module.scss';

export default function NewSwatch({ color, setColor, addColor }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		addColor(color);
	};

	return (
		<form className={styles.colorForm} onSubmit={handleSubmit}>
			<input
				type="color"
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/>
			<button className={styles.colorButton} type="submit">
				Save Color
			</button>
		</form>
	);
}

NewSwatch.propTypes = {
	color: PropTypes.string.isRequired,
	setColor: PropTypes.func.isRequired,
	addColor: PropTypes.func.isRequired,
};
