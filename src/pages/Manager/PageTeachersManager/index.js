import React, { useState, useEffect } from "react";
import {
  Card,
  List,
  Avatar,
  Button,
  Modal,
  Image,
  Input,
  Form,
  Popconfirm,
  notification,
  Select,
  message,
  Divider,
} from "antd";
import ViewDetailIcon from "../../../assets/img/viewdetails.png";
import {
  QuestionCircleOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import AddIcon from "../../../assets/img/add.png";

const { Option } = Select;
const { Search } = Input;
// Department - Subjects
const departmentData = [
  ["it", "mathematics", "economics", "electronic"],
  ["CNTT", "Toán Tin", "Kinh Tế", "Điện Tử"],
];
const subjectData = {
  it: [
    "Java",
    "An ning mạng",
    "NodeJS",
    "ReactJS",
    "MongoDB",
    "Angular",
    "An toàn thông tin",
    "IoT",
    "AI",
  ],
  economics: ["Kỹ thuật giao tiếp", "Kinh tế vĩ mô", "Thuế"],
  mathematics: ["Giải tích", "Toán rời rạc", "Đại số"],
  electronic: ["Điện tử", "Mạng truyền thông"],
};

export default function PageTeachersManager() {
  // Set data
  const teachers = [
    {
      id: "teacher_1",
      name: "Nguyễn Tiến Danh",
      education: "Tiến sĩ",
      dob: "29/05/1988",
      department: "Kinh tế",
      subjects: "Kỹ thuật giao tiếp",
    },
    {
      id: "teacher_2",
      name: "Vũ Duy Thức",
      education: "Tiến sĩ",
      dob: "29/05/1988",
      department: "CNTT",
      subjects: "AI",
    },
    {
      id: "teacher_3",
      name: "Ngô Bảo Châu",
      dob: "29/05/1988",
      education: "Giáo sư",
      department: "Toán-Tin",
      subjects: "Giải tích",
    },
    {
      id: "teacher_4",
      name: "Hiếu Pc",
      dob: "29/05/1988",
      education: "Kỹ Sư",
      department: "CNTT",
      subjects: "An toàn thông tin",
    },
    {
      id: "teacher_5",
      name: "Tiệp Phan",
      dob: "29/05/1990",
      education: "Kỹ Sư, GDE Angular",
      department: "CNTT",
      subjects: "Angular",
    },
    {
      id: "teacher_6",
      name: "Thịnh Nguyễn",
      dob: "29/05/1988",
      education: "Kỹ Sư",
      department: "CNTT",
      subjects: "NodeJS, ReactJS, MongoDB",
    },
    {
      id: "teacher_7",
      name: "Phạm Huy Hoàng",
      dob: "29/05/1992",
      education: "Kỹ Sư",
      department: "CNTT",
      subjects: "An ninh mạng",
    },
  ];

  const [data, setData] = useState(teachers);

  const [form] = Form.useForm();

  const [formAdd] = Form.useForm();

  // Select Option Department and Subjects
  const [departmentName, setDepartmentName] = useState(departmentData[1][0]);
  const [subjects, setSubjects] = useState(subjectData[departmentData[0][0]]);
  const [secondSubjects, setSecondSubjects] = useState(
    subjectData[departmentData[0][0]][0]
  );

  const handleDepartmentChange = (value) => {
    switch (value) {
      case "it":
        setDepartmentName(departmentData[1][0]);
        break;
      case "mathematics":
        setDepartmentName(departmentData[1][1]);
        break;
      case "economics":
        setDepartmentName(departmentData[1][2]);
        break;
      case "electronics":
        setDepartmentName(departmentData[1][3]);
        break;
      default:
        break;
    }
    setSubjects(subjectData[value]);
    setSecondSubjects(subjectData[value][0]);
  };

  const onSecondSubjectChange = (value) => {
    setSecondSubjects(value);
  };

  // Set modal when click
  const [currenItem, setCurrenItem] = useState({});

  const showModalDetail = (item) => {
    setCurrenItem(item);
    setIsModalVisible(true);
  };

  useEffect(() => {
    // Set data before click view detail
    if (currenItem) {
      const { id, name, education, subjects, dob, department } = currenItem;
      form.setFieldsValue({ id, name, education, subjects, dob, department });
    } else {
      form.setFields(null);
    }
  });

  // Modal details
  const [isModalVisible, setIsModalVisible] = useState(false);
  const detailFormRef = React.createRef();

  // Add new teacher
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const addFormRef = React.createRef();

  const showAddModal = () => {
    setIsAddModalVisible(true);
  };

  const addTeacher = () => {
    let newId = addFormRef.current.getFieldValue("new_id");
    let newName = addFormRef.current.getFieldValue("new_name");
    let newDob = addFormRef.current.getFieldValue("new_dob");
    let newEducation = addFormRef.current.getFieldValue("new_education");

    if (newId && newName && newEducation) {
      let checkId = data.findIndex((_item) => _item.id === newId);
      if (checkId !== -1) {
        message.error("ID này đã tồn tại trong hệ thống");
      } else {
        setData([
          ...data,
          {
            id: newId,
            name: newName,
            dob: newDob,
            education: newEducation,
            department: departmentName,
            subjects: secondSubjects,
          },
        ]);
        message.success("Thêm giảng viên thành công!!!");
        setIsAddModalVisible(false);
      }
    }
  };

  // Lock edit teacher
  const [lock, setLock] = useState(true);

  const handleEdit = () => {
    setLock(false);
  };

  // Edit teacher
  const updateItem = (id, values) => {
    let index = data.findIndex((_item) => _item.id === id);
    if (index === -1) {
      notification.open({
        message: "Cập nhật không thành công!",
        icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
      });
    } else {
      setData([
        ...data.slice(0, index),
        Object.assign({}, data[index], {
          ...values,
        }),
        ...data.slice(index + 1),
      ]);
      notification.open({
        message: "Cập nhật thành công!",
        icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
      });
    }
  };

  const handleSave = (values) => {
    const { id } = values;
    updateItem(id, values);
    setIsModalVisible(false);
  };

  // Delete teacher
  const confirmDelete = () => {
    let index = data.findIndex((_item) => _item.id === currenItem.id);

    if (index === -1) {
      notification.open({
        message: "Xoá không thành công!",
        icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
      });
    } else {
      setData([...data.slice(0, index), ...data.slice(index + 1)]);
      setIsModalVisible(false);
      notification.open({
        message: "Xoá thành công!",
        icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
      });
    }
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setLock(true);
  };

  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 7,
          },
          wrapperCol: {
            span: 18,
          },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  return (
    <Card
      title="Giảng Viên"
      extra={
        <div style={{ display: "flex" }}>
          <Search
            style={{ width: 300, marginRight: 40 }}
            placeholder="Tìm kiếm"
            onChange={(e) => {
              let value = e.target.value;
              if (value === "") {
                setData(teachers);
              } else {
                let dataSearch = teachers.filter((_teacher) =>
                  _teacher.name
                    .toLowerCase()
                    .includes(value.trim().toLowerCase())
                );
                setData([...dataSearch]);
              }
            }}
          />
          <Button
            htmlType="button"
            onClick={showAddModal}
            style={{ display: "flex", gap: 3 }}
          >
            <Image src={AddIcon} preview={false} style={{ height: 20 }} />
            Thêm
          </Button>
        </div>
      }
    >
      <List
        itemLayout="horizontal"
        pagination={{
          pageSize: 5,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={
                <p
                  style={{ cursor: "pointer" }}
                  id={item.id}
                  onClick={() => showModalDetail(item)}
                >
                  {item.name}
                </p>
              }
              description={item.subjects}
            />
            <Button
              style={{ display: "flex", alignItems: "center", gap: 5 }}
              onClick={() => showModalDetail(item)}
            >
              <Image
                src={ViewDetailIcon}
                preview={false}
                style={{
                  width: 17,
                  height: 17,
                }}
              />
              Xem chi tiết
            </Button>
          </List.Item>
        )}
      />
      {/* Modal View Detail Teacher*/}
      <Modal
        title={currenItem.name}
        forceRender
        visible={isModalVisible}
        onCancel={handleClose}
        onOk={handleSave}
        afterClose={() => setLock(true)}
        footer={null}
      >
        <Image
          style={{ height: 180, alignContent: "center", marginLeft: "50%" }}
          src="https://joeschmoe.io/api/v1/random"
          preview={false}
        />
        <Divider />
        <Form
          ref={detailFormRef}
          {...formItemLayout}
          form={form}
          layout={formLayout}
          initialValues={{ layout: formLayout }}
          onValuesChange={onFormLayoutChange}
          onFinish={handleSave}
        >
          <Form.Item label="ID" name="id">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Họ và tên" name="name">
            <Input disabled={lock} />
          </Form.Item>
          <Form.Item label="Ngày sinh" name="dob">
            <Input disabled={lock} />
          </Form.Item>
          <Form.Item label="Trình độ học vấn" name="education">
            <Input disabled={lock} />
          </Form.Item>
          <Form.Item label="Khoa công tác" name="department">
            <Input disabled={lock} />
          </Form.Item>
          <Form.Item label="Môn giảng dạy" name="subjects">
            <Input disabled={lock} />
          </Form.Item>
          <Form.Item {...buttonItemLayout} style={{ marginLeft: 60 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={lock ? { display: "none" } : null}
            >
              Cập Nhật
            </Button>
            <Button
              htmlType="button"
              onClick={handleCancel}
              style={lock ? { display: "none" } : { marginLeft: 15 }}
            >
              Huỷ
            </Button>
            <Button
              htmlType="button"
              onClick={handleEdit}
              style={!lock ? { display: "none" } : null}
            >
              Chỉnh sửa
            </Button>
            <Popconfirm
              title="Bạn có chắc chắn muốn xoá không？"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={confirmDelete}
              okText="Đồng ý"
              cancelText="Huỷ"
            >
              <Button
                type="primary"
                htmlType="button"
                danger
                style={!lock ? { display: "none" } : { marginLeft: 15 }}
              >
                Xoá
              </Button>
            </Popconfirm>
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal Add Teacher */}
      <Modal
        title="Thêm giảng viên"
        centered
        visible={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        footer={null}
        width={600}
        afterClose={() => formAdd.resetFields()}
      >
        <Form
          ref={addFormRef}
          {...formItemLayout}
          layout={formLayout}
          form={formAdd}
          initialValues={{ layout: formLayout }}
          onValuesChange={onFormLayoutChange}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            label="ID"
            name="new_id"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập Id",
              },
            ]}
          >
            <Input placeholder="teacher_id" />
          </Form.Item>
          <Form.Item
            label="Họ và tên"
            name="new_name"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên giảng viên",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item label="Giới tính" name="new_gender">
            <Radio.Group>
              <Radio value={1}>Nam</Radio>
              <Radio value={2}>Nữ</Radio>
            </Radio.Group>
          </Form.Item> */}
          <Form.Item label="Ngày sinh" name="new_dob">
            <Input />
          </Form.Item>
          <Form.Item
            label="Trình độ học vấn"
            name="new_education"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập trình độ học vấn",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Khoa công tác" required>
            <Select
              defaultValue={departmentData[1][0]}
              onChange={handleDepartmentChange}
            >
              {departmentData[0].map((department, index) => (
                <Option key={department}>{departmentData[1][index]}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Môn giảng dạy" required>
            <Select value={secondSubjects} onChange={onSecondSubjectChange}>
              {subjects.map((subject) => (
                <Option key={subject}>{subject}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item style={{ marginLeft: 30 }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={addTeacher}
              style={{ marginRight: 15 }}
            >
              Đồng ý
            </Button>
            <Button
              htmlType="button"
              onClick={() => setIsAddModalVisible(false)}
            >
              Huỷ
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}
