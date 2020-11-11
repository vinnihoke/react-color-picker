import { useState, useEffect } from 'react';
import Swatches from './components/Swatches';
import NewSwatch from './components/NewSwatch';

export default function App() {
	const [color, setColor] = useState('#ffffff');
	const [swatches, setSwatches] = useState([]);

	const addColor = (colorToAdd) => {
		if (!swatches.includes(colorToAdd))
			setSwatches([...swatches, colorToAdd]);
		else alert('Color already added, try another.');
	};

	const removeColor = (colorToRemove) => {
		setSwatches(swatches.filter((__color) => __color !== colorToRemove));
		console.log('removed');
	};

	useEffect(() => {});

	return (
		<main className="App">
			<Swatches swatches={swatches} removeColor={removeColor} />
			<NewSwatch setColor={setColor} addColor={addColor} color={color} />
		</main>
	);
}
