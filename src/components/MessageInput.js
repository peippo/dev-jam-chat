import { useContext, useState } from "react";
import { StoreContext } from "../store";
import styled, { css, keyframes } from "styled-components";

const MessageInput = () => {
	const {
		supabase,
		username: [username],
	} = useContext(StoreContext);

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

	return (
		<Footer>
			[#devjamchat]
			<form onSubmit={handleSubmit}>
				<InputWrapper showBlink={!message && !isFocused}>
					<Input
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						onFocus={onFocus}
						onBlur={onBlur}
					/>
				</InputWrapper>
			</form>
		</Footer>
	);
};

const Footer = styled.footer`
	border-top: 20px solid gray;
	display: flex;
`;

const blinkAnimation = keyframes`
    50% { opacity: 0; }
`;

const InputWrapper = styled.div`
	${(props) =>
		props.showBlink &&
		css`
			position: relative;

			&:before {
				content: "";
				position: absolute;
				top: 2px;
				left: 0.5rem;
				width: 0.5rem;
				height: 1rem;
				background-color: gray;
				opacity: 1;
				animation-name: ${blinkAnimation};
				animation-duration: 1s;
				animation-iteration-count: infinite;
			}
		`}
`;

const Input = styled.input`
	width: 100%;
	margin: 0 0 0 0.5rem;
`;

export default MessageInput;
