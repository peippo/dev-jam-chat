import { createContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
	const supabase = createClient(
		process.env.REACT_APP_SUPABASE_URL,
		process.env.REACT_APP_SUPABASE_KEY
	);

	const [messages, setMessages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const fetchMessages = async () => {
		const { data, error } = await supabase.from("messages").select();
		setIsLoading(false);

		if (!error) {
			console.log(data);
			setMessages(data);
		} else {
			setErrorMessage(error.message);
			setIsError(true);
		}
	};

	useEffect(() => {
		fetchMessages();

		// FIXME:
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const store = {
		isLoading,
		error: [isError, errorMessage],
		messages,
	};

	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
