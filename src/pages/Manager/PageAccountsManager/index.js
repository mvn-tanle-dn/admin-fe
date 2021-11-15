import React, { useState } from "react";
import {
  Table,
  Space,
  Popconfirm,
  message,
  Tag,
  Button,
  Image,
  Modal,
  Form,
  Select,
  Input,
} from "antd";
import AddIcon from "../../../assets/img/add-account-2.png";

export default function PageAccountsManager() {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      username: "teacher_1",
      role: "Giảng viên",
    },
    {
      key: "2",
      username: "student_1",
      role: "Sinh viên",
    },
    {
      key: "3",
      username: "student_2",
      role: "Sinh viên",
    },
    {
      key: "4",
      username: "teacher_2",
      role: "Giảng viên",
    },
    {
      key: "5",
      username: "teacher_3",
      role: "Giảng viên",
    },
    {
      key: "6",
      username: "student_3",
      role: "Sinh viên",
    },
    {
      key: "7",
      username: "student_4",
      role: "Sinh viên",
    },
    {
      key: "8",
      username: "teacher_4",
      role: "Giảng viên",
    },
  ]);

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Đối tượng",
      dataIndex: "role",
      filters: [
        {
          text: "Giảng Viên",
          value: "Giảng viên",
        },
        {
          text: "Sinh Viên",
          value: "Sinh viên",
        },
      ],
      key: "role",
      render: (role) => {
        let color;
        if (role === "Giảng viên") {
          color = "volcano";
        } else {
          color = "geekblue";
        }
        return <Tag color={color}>{role}</Tag>;
      },
      onFilter: (value, record) => record.role.indexOf(value) === 0,
    },
    {
      key: "action",
      render: (_, record) => {
        const { key, username } = record;
        return (
          <Space size="middle">
            <Popconfirm
              title={`Bạn có chắc chắn muốn reset tài khoản ${username} không?`}
              onConfirm={() => resetConfirm(username)}
              okText="Đồng ý"
              cancelText="Huỷ"
            >
              <p style={{ color: "#40a9ff", cursor: "pointer" }}>Reset</p>
            </Popconfirm>
            <Popconfirm
              title={`Bạn có chắc chắn muốn xoá tài khoản ${username} không?`}
              onConfirm={() => deleteConfirm(key)}
              okText="Đồng ý"
              cancelText="Huỷ"
            >
              <p style={{ color: "#ff4d4f", cursor: "pointer" }}>Xoá</p>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const [form] = Form.useForm();

  const [role, setRole] = useState("");

  const handleSelected = (value) => {
    setRole(value);
  };

  const addAccount = () => {
    let username = form.getFieldValue("username");
    let password = form.getFieldValue("password");
    if (role !== null && role !== "") {
      setDataSource([
        ...dataSource,
        {
          key: dataSource.length + 1,
          username: username,
          role: role,
          password: password,
        },
      ]);
      setIsModalVisible(false);
      setRole(null);
      message.success("Thêm tài khoản thành công");
    } else {
      message.warning("Vui lòng chọn đối tượng!");
    }
  };

  function deleteConfirm(key) {
    let newDataSource = dataSource.filter((item) => item.key !== key);
    setDataSource(newDataSource);
    message.success("Xoá tài khoản thành công!");
  }
  function resetConfirm(username) {
    message.success(`Reset tài khoản ${username} thành công!`);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Table
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>Quản Lý Tài Khoản</h4>
            <Button
              type="primary"
              style={{ display: "flex", gap: 5, alignItems: "center" }}
              onClick={showModal}
            >
              <Image src={AddIcon} preview={false} style={{ height: 25 }} />
              Thêm
            </Button>
          </div>
        )}
        bordered
        pagination={{ pageSize: 5 }}
        dataSource={dataSource}
        columns={columns}
      />
      <Modal
        title="Thêm tài khoản"
        visible={isModalVisible}
        // onOk={addAccount}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Huỷ"
        footer={null}
        afterClose={() => {
          form.resetFields();
        }}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          form={form}
          onFinish={addAccount}
        >
          <Form.Item
            label="Tài khoản"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tài khoản!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
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
            label="Đối tượng"
            name="role"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn đối tượng!",
              },
            ]}
          >
            <Select onChange={handleSelected} value={role}>
              <Select.Option value="Giảng Viên">Giảng Viên</Select.Option>
              <Select.Option value="Sinh Viên">Sinh Viên</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đồng ý
            </Button>
            <Button htmlType="button" onClick={handleCancel}>
              Huỷ
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
