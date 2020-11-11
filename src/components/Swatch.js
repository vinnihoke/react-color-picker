import PropTypes from 'prop-types';
import styles from '../styles/Swatch.module.scss';

export default function Swatch({ color, removeColor }) {
	return (
		<div
			className={styles.swatch}
			style={{ backgroundColor: color }}
			onClick={() => removeColor(color)}
			onKeyDown={() => removeColor(color)}
		/>
	);
}

Swatch.propTypes = {
	color: PropTypes.string.isRequired,
	removeColor: PropTypes.func.isRequired,
};
