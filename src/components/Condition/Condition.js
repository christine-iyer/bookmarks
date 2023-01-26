import React, { useState } from 'react';


export default function Condition() {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<div
			onClick={handleClick}
			style={{ backgroundColor: active ? 'pink' : 'white' }}>
			<h1>Welcome to my blog</h1>
		</div>
	);
}
