import React, { useState } from 'react';
import { Calendar, Select } from 'antd';
import LunarCalendar from 'lunar-calendar';

const Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

export default function ChineseCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());

  const getGanZhi = (date) => {
    try {
      const lunar = LunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
      // Calculate day's Gan-Zhi based on lunar calendar
      if (lunar && lunar.lunarDay) {
        // Calculate the day's Gan index (1-10)
        const baseDate = new Date(1900, 0, 31); // 1900-01-31 was 甲子日
        const daysDiff = Math.floor((date - baseDate) / (24 * 60 * 60 * 1000));
        const ganIndex = daysDiff % 10;
        const zhiIndex = daysDiff % 12;
        
        return Gan[ganIndex] + Zhi[zhiIndex];
      }
      return '--';
    } catch (error) {
      console.error('Error calculating Gan-Zhi:', error, date);
      return '--';
    }
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
