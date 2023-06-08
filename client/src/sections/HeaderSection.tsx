import React from "react";
import { Navbar } from "../components";

const HeaderSection: React.FC<{
	// eslint-disable-next-line @typescript-eslint/ban-types
	setCollapset: Function;
	collapset: boolean;
}> = ({ setCollapset, collapset }) => {
	return (
		<>
			<Navbar setCollapset={setCollapset} collapset={collapset} />
		</>
	);
};

export default HeaderSection;
