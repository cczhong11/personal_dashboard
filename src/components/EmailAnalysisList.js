import Axios from "axios";
import { Table, message, Typography, Select } from "antd";
import React, { useState, useEffect } from "react";
import { dest_url } from "./const";

const { Title } = Typography;
const { Option } = Select;

export default function EmailAnalysisList() {
  const [emailData, setEmailData] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);
  const [summaryStats, setSummaryStats] = useState({
    total: 0,
    typeCounts: {},
  });

  useEffect(() => {
    fetchFileList();
  }, []);

  useEffect(() => {
    if (selectedFile) {
      fetchEmailData();
    }
  }, [selectedFile]);

  const fetchFileList = async () => {
    setFileLoading(true);
    try {
      const response = await Axios.get(
        `https://${dest_url}/file?list=email_analysis`
      );
      const files = response.data.data.map((file) => ({
        name: file.name,
        value: file.name,
      }));
      setFileList(files);

      // 默认选择最新文件
      if (files.length > 0) {
        setSelectedFile(files[0].value);
      }
    } catch (error) {
      console.error("Error fetching file list:", error);
      message.error("Failed to load file list");
    } finally {
      setFileLoading(false);
    }
  };

  const fetchEmailData = async () => {
    setLoading(true);
    try {
      const response = await Axios.get(
        `https://${dest_url}/json?name=${selectedFile}&list=email_analysis`
      );

      setEmailData(response.data.data[0].data.result || []);
    } catch (error) {
      console.error("Error fetching email data:", error);
      message.error("Failed to load email analysis data");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (value) => {
    setSelectedFile(value);
  };

  const columns = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      render: (text) => <strong>{text.slice(0, 50)}</strong>,
    },
    {
      title: "发件人",
      dataIndex: "sender",
      key: "sender",
    },
    {
      title: "摘要",
      dataIndex: "summary",
      key: "summary",
      width: "40%",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
      render: (type) => type.toUpperCase(),
    },
    {
      title: "退订建议",
      dataIndex: "unsubscribed",
      key: "unsubscribed",
      width: "30%",
    },
  ];
  useEffect(() => {
    const total = emailData.length;
    const typeCounts = emailData.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {});
    setSummaryStats({ total, typeCounts });
  }, [emailData]);
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>邮件分析</Title>

      <div style={{ marginBottom: 16 }}>
        <Select
          value={selectedFile}
          onChange={handleFileChange}
          loading={fileLoading}
          style={{ width: 200 }}
        >
          {fileList.map((file) => (
            <Option key={file.value} value={file.value}>
              {file.name}
            </Option>
          ))}
        </Select>
      </div>
      <div style={{ marginBottom: 16 }}>
        <strong>总邮件数: </strong>
        {summaryStats.total}
        <span style={{ marginLeft: 16 }}>
          <strong>类型统计: </strong>
          {Object.entries(summaryStats.typeCounts).map(([type, count]) => (
            <span key={type} style={{ marginRight: 8 }}>
              {type}: {count}
            </span>
          ))}
        </span>
      </div>
      <Table
        columns={columns}
        dataSource={emailData}
        loading={loading}
        pagination={{ pageSize: 10 }}
        rowKey="title"
      />
    </div>
  );
}
