import React from "react";

const Message = ({ message }) => {
	return (
		<div>
			{message.type === "message" && (
				<>
					<strong>&lt;{message.username}&gt;</strong>: {message.content}
				</>
			)}
			{message.type === "server" && (
				<>
					<strong>{message.username}</strong> {message.content}
				</>
			)}
		</div>
	);
};

export default Message;
