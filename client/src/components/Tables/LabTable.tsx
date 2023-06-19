import React from 'react'

import { Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import { LabDTO as DataType } from '../../dto/Lab.dto';

type DataIndex = keyof DataType;

const LabTable: React.FC = () => {

	const data: DataType[] = [];

	const columns: ColumnsType<DataType> = [
		{
			title: "",
			dataIndex: "id",
			key: "id",
			width: "10%",
			// ...getColumnSearchProps("name"),
		},
		{
			title: "Nombre",
			dataIndex: "name",
			key: "name",
			width: "20%",
			// ...getColumnSearchProps("age"),
		},
		{
			title: "Código",
			dataIndex: "code",
			key: "code",
			// ...getColumnSearchProps("address"),
			// sorter: (a, b) => a.address.length - b.address.length,
			sortDirections: ["descend", "ascend"],
		},
		{
			title: "Ubicación",
			dataIndex: "location",
			key: "location",
			// ...getColumnSearchProps("address"),
		},
	];

	return <Table columns={columns} dataSource={data} />;
}

export default LabTable
