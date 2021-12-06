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

	const inputRef = useRef(null);

	const onFocus = () => setIsFocused(true);
	const onBlur = () => setIsFocused(false);

	useEffect(() => {
		inputRef.current?.focus();
	}, [inputRef]);

	useEffect(() => {
		inputRef.current?.focus();
		inputRef.current?.setSelectionRange(value.length, value.length);
	}, [value]);

	return (
		<>
			<label htmlFor="msg-input">
				<span aria-hidden="true">{visibleLabel}</span>
				<span className="screen-reader-text">{screenReaderLabel}</span>
			</label>
			<InputWrapper showBlink={isFocused} characterCount={value.length}>
				<Input
					id="msg-input"
					value={value}
					onChange={(event) => setValue(event.target.value)}
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

	${(props) =>
		props.showBlink &&
		css`
			position: relative;

			&:before {
				content: "";
				position: absolute;
				top: 3px;
				left: calc(${(props) => props.characterCount * 1}ch + 2px);
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
