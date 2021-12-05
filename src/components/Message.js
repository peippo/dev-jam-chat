import Timestamp from "./Timestamp";
import styled from "styled-components";

const Message = ({ message }) => {
	return (
		<Row aria-live="polite">
			{message.type === "message" && (
				<>
					<Timestamp createdAt={message.created_at} />{" "}
					<Nickname>&lt;{message.username}&gt;</Nickname> {message.content}
				</>
			)}
			{message.type === "server" && (
				<>
					<Timestamp createdAt={message.created_at} /> **{" "}
					<Nickname isServerMessage={true}>{message.username}</Nickname>{" "}
					{message.content}
				</>
			)}
		</Row>
	);
};

const Row = styled.li`
	display: flex;
`;

const Nickname = styled.strong`
	margin: ${(props) => (props.isServerMessage ? "0 0.5rem" : "0 0.5rem 0 0")};
`;

export default Message;
