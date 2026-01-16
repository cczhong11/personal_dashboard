import Axios from "axios";
import React, { useEffect, useState } from "react";
import { dest_url } from "./const";
import "./Weekly2026Page.css";

const SECTION_DATA = [
  {
    title: "1) 健康 Health（主线）",
    description: "主线",
    items: [
      {
        label: "力量训练 Strength x1（日期/时间）",
        key: "health_strength_1",
      },
      {
        label: "力量训练 Strength x2（日期/时间）",
        key: "health_strength_2",
      },
      {
        label: "走路/有氧 Walk/Cardio：__ 次（可选⭐）",
        key: "health_walk_cardio",
      },
      {
        label: "体重趋势 Weight trend（周平均）",
        key: "health_weight_trend",
      },
      {
        label: "最小版本 Minimum: 20min 力量 x2（忙也算赢！）",
        key: "health_minimum",
      },
    ],
  },
  {
    title: "2) 创作 Create（主线）",
    description: "主线",
    items: [
      {
        label: "AI 技巧 1 个 → 用到视频里（技巧 / 用在哪）",
        key: "create_ai_tip",
      },
      {
        label: "拉片 Study x2：视频1（博主 / Hook / 节奏 / 情绪）",
        key: "create_study_video_1",
      },
      {
        label: "拉片 Study x2：视频2（博主 / Hook / 节奏 / 情绪）",
        key: "create_study_video_2",
      },
      {
        label: "摄影练习 Photo 1 次（主题 / 光线 / 目标）",
        key: "create_photo_practice",
      },
      {
        label: "最小版本 Minimum: 拉片 1 个 + 拍 20 张练习照",
        key: "create_minimum",
      },
    ],
  },
  {
    title: "3) 工作 Career（主线）",
    description: "主线",
    items: [
      {
        label: "Agent 小 demo 推进 1 步（本周产出）",
        key: "career_agent_demo",
      },
      {
        label: "开源 repo 精读/笔记（repo / 借鉴点）",
        key: "career_open_source",
      },
      {
        label: "本月文章推进：写 ___ 字（Topic）",
        key: "career_article_words",
      },
      {
        label: "证据链 Evidence: 链接/截图放这",
        key: "career_evidence",
      },
    ],
  },
  {
    title: "4) 轻量加分 Bonus ⭐（不做也不内疚）",
    description: "加分",
    items: [
      {
        label: "读书 Reading：__ 分钟 / 进度",
        key: "bonus_reading",
      },
      {
        label: "日语 JP：Duolingo __ 天 + 跟读 __ 次",
        key: "bonus_jp",
      },
      {
        label: "西语 ES：Duolingo __ 天 + 跟读 __ 次",
        key: "bonus_es",
      },
      {
        label: "社交/约会 Social: 1 次高质量线下/交流（活动）",
        key: "bonus_social",
      },
    ],
  },
];

const WEEKLY_REVIEW = [
  {
    label: "本周最棒的 3 件事 Top 3 wins",
    key: "review_top3_wins",
  },
  {
    label: "本周最大阻碍 Biggest blocker",
    key: "review_biggest_blocker",
  },
  {
    label: "我学到了什么 What I learned",
    key: "review_learned",
  },
  {
    label: "下周只抓 1 个重点 Next week one focus",
    key: "review_next_week_focus",
  },
  {
    label: "时间花去哪了 Time spend summary（Top3）",
    key: "review_time_spend_top3",
  },
  {
    label: "下周要减少的 1 件事 One thing to cut",
    key: "review_one_thing_to_cut",
  },
];

const EMPTY_PLACEHOLDER = "______";

const normalizeValue = (value) => {
  if (value === undefined || value === null) {
    return "";
  }
  if (Array.isArray(value)) {
    return value.join("\n");
  }
  return String(value).trim();
};

const renderValue = (data, key) => {
  const value = normalizeValue(data[key]);
  return value.length > 0 ? value : EMPTY_PLACEHOLDER;
};

export default function Weekly2026Page(props) {
  const listName = props.list ?? "weekly_2026";
  const [weeklyData, setWeeklyData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let url = "";
      if (props.name) {
        url = `${dest_url}/json?name=${props.name}&list=${listName}`;
      } else {
        url = `${dest_url}/json?date=latest&list=${listName}`;
      }
      try {
        const response = await Axios.get(url);
        const payload = response.data?.data?.[0]?.data ?? {};
        setWeeklyData(payload);
      } catch (error) {
        console.error("Failed to load weekly plan", error);
      }
    };
    fetchData();
  }, [props.name, listName]);

  const keyword = normalizeValue(weeklyData.keyword);
  const dateLabel = normalizeValue(weeklyData.date);

  return (
    <article className="weekly-2026">
      <header className="weekly-2026__header">
        <div className="weekly-2026__title-block">
          <span className="weekly-2026__eyebrow">每周计划</span>
          <h1 className="weekly-2026__title">
            {dateLabel || "Week: ____"}
          </h1>
        </div>
        <div className="weekly-2026__keyword">
          <span className="weekly-2026__keyword-label">本周关键词 Keyword</span>
          <span className="weekly-2026__keyword-value">
            {keyword || EMPTY_PLACEHOLDER}
          </span>
        </div>
      </header>

      <section className="weekly-2026__grid">
        {SECTION_DATA.map((section) => {
          return (
            <div className="weekly-2026__section" key={section.title}>
              <div className="weekly-2026__section-header">
                <h2>{section.title}</h2>
                <span className="weekly-2026__badge">{section.description}</span>
              </div>
              <div className="weekly-2026__list">
                {section.items.map((item) => (
                  <div className="weekly-2026__list-item" key={item.key}>
                    <span className="weekly-2026__item-label">
                      {item.label}
                    </span>
                    <span className="weekly-2026__item-value">
                      {renderValue(weeklyData, item.key)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="weekly-2026__section weekly-2026__section--wide">
        <div className="weekly-2026__section-header">
          <h2>🧠 每周复盘（周日 15–30 分钟）</h2>
          <span className="weekly-2026__badge">复盘</span>
        </div>
        <div className="weekly-2026__list">
          {WEEKLY_REVIEW.map((item) => (
            <div className="weekly-2026__list-item" key={item.key}>
              <span className="weekly-2026__item-label">{item.label}</span>
              <span className="weekly-2026__item-value weekly-2026__item-value--mono">
                {renderValue(weeklyData, item.key)}
              </span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
