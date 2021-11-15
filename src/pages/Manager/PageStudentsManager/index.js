import React, { useContext, useEffect, useState } from "react";
import { studentsContext } from "../../../context/students";
import {
  Table,
  Space,
  Popconfirm,
  Button,
  Image,
  Input,
  Modal,
  Form,
  Select,
  Radio,
  DatePicker,
  Drawer,
  Col,
  Row,
  Divider,
  message,
} from "antd";
import ViewDetailImg from "../../../assets/img/viewdetails.png";
import EditImg from "../../../assets/img/edit.png";
import DeleteImg from "../../../assets/img/delete.png";
import "./index.css";

import moment from "moment";

const { Search } = Input;
const { Option } = Select;

export default function PageStudentsManager() {
  const { students, setStudents, createId } = useContext(studentsContext);

  const [dataSource, setDataSource] = useState([...students]);

  const [studentKeyEdit, setStudentKeyEdit] = useState("");

  const [studentEditCurrent, setStudentEditCurrent] = useState({});

  useEffect(() => {
    if (studentEditCurrent) {
      const { name, dob, phone, department, schoolYear, gender } =
        studentEditCurrent;
      formEdit.setFieldsValue({
        name,
        phone,
        department,
        schoolYear,
        gender,
        dob: moment(dob),
      });
    } else {
      formEdit.setFieldsValue(null);
    }
  });

  // Label: table
  const columns = [
    {
      title: "Mã sinh viên",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      filters: [
        { text: "Nam", value: "Nam" },
        { text: "Nữ", value: "Nữ" },
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
    },
    {
      title: "Ngày sinh",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Khoa",
      dataIndex: "department",
      key: "department",
      filters: [
        { text: "CNTT", value: "CNTT" },
        { text: "Tự động hoá", value: "Tự động hoá" },
        { text: "Xây dựng", value: "Xây dựng" },
        { text: "Chế tạo máy", value: "Chế tạo máy" },
        { text: "Cơ điện tử", value: "Cơ điện tử" },
        { text: "Kinh tế", value: "Kinh tế" },
        { text: "Quản trị kinh doanh", value: "Quản trị kinh doanh" },
      ],
      onFilter: (value, record) => record.department.indexOf(value) === 0,
    },
    {
      title: "Khoá",
      dataIndex: "schoolYear",
      key: "schoolYear",
      filters: [
        { text: "2015", value: 2015 },
        { text: "2016", value: 2016 },
        { text: "2017", value: 2017 },
        { text: "2018", value: 2018 },
        { text: "2019", value: 2019 },
        { text: "2020", value: 2020 },
      ],
      onFilter: (value, record) => record.schoolYear.indexOf(value) === 0,
    },
    {
      key: "action",
      render: (_, record) => {
        const { key, name } = record;
        return (
          <Space size="middle">
            <Image
              onClick={() => showDrawer(key)}
              src={ViewDetailImg}
              preview={false}
              style={{
                width: 17,
                height: 17,
                cursor: "pointer",
              }}
            />
            <Image
              onClick={() => {
                setIsEditModalVisible(true);
                setStudentKeyEdit(key);
                let studentEdit = dataSource.filter(
                  (_item) => _item.key === key
                );
                setStudentEditCurrent(studentEdit[0]);
              }}
              src={EditImg}
              preview={false}
              style={{
                width: 17,
                height: 17,
                cursor: "pointer",
              }}
            />
            <Popconfirm
              title={`Bạn có chắc chắn muốn xoá sinh viên ${name} không?`}
              onConfirm={() => deleteStudent(key)}
              okText="Đồng ý"
              cancelText="Huỷ"
            >
              <Image
                src={DeleteImg}
                preview={false}
                style={{
                  width: 17,
                  height: 17,
                  cursor: "pointer",
                }}
              />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  // Modal Add New Student
  const [formAdd] = Form.useForm();
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const handleCancelAddModal = () => {
    setIsAddModalVisible(false);
  };

  const addStudent = (value) => {
    const dob = value["dob"].format("YYYY-MM-DD");
    const key = createId(value.schoolYear);
    setStudents([...students, { ...value, key, dob }]);
    setDataSource([...students, { ...value, key, dob }]);
    handleCancelAddModal();
  };

  // Modal Edit Student
  const [formEdit] = Form.useForm();
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const handleCancelEditModal = () => {
    setIsEditModalVisible(false);
  };

  const editStudent = (value) => {
    let studentEditIndex = dataSource.findIndex(
      (_item) => _item.key === studentKeyEdit
    );

    if (studentEditIndex !== -1) {
      const dob = value["dob"].format("YYYY-MM-DD");
      setDataSource([
        ...dataSource.slice(0, studentEditIndex),
        Object.assign({}, dataSource[studentEditIndex], {
          ...value,
          dob,
        }),
        ...dataSource.slice(studentEditIndex + 1),
      ]);
      setStudents([
        ...dataSource.slice(0, studentEditIndex),
        Object.assign({}, dataSource[studentEditIndex], {
          ...value,
          dob,
        }),
        ...dataSource.slice(studentEditIndex + 1),
      ]);
      handleCancelEditModal();
      message.success(
        `Cập nhật sinh viên có mã sinh viên ${dataSource[studentEditIndex].key} thành công`
      );
    } else {
      message.error("Cập nhật sinh viên thất bại");
    }
  };

  // Drawer View Detail Student
  const [viewDetailVisible, setViewDetailVisible] = useState(false);

  const [studentInfo, setStudentInfo] = useState({});

  const showDrawer = (key) => {
    let indexStudent = dataSource.findIndex((_item) => _item.key === key);
    setStudentInfo(dataSource[indexStudent]);
    setViewDetailVisible(true);
  };

  const onClose = () => {
    setViewDetailVisible(false);
  };

  const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );

  // Delete Student
  const deleteStudent = (key) => {
    let indexStudent = dataSource.findIndex((_item) => _item.key === key);
    let temp = dataSource[indexStudent];
    if (indexStudent !== -1) {
      setDataSource([
        ...dataSource.slice(0, indexStudent),
        ...dataSource.slice(indexStudent + 1),
      ]);
      setStudents([
        ...dataSource.slice(0, indexStudent),
        ...dataSource.slice(indexStudent + 1),
      ]);
      message.success(`Xoá sinh viên ${temp.name} thành công`);
    }
  };

  return (
    <Table
      title={() => (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>Quản Lý Sinh Viên</h5>
          <div style={{ display: "flex" }}>
            <Search
              style={{ width: 300, marginRight: 40 }}
              placeholder="Tìm kiếm"
              onChange={(e) => {
                let value = e.target.value;
                if (value === "") {
                  setDataSource([...students]);
                } else {
                  let dataSearch = students.filter(
                    (item) =>
                      item.name
                        .toLowerCase()
                        .includes(value.trim().toLowerCase()) ||
                      item.key
                        .toLowerCase()
                        .includes(value.trim().toLowerCase())
                  );
                  setDataSource([...dataSearch]);
                }
              }}
            />
            <Button
              type="primary"
              style={{ display: "flex", gap: 5, alignItems: "center" }}
              onClick={() => setIsAddModalVisible(true)}
            >
              Thêm
            </Button>
          </div>

          {/* Add Student Modal */}
          <Modal
            title="Thêm Sinh Viên"
            visible={isAddModalVisible}
            onCancel={handleCancelAddModal}
            footer={null}
            afterClose={() => formAdd.resetFields()}
            forceRender
          >
            <Form
              form={formAdd}
              onFinish={addStudent}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 15 }}
            >
              <Form.Item
                label="Họ và tên"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên giảng viên",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Giới tính"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn giới tính",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="Nam">Nam</Radio>
                  <Radio value="Nữ">Nữ</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Ngày sinh"
                name="dob"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ngày sinh",
                  },
                ]}
              >
                <DatePicker placeholder="Ngày sinh" />
              </Form.Item>
              <Form.Item label="Điện thoại" name="phone">
                <Input />
              </Form.Item>
              <Form.Item
                label="Khoa"
                name="department"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn khoa",
                  },
                ]}
              >
                <Select>
                  <Option key="cntt" value="CNTT">
                    CNTT
                  </Option>
                  <Option key="codientu" value="Cơ điện tử">
                    Cơ điện tử
                  </Option>
                  <Option key="tudonghoa" value="Tự động hoá">
                    Tự động hoá
                  </Option>
                  <Option key="chetaomay" value="Chế tạo máy">
                    Chế tạo máy
                  </Option>
                  <Option key="kinhte" value="Kinh tế">
                    Kinh tế
                  </Option>
                  <Option key="qtkd" value="Quản trị kinh doanh">
                    Quản trị kinh doanh
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Khoá"
                name="schoolYear"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn khoá",
                  },
                ]}
              >
                <Select>
                  <Option key="2015">2015</Option>
                  <Option key="2016">2016</Option>
                  <Option key="2017">2017</Option>
                  <Option key="2018">2018</Option>
                  <Option key="2019">2019</Option>
                  <Option key="2020">2020</Option>
                </Select>
              </Form.Item>
              <Form.Item style={{ marginLeft: 30 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: 15 }}
                >
                  Đồng ý
                </Button>
                <Button htmlType="button" onClick={handleCancelAddModal}>
                  Huỷ
                </Button>
              </Form.Item>
            </Form>
          </Modal>

          {/* View Detail Student Drawer */}
          <Drawer
            width={640}
            placement="right"
            closable={false}
            onClose={onClose}
            visible={viewDetailVisible}
          >
            <p
              className="site-description-item-profile-p"
              style={{ marginBottom: 24, fontSize: 20 }}
            >
              -- Thông tin sinh viên --
            </p>
            <Divider />
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title="Mã số sinh viên"
                  content={studentInfo.key}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Họ và tên" content={studentInfo.name} />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title="Giới tính"
                  content={studentInfo.gender}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem title="Ngày sinh" content={studentInfo.dob} />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title="Điện thoại"
                  content={studentInfo.phone}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title="Khoa"
                  content={studentInfo.department}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <DescriptionItem
                  title="Khoá"
                  content={studentInfo.schoolYear}
                />
              </Col>
            </Row>
            <Divider />
          </Drawer>

          {/* Edit Student Modal */}
          <Modal
            title="Chỉnh sửa sinh viên"
            visible={isEditModalVisible}
            onCancel={handleCancelEditModal}
            footer={null}
            forceRender
          >
            <Form
              form={formEdit}
              onFinish={editStudent}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 15 }}
            >
              <Form.Item
                label="Họ và tên"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên giảng viên",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Giới tính"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn giới tính",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="Nam">Nam</Radio>
                  <Radio value="Nữ">Nữ</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Ngày sinh"
                name="dob"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ngày sinh",
                  },
                ]}
              >
                <DatePicker placeholder="Ngày sinh" />
              </Form.Item>
              <Form.Item label="Điện thoại" name="phone">
                <Input />
              </Form.Item>
              <Form.Item
                label="Khoa"
                name="department"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn khoa",
                  },
                ]}
              >
                <Select>
                  <Option key="cntt" value="CNTT">
                    CNTT
                  </Option>
                  <Option key="codientu" value="Cơ điện tử">
                    Cơ điện tử
                  </Option>
                  <Option key="tudonghoa" value="Tự động hoá">
                    Tự động hoá
                  </Option>
                  <Option key="chetaomay" value="Chế tạo máy">
                    Chế tạo máy
                  </Option>
                  <Option key="kinhte" value="Kinh tế">
                    Kinh tế
                  </Option>
                  <Option key="qtkd" value="Quản trị kinh doanh">
                    Quản trị kinh doanh
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Khoá"
                name="schoolYear"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn khoá",
                  },
                ]}
              >
                <Select>
                  <Option key="2015">2015</Option>
                  <Option key="2016">2016</Option>
                  <Option key="2017">2017</Option>
                  <Option key="2018">2018</Option>
                  <Option key="2019">2019</Option>
                  <Option key="2020">2020</Option>
                </Select>
              </Form.Item>
              <Form.Item style={{ marginLeft: 30 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: 15 }}
                >
                  Cập nhật
                </Button>
                <Button htmlType="button" onClick={handleCancelAddModal}>
                  Huỷ
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      )}
      bordered
      pagination={{ pageSize: 6 }}
      dataSource={dataSource}
      columns={columns}
    />
  );
}
