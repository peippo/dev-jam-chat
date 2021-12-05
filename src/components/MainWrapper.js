import React from "react";
import styled from "styled-components";

const MainContainer = ({ children }) => {
	return (
		<Wrapper>
			<main>{children}</main>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	overflow-y: auto;
	position: relative;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 1.5rem;
		width: calc(100% - 20px);
		background: linear-gradient(
			to bottom,
			var(--background-color),
			var(--background-color-transparent)
		);
		z-index: 1;
	}

	&:after {
		content: "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100% - 20px);
		overflow: hidden;
		color: var(--background-color);
	}
`;

export default MainContainer;
