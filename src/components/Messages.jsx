import { useContext } from "react";
import { StoreContext } from "../store";
import styled from "styled-components";
import Message from "./Message";
import Loader from "./Loader";

const Messages = () => {
	const { isLoading, messages } = useContext(StoreContext);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<List aria-label="Chat messages">
					{messages.map((message) => (
						<Message key={message.id} message={message} />
					))}
				</List>
			)}
		</>
	);
};

const List = styled.ul`
	margin: 30px 5px 10px;
`;

export default Messages;
