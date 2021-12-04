import { useContext, useState } from "react";
import { StoreContext } from "../store";

const MessageInput = () => {
	const { supabase } = useContext(StoreContext);

	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (isSubmitting) return;

		setIsSubmitting(true);

		try {
			await supabase
				.from("messages")
				.insert({ username: "anonymous", content: message });
		} catch (error) {
			console.log("Error on submit: ", error);
		} finally {
			setMessage("");
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={message}
				onChange={(event) => setMessage(event.target.value)}
			/>
		</form>
	);
};

export default MessageInput;
