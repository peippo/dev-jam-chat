import { useState, useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const CustomInput = ({
	value,
	setValue,
	visibleLabel,
	screenReaderLabel,
	...rest
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [caretPosition, setCaretPosition] = useState(0);

	const inputRef = useRef(null);

	const handleChange = (event) => {
		setValue(event.target.value);
		setCaretPosition(inputRef.current.selectionStart);
	};

	const handleClick = () => {
		setCaretPosition(inputRef.current.selectionStart);
	};

	const handleKeyDown = (event) => {
		if (event.key === "ArrowLeft" || event.keyCode === 37) {
			setCaretPosition(Math.max(caretPosition - 1, 0));
		} else if (event.key === "ArrowRight" || event.keyCode === 39) {
			setCaretPosition(Math.min(caretPosition + 1, value.length));
		} else if (event.key === "Enter" || event.keyCode === 13) {
			setCaretPosition(0);
		}
	};

	const onFocus = () => setIsFocused(true);
	const onBlur = () => setIsFocused(false);

	useEffect(() => {
		inputRef.current?.focus();
	}, [inputRef]);

	return (
		<>
			<label htmlFor="msg-input">
				<span aria-hidden="true">{visibleLabel}</span>
				<span className="screen-reader-text">{screenReaderLabel}</span>
			</label>
			<InputWrapper showBlink={isFocused} caretPosition={caretPosition}>
				<Input
					id="msg-input"
					value={value}
					onChange={handleChange}
					onClick={handleClick}
					onKeyDown={handleKeyDown}
					onFocus={onFocus}
					onBlur={onBlur}
					ref={inputRef}
					autoComplete="off"
					spellCheck="false"
					autoFocus
					{...rest}
				/>
			</InputWrapper>
		</>
	);
};

const blinkAnimation = keyframes`
    50% { opacity: 0; }
`;

const InputWrapper = styled.div`
	width: 100%;
	overflow: hidden;

	${(props) =>
		props.showBlink &&
		css`
			position: relative;

			&:before {
				content: "";
				position: absolute;
				top: 3px;
				left: calc(${(props) => props.caretPosition * 1}ch + 2px);
				width: 0.5rem;
				height: 1rem;
				background-color: var(--highlight-color-yellow);
				opacity: 1;
				animation-name: ${blinkAnimation};
				animation-duration: 1s;
				animation-iteration-count: infinite;
			}
		`}
`;

const Input = styled.input`
	width: 100%;
	background: transparent;
	border: 0;
	color: var(--text-color);
	font-size: inherit;
	caret-color: transparent;
	font-family: var(--font-family);
	font-variant-ligatures: none;
	margin: 0;

	&:focus {
		outline: 0;
	}
`;

export default CustomInput;
