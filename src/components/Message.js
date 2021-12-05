import Timestamp from "./Timestamp";

const Message = ({ message }) => {
	return (
		<div>
			{message.type === "message" && (
				<>
					<Timestamp createdAt={message.created_at} />{" "}
					<strong>&lt;{message.username}&gt;</strong> {message.content}
				</>
			)}
			{message.type === "server" && (
				<>
					<Timestamp createdAt={message.created_at} /> ***{" "}
					<strong>{message.username}</strong> {message.content}
				</>
			)}
		</div>
	);
};

export default Message;
