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

  const getMonthGanZhi = (year, month) => {
    // 1900-01是丁丑月
    const yearOffset = year - 1900;
    const totalMonths = yearOffset * 12 + (month - 1);
    const ganIndex = (3 + totalMonths) % 10; // 丁(3)
    const zhiIndex = (1 + totalMonths) % 12; // 丑(1)
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
