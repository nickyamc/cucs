import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ConfigProvider, theme } from "antd";

const App: React.FC = () => {
	return (
		<ConfigProvider
			theme={{
				algorithm: theme.defaultAlgorithm,
				token: { colorPrimary: "#ff4187" },
			}}
		>
			<RouterProvider router={router} />
		</ConfigProvider>
	);
};

export default App;
