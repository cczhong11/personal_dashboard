import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import LatestWeekly from "./components/LatestWeekly";
import LatestMonthly from "./components/LatestMonthly";
import EditPage from "./components/EditPage";
import MarkdownEditPage from "./components/MarkdownEditPage";
import MarkdownPage from "./components/MarkdownPage";
import ReadList from "./components/ReadList";
import ShowPage from "./components/ShowPage";
import SignInPage from "./components/SignInPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import useState from "react";
import { Menu, Layout } from "antd";
import {
  BookOutlined,
  UserOutlined,
  AimOutlined,
  EditOutlined,
  FolderViewOutlined,
  HeartOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import ReadSummaryList from "./components/ReadSummaryList";
const { Header, Sider, Content } = Layout;
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const { SubMenu } = Menu;
function App(props) {
  const sub = [
    { name: "每周计划", json: "weekly" },
    { name: "每周工作总结", json: "weekly_work" },
    { name: "每周生活时间总结", json: "weekly_analysis" },
    { name: "每月计划", json: "monthly" },
    { name: "提醒自己", json: "reminder_list" },
    { name: "故事", json: "story" },
    { name: "笑话", json: "fun" },
    { name: "自己的想法", json: "event_and_feeling" },
  ];
  const todo_list = [
    { name: "读书计划", json: "book" },
    { name: "做饭", json: "cook" },
    { name: "链接", json: "reading_link" },
    { name: "餐厅", json: "resturant" },
    { name: "旅游", json: "tour" },
    { name: "摄影", json: "photos" },
    { name: "想做的事情", json: "play" },
  ];
  let query = useQuery();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="signin" icon={<UserOutlined />}>
            Sign In
            <Link to="/signin" />
          </Menu.Item>
          <Menu.Item key="1" icon={<UserOutlined />}>
            自己提高的点
            <Link to="/improvement" />
          </Menu.Item>
          <Menu.Item key="10" icon={<UserOutlined />}>
            原则
            <Link to="/principe" />
          </Menu.Item>
          <Menu.Item key="11" icon={<HeartOutlined />}>
            同理心
            <Link to="/empthy" />
          </Menu.Item>
          <Menu.Item key="12" icon={<SafetyCertificateOutlined />}>
            应急处理
            <Link to="/safety" />
          </Menu.Item>
          <Menu.Item key="2" icon={<AimOutlined />}>
            本周目标
            <Link to="/weekly" />
          </Menu.Item>
          <Menu.Item key="3" icon={<AimOutlined />}>
            本月目标
            <Link to="/monthly" />
          </Menu.Item>
          <Menu.Item key="4" icon={<AimOutlined />}>
            年计划
            <Link to="/year_plan" />
          </Menu.Item>
          <Menu.Item key="5" icon={<BookOutlined />}>
            读书笔记
            <Link to="/read" />
          </Menu.Item>
          <Menu.Item key="6" icon={<BookOutlined />}>
            书籍总结
            <Link to="/book_summary" />
          </Menu.Item>
          <SubMenu key="sub1" icon={<EditOutlined />} title="修改">
            {sub.map((item) => {
              const key = `${item.json}_edit`;
              return (
                <Menu.Item key={key}>
                  {item.name}
                  <Link to={`/${key}`} />
                </Menu.Item>
              );
            })}
          </SubMenu>
          <SubMenu key="sub2" icon={<FolderViewOutlined />} title="查看">
            {sub.map((item) => {
              const key = `${item.json}_view`;
              return (
                <Menu.Item key={key}>
                  {item.name}
                  <Link to={`/${key}`} />
                </Menu.Item>
              );
            })}
          </SubMenu>
          <SubMenu key="sub3" icon={<EditOutlined />} title="添加清单">
            {todo_list.map((item) => {
              const key = `${item.json}_edit`;
              return (
                <Menu.Item key={key}>
                  {item.name}
                  <Link to={`/${key}`} />
                </Menu.Item>
              );
            })}
          </SubMenu>
          <SubMenu key="sub4" icon={<FolderViewOutlined />} title="查看清单">
            {todo_list.map((item) => {
              const key = `${item.json}_view`;
              return (
                <Menu.Item key={key}>
                  {item.name}
                  <Link to={`/${key}`} />
                </Menu.Item>
              );
            })}
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 1024 }}
          >
            <Route
              exact
              path="/"
              children={<MarkdownPage name="我能做的好的地方.md" list="must" />}
            />
            <Route
              path="/improvement"
              children={<MarkdownPage name="我能做的好的地方.md" list="must" />}
            />
            <Route
              path="/safety"
              children={<MarkdownPage name="应急处理方法.md" list="must" />}
            />
            <Route
              path="/year_plan"
              children={<MarkdownPage name="2024年计划.md" list="must" />}
            />
            <Route path="/weekly" component={LatestWeekly} />
            <Route path="/monthly" component={LatestMonthly} />
            <Route path="/read" component={ReadList} />
            <Route path="/book_summary" component={ReadSummaryList} />
            {sub.map((item) => {
              const key = `/${item.json}_edit`;

              return (
                <Route
                  path={key}
                  children={
                    <EditPage list={item.json} date={query.get("date") ?? ""} />
                  }
                />
              );
            })}
            {sub.map((item) => {
              const key = `/${item.json}_view`;
              return (
                <Route path={key} children={<ShowPage list={item.json} />} />
              );
            })}
            {todo_list.map((item) => {
              const key = `/${item.json}_edit`;

              return (
                <Route
                  path={key}
                  children={
                    <EditPage list={item.json} date={query.get("date") ?? ""} />
                  }
                />
              );
            })}
            {todo_list.map((item) => {
              const key = `/${item.json}_view`;
              return (
                <Route path={key} children={<ShowPage list={item.json} />} />
              );
            })}
            <Route
              path="/markdown_edit"
              children={
                <MarkdownEditPage
                  list={query.get("list") ?? ""}
                  name={query.get("name") ?? ""}
                />
              }
            />
            <Route
              path="/markdown_show"
              children={
                <MarkdownPage
                  list={query.get("list") ?? ""}
                  name={query.get("name") ?? ""}
                />
              }
            />
            <Route
              path="/principe"
              children={<MarkdownPage name="原则.md" list="must" />}
            />
            <Route
              path="/empthy"
              children={<MarkdownPage name="同理心.md" list="must" />}
            />
            <Route path="/signin" component={SignInPage} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
