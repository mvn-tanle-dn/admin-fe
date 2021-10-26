import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Space, message } from "antd";
import { adminContext } from "../../context/auth";
import { useHistory } from "react-router";

export default function Login() {
  const { adminInfo, setAdminInfo } = useContext(adminContext);

  const history = useHistory();

  const onLogin = (values) => {
    if (
      values.username.trim() === adminInfo.username &&
      values.password === adminInfo.password
    ) {
      setAdminInfo({
        ...adminInfo,
        isLoggin: true,
      });
      localStorage.setItem("isLoggin", true);
      message.success("Đăng nhập thành công !!!");
      history.replace("/admin");
    } else {
      message.error("Đăng nhập thất bại");
    }
  };

  return (
    <Space
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#2193b0",
      }}
      direction="vertical"
      align="center"
    >
      <Form
        name="basic"
        direction="vertical"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: false,
        }}
        style={{
          backgroundColor: "white",
          marginTop: 150,
          padding: 20,
          boxShadow: "0 0 5px 1px #eee",
          borderRadius: 20,
        }}
        onFinish={onLogin}
        autoComplete="off"
      >
        <Form.Item
          label="Tài Khoản"
          name="username"
          rules={[
            {
              type: "email",
              message: "Đây không phải là E-mail!",
            },
            {
              required: true,
              message: "Vui lòng nhập tên tài khoản!",
            },
          ]}
          style={{
            width: 400,
            paddingTop: 33,
            paddingRight: 46,
          }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật Khẩu"
          name="password"
          style={{
            marginTop: 10,
            paddingRight: 46,
          }}
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 6,
          }}
        >
          <Button
            onSubmit={(e) => e.preventDefault()}
            type="primary"
            htmlType="submit"
            style={{
              marginTop: 10,
              borderRadius: 5,
            }}
          >
            Đăng Nhập{" "}
          </Button>{" "}
        </Form.Item>{" "}
      </Form>{" "}
    </Space>
  );
}
