import { Col, Layout, Row } from 'antd';

import { Table } from '../table';
import s from './styles.module.css';
const { Header, Content, Footer } = Layout;

export const AntApp = () => {
    return (
        <Layout>
            <Header className={s.header}>Header</Header>
            <Content>
                <Row>
                    <Col xs={24} md={{ span: 16, offset: 4 }}>
                      <Table />
                    </Col>
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}