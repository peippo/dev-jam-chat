import { useContext, useState } from "react";
import { StoreContext } from "../store";

const UsernamePrompt = () => {
	const {
		username: [, setUsername],
	} = useContext(StoreContext);

	const [usernameValue, setUsernameValue] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		setUsername(usernameValue);
		localStorage.setItem("username", usernameValue);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Enter your nickname:
				<input
					value={usernameValue}
					onChange={(event) => setUsernameValue(event.target.value)}
				/>
			</label>
		</form>
	);
};

export default UsernamePrompt;
