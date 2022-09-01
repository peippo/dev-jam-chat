import { useState, useEffect } from "react";
import styled from "styled-components";

const Loader = () => {
	const [currentFrame, setCurrentFrame] = useState(null);

	useEffect(() => {
		const frames = ["|", "/", "-", "\\"];
		let index = 0;

		const animationInterval = setInterval(() => {
			setCurrentFrame(frames[index]);
			index = index === frames.length - 1 ? 0 : (index += 1);
		}, 50);

		return () => {
			clearInterval(animationInterval);
		};
	}, []);

	return (
		<Wrapper>
			<Spinner>{currentFrame}</Spinner> <p>l o a d i n g ...</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Spinner = styled.span`
	display: inline-flex;
	width: 1ch;
	margin-right: 1rem;
	color: var(--highlight-color-yellow);
`;

export default Loader;
