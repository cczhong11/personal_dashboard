import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import { dest_url } from "./const";
import "./Weekly2026EditPage.css";

const { TextArea } = Input;

const MAIN_SECTIONS = [
  {
    title: "1) 健康 Health（主线）",
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

const normalizeValue = (value) => {
  if (value === undefined || value === null) {
    return "";
  }
  if (Array.isArray(value)) {
    return value.join("\n");
  }
  return String(value);
};

const normalizeDateValue = (value) => {
  if (!value) {
    return "";
  }
  const match = String(value).match(/\d{4}-\d{2}/);
  if (match) {
    return match[0];
  }
  return String(value).split(".")[0];
};

export default function Weekly2026EditPage(props) {
  const history = useHistory();
  const [jsonData, setJsonData] = useState({});
  const [date, setDate] = useState(
    normalizeDateValue(props.date)
  );

  useEffect(() => {
    if (!props.date) {
      return;
    }
    const cleanedDate = normalizeDateValue(props.date);
    if (cleanedDate !== date) {
      setDate(cleanedDate);
    }
  }, [props.date, date]);

  useEffect(() => {
    if (!date) {
      return;
    }
    if (jsonData.date !== date) {
      setJsonData((prev) => ({ ...prev, date }));
    }
  }, [date, jsonData.date]);

  useEffect(() => {
    if (!props.date) {
      return;
    }
    const filename = `${props.date.split(".")[0]}.json`;
    const url = `${dest_url}/json?list=${props.list}&name=${filename}`;
    Axios.get(url).then((data) => {
      setJsonData(data.data.data[0].data);
    });
  }, [props.date, props.list]);

  const setTextInput = (text, key) => {
    setJsonData((prev) => ({
      ...prev,
      [key]: text,
    }));
  };

  const setInputDate = (text) => {
    setDate(text);
    setJsonData((prev) => ({
      ...prev,
      date: text,
    }));
  };

  const postData = () => {
    Axios.post(`${dest_url}/json?list=${props.list}`, jsonData).then(() => {
      history.push(`/${props.list}_view`);
    });
  };

  const renderField = (item, rows = 3) => {
    return (
      <div className="weekly-2026-edit__field" key={item.key}>
        <label className="weekly-2026-edit__label" htmlFor={item.key}>
          {item.label}
        </label>
        <TextArea
          id={item.key}
          rows={rows}
          value={normalizeValue(jsonData[item.key])}
          onChange={(e) => setTextInput(e.target.value, item.key)}
        />
      </div>
    );
  };

  return (
    <section className="weekly-2026-edit">
      <header className="weekly-2026-edit__header">
        <div>
          <p className="weekly-2026-edit__eyebrow">Edit weekly plan</p>
          <h1 className="weekly-2026-edit__title">每周计划编辑</h1>
        </div>
        <Button type="primary" onClick={postData}>
          保存
        </Button>
      </header>

      <div className="weekly-2026-edit__meta">
        <div className="weekly-2026-edit__field">
          <label className="weekly-2026-edit__label" htmlFor="weekly-date">
            Date
          </label>
          <Input
            id="weekly-date"
            value={date}
            onChange={(e) => setInputDate(e.target.value)}
          />
        </div>
        <div className="weekly-2026-edit__field">
          <label className="weekly-2026-edit__label" htmlFor="keyword">
            本周关键词 Keyword
          </label>
          <Input
            id="keyword"
            value={normalizeValue(jsonData.keyword)}
            onChange={(e) => setTextInput(e.target.value, "keyword")}
          />
        </div>
      </div>

      <div className="weekly-2026-edit__grid">
        {MAIN_SECTIONS.map((section) => (
          <div className="weekly-2026-edit__section" key={section.title}>
            <h2>{section.title}</h2>
            <div className="weekly-2026-edit__list">
              {section.items.map((item) => renderField(item))}
            </div>
          </div>
        ))}
      </div>

      <div className="weekly-2026-edit__section weekly-2026-edit__section--wide">
        <h2>🧠 每周复盘（周日 15–30 分钟）</h2>
        <div className="weekly-2026-edit__list">
          {WEEKLY_REVIEW.map((item) => renderField(item, 3))}
        </div>
      </div>
    </section>
  );
}
