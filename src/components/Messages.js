import { useContext } from "react";
import { StoreContext } from "../store";
import Message from "./Message";

const Messages = () => {
	const { isLoading, messages } = useContext(StoreContext);

	return (
		<>
			{!isLoading && (
				<div>
					{messages.map((message) => (
						<Message key={message.id} message={message} />
					))}
				</div>
			)}
		</>
	);
};

export default Messages;
