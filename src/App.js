import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css"
import Improvement from './components/Improvement';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import useState from 'react';
import {  Menu,Layout } from 'antd';
import {  BookOutlined, UserOutlined, AimOutlined,EditOutlined,FolderViewOutlined  } from '@ant-design/icons';
const { Header, Sider, Content} = Layout;

const { SubMenu } = Menu;
function App() {
    
  return (
    <Router>
    <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          自己提高的点
          <Link to="/improvement" />
        </Menu.Item>
        <Menu.Item key="2" icon={<AimOutlined />}>
          本周目标
          <Link to="/weekly" />
        </Menu.Item>
        <Menu.Item key="3" icon={<AimOutlined />}>
            本月目标
            <Link to="/monthly" />
        </Menu.Item>
        <Menu.Item key="4" icon={<BookOutlined />}>
          读书
          <Link to="/read" />
        </Menu.Item>
        <SubMenu key="sub1" icon={<EditOutlined />} title="修改">
            <Menu.Item key="weekly_edit">每周计划<Link to="/weekly_edit" /></Menu.Item>
            <Menu.Item key="month_edit">每月计划<Link to="/monthly_edit" /></Menu.Item>
            <Menu.Item key="friend">朋友<Link to="/friend_edit" /></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<FolderViewOutlined />} title="查看">
            <Menu.Item key="weekly_view">每周计划<Link to="/weekly_view" /></Menu.Item>
            <Menu.Item key="month_view">每月计划<Link to="/monthly_view" /></Menu.Item>
            <Menu.Item key="friend">朋友<Link to="/friend_view" /></Menu.Item>
          </SubMenu>
        
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 1024 }}>
        <Route exact path="/" component={Improvement} />
            <Route path="/improvement" component={Improvement} />
        </div>
      </Content>
   
    </Layout>
  </Layout>
  </Router>
  );
}

export default App;
