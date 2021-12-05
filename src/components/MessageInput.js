import { useContext, useState, useRef, useEffect } from "react";
import { StoreContext } from "../store";
import styled, { css, keyframes } from "styled-components";

const MessageInput = () => {
	const {
		supabase,
		username: [username],
	} = useContext(StoreContext);

	const inputRef = useRef(null);

	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	const onFocus = () => setIsFocused(true);
	const onBlur = () => setIsFocused(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (isSubmitting) return;
		setIsSubmitting(true);

		try {
			await supabase
				.from("messages")
				.insert({ username: username, content: message, type: "message" });
		} catch (error) {
			console.log("Error on submit: ", error);
		} finally {
			setMessage("");
			setIsSubmitting(false);
		}
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<Footer>
			<Form
				onSubmit={handleSubmit}
				onClick={() => inputRef.current.focus()}
				autocomplete="off"
				spellcheck="false"
			>
				<label htmlFor="msg-input">[#devjamchat]</label>
				<InputWrapper showBlink={isFocused} characterCount={message.length}>
					<Input
						id="msg-input"
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						onFocus={onFocus}
						onBlur={onBlur}
						ref={inputRef}
					/>
				</InputWrapper>
			</Form>
		</Footer>
	);
};

const Form = styled.form`
	display: flex;
	width: 100%;
	position: relative;
	margin-top: 20px;

	&:before {
		content: "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";
		color: var(--background-color);
		position: absolute;
		top: -20px;
		left: 0;
		width: 100%;
		height: 20px;
		background-color: var(--highlight-color-yellow);
	}
`;

const Footer = styled.footer`
	display: flex;
`;

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

export default MessageInput;
