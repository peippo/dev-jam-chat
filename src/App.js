import { useContext } from "react";
import { StoreContext } from "./store";
import Messages from "./components/Messages";
import MessageInput from "./components/MessageInput";
import UsernamePrompt from "./components/UsernamePrompt";

function App() {
	const {
		username: [username],
	} = useContext(StoreContext);

	return (
		<div className="App">
			{username ? (
				<>
					<Messages />
					<MessageInput />
				</>
			) : (
				<UsernamePrompt />
			)}
		</div>
	);
}

export default App;
