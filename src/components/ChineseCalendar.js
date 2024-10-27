import React, { useState } from 'react';
import { Calendar, Select } from 'antd';
import LunarCalendar from 'lunar-calendar';

const Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const Animals = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];

export default function ChineseCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());

  const getYearGanZhi = (year) => {
    try {
      // Use current date to get the correct Gan-Zhi year
      const currentDate = new Date();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      
      const monthData = LunarCalendar.calendar(year, month);
      const dayData = monthData.monthData.find(d => 
        d.year === year && d.month === month && d.day === day
      );
      
      if (dayData) {
        return `${dayData.GanZhiYear}年 【${dayData.zodiac}年】`;
      }
      return '--';
    } catch (error) {
      console.error('Error calculating year Gan-Zhi:', error);
      return '--';
    }
  };

  const getMonthGanZhi = (year, month, day) => {
    try {
      const monthData = LunarCalendar.calendar(year, month);
      const dayData = monthData.monthData.find(d => 
        d.year === year && d.month === month && d.day === day
      );
      
      if (dayData) {
        return `${dayData.GanZhiMonth}月`;
      }
      return '--';
    } catch (error) {
      console.error('Error calculating month Gan-Zhi:', error);
      return '--';
    }
  };

  const getDayGanZhi = (date) => {
    try {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      
      const monthData = LunarCalendar.calendar(year, month);
      const dayData = monthData.monthData.find(d => 
        d.year === year && d.month === month && d.day === day
      );
      
      if (dayData) {
        return `${dayData.GanZhiDay}日`;
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
    
    const monthOptions = Array.from({ length: 12 }, (_, i) => ({
      value: i,
      label: `${i + 1}月`
    }));

    return (
      <div style={{ padding: '16px' }}>
        <div style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}>
          <Select
            value={value.year()}
            onChange={(newYear) => {
              const date = value.clone().year(newYear);
              onChange(date);
            }}
            options={yearOptions}
            style={{ width: 120 }}
          />
          <Select
            value={value.month()}
            onChange={(newMonth) => {
              const date = value.clone().month(newMonth);
              onChange(date);
            }}
            options={monthOptions}
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
