import React from "react";

const Message = ({ message }) => {
	return (
		<div>
			<strong>&lt;{message.username}&gt;</strong>: {message.content}
		</div>
	);
};

export default Message;
