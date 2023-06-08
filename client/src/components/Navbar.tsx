import React from "react";
import { Row, Col, Button, Avatar } from "antd";

import { MenuOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";

// eslint-disable-next-line @typescript-eslint/ban-types
const Navbar: React.FC<{ setCollapset: Function; collapset: boolean }> = ({
	setCollapset,
	collapset,
}) => {
	return (
		<>
			<Row justify="space-between">
				<Col>
					<Button
						type="ghost"
						onClick={() => setCollapset(!collapset)}
						icon={<MenuOutlined />}
					/>
				</Col>
				<Col>
					<Row align="middle" gutter={10}>
						<Col>
							<Button type="ghost" icon={<BellOutlined />} />
						</Col>
						<Col>
							<Avatar shape="square" icon={<UserOutlined />} />
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default Navbar;
