import { useContext, useState } from "react";
import { StoreContext } from "../store";
import styled from "styled-components";
import CustomInput from "./CustomInput";

const MessageInput = () => {
	const {
		supabase,
		username: [username],
	} = useContext(StoreContext);

	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

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
			<Form onSubmit={handleSubmit} autoComplete="off">
				<CustomInput
					value={message}
					setValue={setMessage}
					visibleLabel="[#devjamchat]"
					screenReaderLabel="Enter message"
				/>
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

export default MessageInput;
