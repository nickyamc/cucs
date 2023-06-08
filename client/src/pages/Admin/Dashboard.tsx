import React from 'react';
import { Breadcrumb } from 'antd';

const Dashboard: React.FC = () => {
	return (
		<>
			<Breadcrumb
				style={{margin: 10}}
				items={[
					{ title: <a>Dashboard</a> }
				]}
			/>
		</>
	)
}

export default Dashboard
