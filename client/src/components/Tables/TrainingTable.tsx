import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { useSearchFilter } from "./useSearchFilter";

interface DataType {
	key: string;
	name: string;
	age: number;
	address: string;
}

const data: DataType[] = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
	},
	{
		key: "2",
		name: "Joe Black",
		age: 42,
		address: "London No. 1 Lake Park",
	},
	{
		key: "3",
		name: "Jim Green",
		age: 32,
		address: "Sydney No. 1 Lake Park",
	},
	{
		key: "4",
		name: "Jim Red",
		age: 32,
		address: "London No. 2 Lake Park",
	},
];

const TrainingTable: React.FC = () => {
	const columns: ColumnsType<DataType> = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			width: "30%",
			...useSearchFilter<DataType>("name"),
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
			width: "20%",
			...useSearchFilter<DataType>("age"),
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
			...useSearchFilter<DataType>("address"),
			sorter: (a, b) => a.address.length - b.address.length,
			sortDirections: ["descend", "ascend"],
		},
	];

	return <Table columns={columns} dataSource={data} />;
};

export default TrainingTable;
