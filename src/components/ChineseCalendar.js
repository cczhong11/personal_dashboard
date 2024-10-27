import React, { useState } from 'react';
import { Calendar, Select } from 'antd';
import LunarCalendar from 'lunar-calendar';

const Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

export default function ChineseCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());

  const getGanZhi = (date) => {
    const lunar = LunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
    const dayGanIndex = (lunar.GanIndex) % 10;
    const dayZhiIndex = (lunar.ZhiIndex) % 12;
    return Gan[dayGanIndex] + Zhi[dayZhiIndex];
  };

  const dateCellRender = (date) => {
    const ganZhi = getGanZhi(date.toDate());
    return (
      <div style={{ fontSize: '12px', color: '#666' }}>
        {ganZhi}
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
        fullscreen={true}
        onChange={(date) => console.log(date)}
      />
    </div>
  );
}
