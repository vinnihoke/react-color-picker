import Swatch from './Swatch.js';

export default function Swatches({ swatches, removeColor }) {
	return swatches.map((color) => (
		<Swatch key={color} color={color} removeColor={removeColor} />
	));
}
