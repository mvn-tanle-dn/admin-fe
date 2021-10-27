import React, { useContext } from "react";
import { Card, Form, Input, Button, message } from "antd";
import { adminContext } from "../../context/auth";

export default function AdminProfile() {
  const { adminInfo, setAdminInfo } = useContext(adminContext);
  const onFinish = (values) => {
    if (values.currentPassword === adminInfo.password) {
      if (values.newPassword === values.confirmPassword) {
        message.success("Đổi mật khẩu thành công!");
      } else {
        message.error("Mật khẩu xác nhận không trùng khớp!");
      }
    } else {
      message.error("Mật khẩu hiện tại không đúng!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card title="Thông tin tài khoản" style={{ width: 1000 }}>
      <p>Role: Admin</p>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 6,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Mật khẩu hiện tại"
          name="currentPassword"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu hiện tại!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu mới!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Vui lòng xác nhận lại mật khẩu mới!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Đổi mật khẩu
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
