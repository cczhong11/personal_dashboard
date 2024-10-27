import React, { useState } from 'react';
import { Calendar, Select } from 'antd';
import LunarCalendar from 'lunar-calendar';

const Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const Animals = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];

export default function ChineseCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());

  const getYearGanZhi = (year) => {
    // 1900年是庚子年
    const offset = year - 1900;
    const ganIndex = (6 + offset) % 10; // 庚(6)
    const zhiIndex = (0 + offset) % 12; // 子(0)
    const animal = Animals[zhiIndex];
    return `${Gan[ganIndex]}${Zhi[zhiIndex]}年 【${animal}年】`;
  };

  // 节气的大致日期(忽略小时)
  const SOLAR_TERMS = [
    { name: '立春', month: 2, day: 4 },
    { name: '惊蛰', month: 3, day: 6 },
    { name: '清明', month: 4, day: 5 },
    { name: '立夏', month: 5, day: 6 },
    { name: '芒种', month: 6, day: 6 },
    { name: '小暑', month: 7, day: 7 },
    { name: '立秋', month: 8, day: 8 },
    { name: '白露', month: 9, day: 8 },
    { name: '寒露', month: 10, day: 8 },
    { name: '立冬', month: 11, day: 7 },
    { name: '大雪', month: 12, day: 7 },
    { name: '小寒', month: 1, day: 6 }
  ];

  const getMonthGanZhi = (year, month, day) => {
    // 确定节气月
    let solarTermMonth = month;
    const termDay = SOLAR_TERMS.find(term => term.month === month)?.day || 1;
    
    // 如果还没到该月的节气日期,应该按上个月计算
    if (day < termDay) {
      solarTermMonth = month - 1;
      if (solarTermMonth === 0) {
        solarTermMonth = 12;
        year -= 1;
      }
    }

    // 计算干支
    // 年干支对应的月干支起始索引
    const yearGanIndex = (year - 1900 + 6) % 10; // 1900年为庚
    const monthBaseGan = (yearGanIndex * 2 + 2) % 10; // 节气正月的天干
    
    const ganIndex = (monthBaseGan + (solarTermMonth - 1)) % 10;
    const zhiIndex = (solarTermMonth + 1) % 12; // 寅月为正月
    
    return `${Gan[ganIndex]}${Zhi[zhiIndex]}月`;
  };

  const getDayGanZhi = (date) => {
    try {
      const lunar = LunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
      if (lunar && lunar.lunarDay) {
        const baseDate = new Date(1900, 0, 31); // 1900-01-31 was 甲辰日
        const daysDiff = Math.floor((date - baseDate) / (24 * 60 * 60 * 1000));
        // 甲辰日对应干支序号：甲(0)辰(4)
        const ganIndex = (0 + daysDiff) % 10;
        const zhiIndex = (4 + daysDiff) % 12;
        return `${Gan[ganIndex]}${Zhi[zhiIndex]}日`;
      }
      return '--';
    } catch (error) {
      console.error('Error calculating Gan-Zhi:', error, date);
      return '--';
    }
  };

  const dateCellRender = (date) => {
    const dateObj = date.toDate();
    const dayGanZhi = getDayGanZhi(dateObj);
    return (
      <div style={{ fontSize: '12px', color: '#666' }}>
        {dayGanZhi}
      </div>
    );
  };

  const headerRender = ({ value, type, onChange, onTypeChange }) => {
    const yearGanZhi = getYearGanZhi(value.year());
    const monthGanZhi = getMonthGanZhi(value.year(), value.month() + 1, value.date());
    
    return (
      <div style={{ padding: '16px' }}>
        <div style={{ marginBottom: '8px' }}>
          <Select
            value={value.year()}
            onChange={(newYear) => {
              const date = value.clone().year(newYear);
              onChange(date);
            }}
            options={yearOptions}
            style={{ width: 120 }}
          />
        </div>
        <div style={{ color: '#666', marginBottom: '8px' }}>
          {yearGanZhi} {monthGanZhi}
        </div>
      </div>
    );
  };

  const onYearChange = (value) => {
    setYear(value);
  };

  const yearOptions = [];
  for (let i = 1900; i <= 2100; i++) {
    yearOptions.push({ value: i, label: i.toString() });
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Select
          value={year}
          onChange={onYearChange}
          options={yearOptions}
          style={{ width: 120 }}
        />
      </div>
      <Calendar
        dateCellRender={dateCellRender}
        headerRender={headerRender}
        fullscreen={true}
        onChange={(date) => console.log(date)}
      />
    </div>
  );
}
