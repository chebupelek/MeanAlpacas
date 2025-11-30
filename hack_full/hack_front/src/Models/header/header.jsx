import { Layout, Avatar, Space } from 'antd';
import Logo from './Logo.png'

function Header(){
    return(
        <Layout.Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#ff2424ff'}}>
            <Space direction='horizontal' size={'large'}>
                <Avatar shape="square" src={Logo} alt="Alfa" size={40}/>
                <div style={{ color: 'white', lineHeight: '1', textAlign: 'left' }}>
                    <h3 style={{ display: 'block', margin: '0' }}>Рассчет</h3>
                    <h3 style={{ display: 'block', margin: '0' }}>кредитов</h3>
                </div>
            </Space>
        </Layout.Header>
    );
}

export default Header;