import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, ConfigProvider, theme } from "antd";
import HeaderSection from "../../sections/HeaderSection";
import SiderSection from "../../sections/SiderSection";

const { Header, Sider, Content } = Layout;

const Admin: React.FC = () => {
	const [collapset, setCollapset] = useState(false);
	return (
		<Layout style={{ height: "100vh" }}>
			<Sider
				theme="light"
				trigger={null}
				collapsible
				collapsed={collapset}
				style={{ boxShadow: "-2px 0px 15px 1px rgba(0,0,0,0.30)" }}
			>
				<SiderSection collapset={collapset} />
			</Sider>
			<Layout>
				<ConfigProvider theme={{ algorithm: theme.compactAlgorithm }}>
					<Header
						style={{
							background: "#fff",
							boxShadow: "10px -2px 15px 1px rgba(0,0,0,0.30)",
							zIndex: 1,
							paddingInline: "20px",
						}}
					>
						<HeaderSection setCollapset={setCollapset} collapset={collapset} />
					</Header>
				</ConfigProvider>
				<Content
					style={{
						backgroundImage: "url('src/assets/imgs/pusharo.png')",
						backgroundRepeat: "repeat",
						backgroundSize: "400px",
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default Admin;
