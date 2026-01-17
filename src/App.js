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
import ProtectedRoute from "./components/ProtectedRoute";
import EmailAnalysisList from "./components/EmailAnalysisList";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
  Redirect,
} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, Layout } from "antd";
import ChineseCalendar from "./components/ChineseCalendar";
import {
  BookOutlined,
  UserOutlined,
  AimOutlined,
  EditOutlined,
  FolderViewOutlined,
  HeartOutlined,
  SafetyCertificateOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import ReadSummaryList from "./components/ReadSummaryList";
const { Header, Sider, Content } = Layout;
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const { SubMenu } = Menu;
const lifeDetailData = {
  food: {
    title: "🍚 食物：生物基础输入",
    desc: "这不是简单的吃饭，而是你构建物理身体的“原材料”。<br><b>宏观视角：</b>劣质输入导致身体炎症与脑雾，直接降低决策核心的计算精度。你吃进去的每一口，都在定义你下周的能量基准线。",
  },
  info: {
    title: "📱 信息：意识流输入",
    desc: "由“时间”决定的二级变量。你关注什么，你就成为什么。<br><b>核心逻辑：</b>被动刷短视频是“低密度熵增输入”，深度阅读是“结构化算法优化”。信息输入决定了你决策核心的参考系。",
  },
  energy: {
    title: "⚡ 能量状态 (System Capacity)",
    desc: "系统运行的硬件限制。睡眠、运动与压力水平决定了你现在的“带宽”。<br><b>警示：</b>在低能量状态下，大脑会自动切换到“低能耗模式”，此时你无法进行长远规划，只能做出即时本能反应。",
  },
  human: {
    title: "🧠 决策核心：作为调度员的你",
    desc: "人本身不负责制造物质，人负责<b>资源的重定向</b>。<br><b>操作逻辑：</b>通过控制“时间”、“金钱”、“情感”这三个旋钮，你将输入的能量转化为产出的结果。这是你唯一拥有主权的地方。",
  },
  env: {
    title: "🌍 环境/默认选项 (Defaults)",
    desc: "潜意识的重力。如果你需要依靠“意志力”去学习，说明你的环境配置出错了。<br><b>策略：</b>修改环境参数（如远离消耗你的人、清理手机首屏），让正确的决策成为“阻力最小”的路径。",
  },
  long_term: {
    title: "🎯 长期目标：底层的 Value Function",
    desc: "这是系统的“北极星”。没有它，你的决策核心会陷入即时满足的无限循环。<br><b>本质：</b>它是用来在多个选择冲突时，提供权重判断的终极依据。它决定了你为何要放弃当下的安逸去投向长期的建设。",
  },
  time_alloc: {
    title: "🕰 时间分配：最稀缺的不可再生资源",
    desc: "你把时间给谁，就是在给谁授权去塑造你的未来。这是最直接的产出。",
  },
  money_alloc: {
    title: "💰 金钱投向：价值观的货币化体现",
    desc: "看一个人在乎什么，不要听他说了什么，看他的账单。金钱的流动路径就是你权力的延伸。",
  },
  emo_inv: {
    title: "🫂 情感投入：深层关系的能量耦合",
    desc: "情感不是虚无的，它是高质量的注意力和心理空间。错误的投入会导致系统内部长期漏电。",
  },
  experience: {
    title: "🧬 经验：历史决策的算法化",
    desc: "曾经的决策产出，经过时间沉淀后，反向成为系统状态的一部分。好的经验缩短决策路径。",
  },
  emotion: {
    title: "❤️ 情绪：瞬时反馈信号",
    desc: "它是系统对外部输入的一种快速评估，但不应直接控制决策中心。优秀的决策者观察情绪，但不被情绪驱动。",
  },
};

function LifeSection() {
  const [detailKey, setDetailKey] = useState(null);
  const [panelColor, setPanelColor] = useState("#34495e");
  const panelTimerRef = useRef(null);
  const detail = detailKey ? lifeDetailData[detailKey] : null;
  const handleSelect = (key) => {
    setDetailKey(key);
    setPanelColor("#2c3e50");
    if (panelTimerRef.current) {
      clearTimeout(panelTimerRef.current);
    }
    panelTimerRef.current = setTimeout(() => {
      setPanelColor("#34495e");
    }, 120);
  };
  useEffect(() => {
    return () => {
      if (panelTimerRef.current) {
        clearTimeout(panelTimerRef.current);
      }
    };
  }, []);
  return (
    <div className="life-system">
      <style>{`
        .life-system {
          --bg-color: #f8f9fa;
          --input-blue: #e3f2fd;
          --core-yellow: #fff9c4;
          --output-green: #e8f5e9;
          --accent-red: #ffebee;
          --border-color: #cfd8dc;
          --text-main: #2c3e50;
          font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
          color: var(--text-main);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          margin: 0;
          background-color: var(--bg-color);
          border-radius: 16px;
        }
        .life-system h1 {
          font-weight: 300;
          margin-bottom: 30px;
        }
        .life-system .container {
          display: flex;
          gap: 20px;
          max-width: 1100px;
          width: 100%;
          padding: 20px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--border-color);
        }
        .life-system .section {
          padding: 20px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          transition: all 0.3s ease;
        }
        .life-system .node {
          padding: 15px;
          background: white;
          border-radius: 12px;
          border: 2px solid transparent;
          cursor: pointer;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s, border-color 0.2s;
          position: relative;
        }
        .life-system .node:hover {
          transform: translateY(-3px);
          border-color: #90caf9;
        }
        .life-system .node h4 {
          margin: 0 0 5px 0;
          font-size: 16px;
        }
        .life-system .node p {
          margin: 0;
          font-size: 12px;
          color: #666;
        }
        .life-system .inputs {
          background-color: var(--input-blue);
          flex: 1;
        }
        .life-system .core {
          background-color: var(--core-yellow);
          flex: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .life-system .outputs {
          background-color: var(--output-green);
          flex: 1;
        }
        .life-system .decision-center {
          grid-column: span 2;
          background: #fff3e0;
          border: 2px solid #ffb74d;
          font-weight: bold;
        }
        .life-system .hidden-vars {
          margin-top: 20px;
          display: flex;
          gap: 15px;
          width: 100%;
          max-width: 1100px;
        }
        .life-system .hidden-node {
          flex: 1;
          background-color: var(--accent-red);
          padding: 15px;
          border-radius: 12px;
          text-align: center;
          cursor: pointer;
          border: 1px dashed #ef9a9a;
        }
        .life-system #detail-panel {
          margin-top: 30px;
          padding: 25px;
          max-width: 800px;
          width: 100%;
          color: white;
          border-radius: 16px;
          min-height: 100px;
          transition: background-color 0.2s ease;
        }
        .life-system #detail-title {
          margin-top: 0;
          color: #ffab91;
        }
        .life-system #detail-content {
          line-height: 1.6;
        }
        .life-system .arrow {
          text-align: center;
          align-self: center;
          color: #bdc3c7;
          font-size: 24px;
        }
        @media (max-width: 900px) {
          .life-system .container {
            flex-direction: column;
          }
          .life-system .arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
      <h1>个人系统架构模型 v1.0</h1>
      <div className="container">
        <div className="section inputs">
          <h3>📥 Inputs 输入</h3>
          <div className="node" onClick={() => handleSelect("food")}>
            <h4>🍚 食物</h4>
            <p>物理实体的生物化学输入</p>
          </div>
          <div className="node" onClick={() => handleSelect("info")}>
            <h4>📱 信息</h4>
            <p>思维意识的数据流输入</p>
          </div>
        </div>
        <div className="arrow">→</div>
        <div className="section core">
          <h3 style={{ gridColumn: "span 2", margin: 0 }}>
            🧠 System State & Core
          </h3>
          <div className="node" onClick={() => handleSelect("energy")}>
            <h4>⚡ 能量/体力</h4>
            <p>系统的CPU频率</p>
          </div>
          <div className="node" onClick={() => handleSelect("experience")}>
            <h4>🧬 经验</h4>
            <p>过往沉淀的模型算法</p>
          </div>
          <div className="node decision-center" onClick={() => handleSelect("human")}>
            Decision Core 决策核心（人）
          </div>
          <div className="node" onClick={() => handleSelect("emotion")}>
            <h4>❤️ 情绪</h4>
            <p>当前系统的电压扰动</p>
          </div>
          <div className="node" onClick={() => handleSelect("env")}>
            <h4>🌍 环境/默认项</h4>
            <p>隐形的外部摩擦力</p>
          </div>
        </div>
        <div className="arrow">→</div>
        <div className="section outputs">
          <h3>📤 Outputs 产出</h3>
          <div className="node" onClick={() => handleSelect("time_alloc")}>
            <h4>🕰 时间分配</h4>
          </div>
          <div className="node" onClick={() => handleSelect("money_alloc")}>
            <h4>💰 金钱投向</h4>
          </div>
          <div className="node" onClick={() => handleSelect("emo_inv")}>
            <h4>🫂 情感投入</h4>
          </div>
        </div>
      </div>
      <div className="hidden-vars">
        <div className="hidden-node" onClick={() => handleSelect("long_term")}>
          🎯 长期目标 / 内在价值函数 (Hidden Function)
        </div>
      </div>
      <div
        id="detail-panel"
        style={{ backgroundColor: panelColor }}
      >
        <h3 id="detail-title">
          {detail ? detail.title : "点击上方模块查看逻辑细节"}
        </h3>
        <div
          id="detail-content"
          dangerouslySetInnerHTML={{
            __html:
              detail?.desc ??
              "点击系统中的任意组件，查看它是如何影响你的人生整体运行的。",
          }}
        />
      </div>
    </div>
  );
}
function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setIsAuthenticated(authToken !== null);
  }, []);
  const sub = [
    { name: "每周计划", json: "weekly_2026" },
    { name: "每周工作总结", json: "weekly_work" },
    { name: "每周生活时间总结", json: "weekly_analysis" },
    { name: "每月计划", json: "monthly" },
    { name: "提醒自己", json: "reminder_list" },
    { name: "故事", json: "story" },
    { name: "笑话", json: "fun" },
    { name: "自己的想法", json: "event_and_feeling" },
  ];
  const todo_list = [
    { name: "视频上传清单", json: "video_upload_checklist" },
    { name: "读书计划", json: "book" },
    { name: "做饭", json: "cook" },
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
          <Menu.Item key="life" icon={<AimOutlined />}>
            人生系统模型
            <Link to="/life" />
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
          <Menu.Item key="calendar" icon={<CalendarOutlined />}>
            干支日历
            <Link to="/chinese-calendar" />
          </Menu.Item>
          <Menu.Item key="5" icon={<BookOutlined />}>
            读书笔记
            <Link to="/read" />
          </Menu.Item>
          <Menu.Item key="6" icon={<BookOutlined />}>
            书籍总结
            <Link to="/book_summary" />
          </Menu.Item>
          <Menu.Item key="7" icon={<BookOutlined />}>
            email总结
            <Link to="/email_analysis" />
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
            <ProtectedRoute
              exact
              path="/"
              component={() => (
                <MarkdownPage name="我能做的好的地方.md" list="must" />
              )}
            />
            <ProtectedRoute
              path="/improvement"
              component={() => (
                <MarkdownPage name="我能做的好的地方.md" list="must" />
              )}
            />
            <ProtectedRoute
              path="/safety"
              component={() => (
                <MarkdownPage name="应急处理方法.md" list="must" />
              )}
            />
            <ProtectedRoute
              path="/year_plan"
              component={() => (
                <MarkdownPage name="2026年计划.md" list="must" />
              )}
            />
            <ProtectedRoute path="/weekly" component={LatestWeekly} />
            <ProtectedRoute path="/monthly" component={LatestMonthly} />
            <ProtectedRoute path="/read" component={ReadList} />
            <ProtectedRoute path="/book_summary" component={ReadSummaryList} />
            <ProtectedRoute
              path="/email_analysis"
              component={EmailAnalysisList}
            />
            {sub.map((item) => {
              const key = `/${item.json}_edit`;

              return (
                <ProtectedRoute
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
                <ProtectedRoute
                  path={key}
                  children={<ShowPage list={item.json} />}
                />
              );
            })}
            {todo_list.map((item) => {
              const key = `/${item.json}_edit`;

              return (
                <ProtectedRoute
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
                <ProtectedRoute
                  path={key}
                  children={<ShowPage list={item.json} />}
                />
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
            <ProtectedRoute path="/life" component={LifeSection} />
            <ProtectedRoute
              path="/principe"
              children={<MarkdownPage name="原则.md" list="must" />}
            />
            <ProtectedRoute
              path="/empthy"
              children={<MarkdownPage name="同理心.md" list="must" />}
            />
            <Route path="/signin" component={SignInPage} />
            <Route path="/chinese-calendar" component={ChineseCalendar} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
