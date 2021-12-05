import { useContext } from "react";
import { StoreContext } from "../store";
import Message from "./Message";

const Messages = () => {
	const { isLoading, messages } = useContext(StoreContext);

	return (
		<>
			{!isLoading && (
				<ul aria-label="Chat messages">
					{messages.map((message) => (
						<Message key={message.id} message={message} />
					))}
				</ul>
			)}
		</>
	);
};

export default Messages;
