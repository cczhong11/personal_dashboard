import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { auth_url } from './const';

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(`${auth_url}/signin`, values);
      if (response.data.success) {
        message.success('Sign in successful');
        // Here you would typically store the token in localStorage or a state management solution
        history.push('/');
      } else {
        message.error('Sign in failed');
      }
    } catch (error) {
      message.error('An error occurred. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Form
      name="signin"
      onFinish={onFinish}
      style={{ maxWidth: 300, margin: '0 auto', marginTop: 100 }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignInPage;
