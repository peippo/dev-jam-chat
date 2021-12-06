import { useState, useEffect, useRef } from "react";
import { StoreContext } from "../store";
import styled from "styled-components";
import { useContext } from "react";

const MainContainer = ({ children }) => {
	const { messages, fetchOlderMessages } = useContext(StoreContext);
	const wrapperRef = useRef(null);
	const [scrollPosition, setScrollPosition] = useState("bottom");
	const allMessagesLoaded = messages.some((message) => message.id === 0);

	const handleScroll = (event) => {
		const element = event.currentTarget;

		if (element.scrollHeight - element.clientHeight === element.scrollTop) {
			setScrollPosition("bottom");
		} else if (element.scrollTop === 0) {
			setScrollPosition("top");
		} else {
			setScrollPosition(element.scrollTop);
		}
	};

	useEffect(() => {
		if (scrollPosition === "bottom") {
			wrapperRef.current.scrollTo({
				top: wrapperRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	}, [scrollPosition, messages]);

	return (
		<Wrapper onScroll={handleScroll} ref={wrapperRef}>
			{children}

			{!allMessagesLoaded && (
				<LoadMoreButton
					isVisible={scrollPosition === "top"}
					onClick={() => fetchOlderMessages()}
				>
					load older messages
				</LoadMoreButton>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.main`
	display: flex;
	flex: 1;
	overflow-y: auto;
	position: relative;
`;

const LoadMoreButton = styled.button`
	font-family: var(--font-family);
	font-size: inherit;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
	opacity: ${(props) => (props.isVisible ? "1" : "0")};
	transition: opacity 1s;
	font-size: inherit;
	margin-left: 1rem;
	background: none;
	border: 0;
	padding: 0;
	white-space: nowrap;
	color: var(--highlight-color-yellow);
	border-bottom: 2px solid var(--highlight-color-yellow);

	&:before {
		content: "[░ ";
	}

	&:after {
		content: " ░]";
	}

	&:hover {
		cursor: pointer;
		border-bottom: 1px solid var(--highlight-color-yellow);
		color: var(--highlight-color-cyan);
	}
`;

export default MainContainer;
