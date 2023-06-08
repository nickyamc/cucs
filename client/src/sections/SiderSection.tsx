import React from 'react'
import type { MenuProps } from "antd";
import { Menu } from "antd";

import {
  PieChartOutlined,
  TeamOutlined,
	AppstoreOutlined,
	QrcodeOutlined,
	FundProjectionScreenOutlined,
	SettingOutlined,
	BookOutlined,
	InfoCircleOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Asistencia', '2', <BookOutlined />, [
    getItem('Registro', '2.1'),
    getItem('Historial', '2.2'),
    getItem('Verificar Asistencia', '2.3'),
  ]),
	getItem('Usuarios', '3', <TeamOutlined />),
  getItem('Especialistas', '4', <TeamOutlined />),
	getItem('Ambientes', '5', <AppstoreOutlined />),
  getItem('Generar QR', '6', <QrcodeOutlined />, [
    getItem('QR de Ambiente', '6.1'),
    getItem('QR de Asistente', '6.2'),
  ]),
	getItem('Eventos', '7', <FundProjectionScreenOutlined />, [
    getItem('Registro', '7.1'),
    getItem('Pre-Registro', '7.2'),
  ]),
	getItem('Configuraciones', '8', <SettingOutlined />),
	getItem('Ayuda', '9', <InfoCircleOutlined />),
]

import LogoUnamad from "../assets/imgs/logo_unamad.png";
import LogoUnamadText from "../assets/imgs/logo_unamad_text.png";

const SiderSection: React.FC<{collapset: boolean }> = ({collapset}) => {
	return (
		<>
			<div style={{textAlign: "center", margin: "10px 0"}}>
				<img src={collapset ? LogoUnamad : LogoUnamadText} height={collapset ? 40 : 47} />
			</div>
			<Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items}/>
		</>
	)
}

export default SiderSection;
