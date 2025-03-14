import MarkdownPage from "./MarkdownPage";
import Axios from "axios";
import { Button, Table, Select, message, Space, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { dest_url } from "./const";
import BookSummaryPage from "./BookSummaryPage";

const { Option } = Select;
const { Title } = Typography;

export default function ReadSummaryList() {
  const [bookList, setBookList] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [loading, setLoading] = useState(false);
  const [clickName, setClickName] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    fetchData();
  }, [showAll]);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch book list
      const fileResponse = await Axios.get(`https://${dest_url}/file?list=book_summary`);
      const books = fileResponse.data.data.map((item) => ({
        name: item.name,
        key: item.name,
      }));

      // Fetch metadata
      const metadataResponse = await Axios.get(`https://${dest_url}/metadata?list=book_summary`);
      const metadataData = metadataResponse.data.data || {};
      
      // Combine data
      const booksWithMetadata = books.map(book => {
        const bookMetadata = metadataData[book.name] || {};
        return {
          ...book,
          status: bookMetadata.status || 'not_begin',
          lastUpdated: bookMetadata.lastUpdated || '-'
        };
      });

      setBookList(booksWithMetadata);
      setMetadata(metadataData);
    } catch (error) {
      console.error("Error fetching data:", error);
      message.error("Failed to load book data");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (value, record) => {
    try {
      const updatedMetadata = { ...metadata };
      
      // Create or update book entry in metadata
      updatedMetadata[record.name] = {
        ...(updatedMetadata[record.name] || {}),
        status: value,
        lastUpdated: new Date().toISOString()
      };
      
      // Update state immediately for responsive UI
      setMetadata(updatedMetadata);
      
      // Update the book list
      setBookList(bookList.map(book => {
        if (book.name === record.name) {
          return {
            ...book,
            status: value,
            lastUpdated: new Date().toISOString()
          };
        }
        return book;
      }));
      
      // Send update to server
      await Axios.post(`https://${dest_url}/metadata?list=book_summary`, updatedMetadata);
      message.success("Status updated successfully");
    } catch (error) {
      console.error("Error updating status:", error);
      message.error("Failed to update status");
      // Revert changes on error
      fetchData();
    }
  };

  const columns = [
    {
      title: 'Book Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <a onClick={() => {
          setClickName(record.name);
          setShowAll(false);
        }}>
          {text}
        </a>
      ),
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => (
        <Select 
          value={status} 
          style={{ width: 120 }} 
          onChange={(value) => handleStatusChange(value, record)}
        >
          <Option value="not_begin">Not Begin</Option>
          <Option value="ongoing">Ongoing</Option>
          <Option value="read">Read</Option>
        </Select>
      ),
      filters: [
        { text: 'Not Begin', value: 'not_begin' },
        { text: 'Ongoing', value: 'ongoing' },
        { text: 'Read', value: 'read' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdated',
      key: 'lastUpdated',
      render: (text) => text !== '-' ? new Date(text).toLocaleString() : '-',
      sorter: (a, b) => {
        if (a.lastUpdated === '-') return -1;
        if (b.lastUpdated === '-') return 1;
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      },
    },
  ];

  return showAll ? (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Book Summary List</Title>
      <Table 
        columns={columns} 
        dataSource={bookList} 
        loading={loading}
        pagination={{ pageSize: 20 }}
        rowKey="name"
      />
    </div>
  ) : (
    <>
      <BookSummaryPage name={clickName} list="book_summary" />
      <Button
        type="primary"
        onClick={() => {
          setShowAll(true);
        }}
        style={{ marginTop: '20px' }}
      >
        Back to List
      </Button>
    </>
  );
}
