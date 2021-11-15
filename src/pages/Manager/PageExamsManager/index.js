import React, { useEffect, useState } from "react";
import {
  Tabs,
  Collapse,
  Table,
  Modal,
  Form,
  DatePicker,
  Button,
  Input,
  message,
  Popconfirm,
  Divider,
} from "antd";
import moment from "moment";
import "./index.css";

const { TabPane } = Tabs;
const { Panel } = Collapse;

export default function PageExamsManager() {
  const [data, setData] = useState([
    {
      key: "2020-2021",
      exams_1: [
        {
          department: "CNTT",
          startTime: "2020-05-04",
          endTime: "2020-06-12",
        },
        {
          department: "Cơ khí",
          startTime: "2020-09-11",
          endTime: "2020-10-12",
        },
        {
          department: "Xây dựng",
          startTime: "2020-11-03",
          endTime: "2020-12-12",
        },
        {
          department: "Kinh tế",
          startTime: "2020-10-11",
          endTime: "2020-11-12",
        },
      ],
      exams_2: [
        {
          department: "CNTT",
          startTime: "2021-10-11",
          endTime: "2021-11-12",
        },
        {
          department: "Cơ khí",
          startTime: "2021-10-03",
          endTime: "2021-11-12",
        },
        {
          department: "Xây dựng",
          startTime: "2021-10-15",
          endTime: "2021-11-12",
        },
        {
          department: "Kinh tế",
          startTime: "2021-10-11",
          endTime: "2021-11-12",
        },
      ],
    },
    {
      key: "2019-2020",
      exams_1: [
        {
          department: "CNTT",
          startTime: "2019-09-28",
          endTime: "2019-11-12",
        },
        {
          department: "Cơ khí",
          startTime: "2019-10-11",
          endTime: "2019-11-12",
        },
        {
          department: "Xây dựng",
          startTime: "2019-10-11",
          endTime: "2019-11-12",
        },
        {
          department: "Kinh tế",
          startTime: "2019-10-11",
          endTime: "2019-11-12",
        },
      ],
      exams_2: [
        {
          department: "CNTT",
          startTime: "2020-10-11",
          endTime: "2020-11-12",
        },
        {
          department: "Cơ khí",
          startTime: "2020-10-11",
          endTime: "2020-11-12",
        },
        {
          department: "Xây dựng",
          startTime: "2020-09-27",
          endTime: "2020-11-03",
        },
        {
          department: "Kinh tế",
          startTime: "2020-10-11",
          endTime: "2020-11-12",
        },
      ],
    },
    {
      key: "2018-2019",
      exams_1: [
        {
          department: "CNTT",
          startTime: "2018-11-11",
          endTime: "2018-11-12",
        },
        {
          department: "Cơ khí",
          startTime: "2018-11-11",
          endTime: "2018-11-12",
        },
        {
          department: "Xây dựng",
          startTime: "2018-11-11",
          endTime: "2018-11-12",
        },
        {
          department: "Kinh tế",
          startTime: "2018-11-11",
          endTime: "2018-11-12",
        },
      ],
      exams_2: [
        {
          department: "CNTT",
          startTime: "2019-11-11",
          endTime: "2019-11-12",
        },
        {
          department: "Cơ khí",
          startTime: "2019-11-11",
          endTime: "2019-11-12",
        },
        {
          department: "Xây dựng",
          startTime: "2019-11-11",
          endTime: "2019-11-12",
        },
        {
          department: "Kinh tế",
          startTime: "2019-11-11",
          endTime: "2019-11-12",
        },
      ],
    },
    {
      key: "2017-2018",
      exams_1: [
        {
          department: "CNTT",
          startTime: "2017-11-11",
          endTime: "2017-12-12",
        },
        {
          department: "Cơ khí",
          startTime: "2017-11-11",
          endTime: "2017-12-12",
        },
        {
          department: "Xây dựng",
          startTime: "2017-11-07",
          endTime: "2017-12-12",
        },
        {
          department: "Kinh tế",
          startTime: "2017-11-11",
          endTime: "2017-12-12",
        },
      ],
      exams_2: [
        {
          department: "CNTT",
          startTime: "2018-11-08",
          endTime: "2018-11-18",
        },
        {
          department: "Cơ khí",
          startTime: "2018-11-11",
          endTime: "2018-11-12",
        },
        {
          department: "Xây dựng",
          startTime: "2018-11-11",
          endTime: "2018-11-12",
        },
        {
          department: "Kinh tế",
          startTime: "2018-11-01",
          endTime: "2018-11-08",
        },
      ],
    },
  ]);

  const dataSource = [
    {
      key: "CNTT",
    },
    {
      key: "Cơ khí",
    },
    {
      key: "Xây dựng",
    },
    {
      key: "Kinh tế",
    },
  ];

  const columns = [
    {
      title: "Khoa",
      dataIndex: "key",
      key: "key",
    },
    {
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => {
        const { key } = record;
        return (
          <p className="exams-viewdetail" onClick={() => showModal(key)}>
            Xem chi tiết
          </p>
        );
      },
    },
  ];

  const [selectedSchoolYear, setSelectedSchoolYear] = useState(data[0].key);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // Thêm năm học
  const [formSchoolYear] = Form.useForm();
  const [isAddSchoolYearModal, setIsAddSchoolYearModal] = useState(false);

  const exam1 = [
    {
      department: "CNTT",
      startTime: null,
      endTime: null,
    },
    {
      department: "Cơ khí",
      startTime: null,
      endTime: null,
    },
    {
      department: "Xây dựng",
      startTime: null,
      endTime: null,
    },
    {
      department: "Kinh tế",
      startTime: null,
      endTime: null,
    },
  ];

  const exam2 = [
    {
      department: "CNTT",
      startTime: null,
      endTime: null,
    },
    {
      department: "Cơ khí",
      startTime: null,
      endTime: null,
    },
    {
      department: "Xây dựng",
      startTime: null,
      endTime: null,
    },
    {
      department: "Kinh tế",
      startTime: null,
      endTime: null,
    },
  ];

  // Lock Edit
  const [lock, setLock] = useState(true);

  // View detail
  const [form] = Form.useForm();
  const [examDetailCurrent, setExamDetailCurrent] = useState({});

  useEffect(() => {
    if (examDetailCurrent) {
      const { startTime, endTime } = examDetailCurrent;
      form.setFieldsValue({
        startTime: moment(startTime),
        endTime: moment(endTime),
      });
    } else {
      form.setFieldsValue(null);
    }
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (key) => {
    setSelectedDepartment(key);
    let indexSchoolYear = data.findIndex(
      (item) => item.key === selectedSchoolYear
    );
    let exam;
    if (selectedSemester[selectedSemester.length - 1] === "I") {
      exam = data[indexSchoolYear].exams_1;
    } else if (selectedSemester[selectedSemester.length - 1] === "II") {
      exam = data[indexSchoolYear].exams_2;
    }
    let indexSemester = exam.findIndex((item) => item.department === key);
    setExamDetailCurrent(exam[indexSemester]);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={() => setIsAddSchoolYearModal(true)}>
        Thêm kỳ thi
      </Button>
      <Tabs
        style={{ marginTop: 20 }}
        defaultActiveKey="1"
        onChange={(key) => setSelectedSchoolYear(key)}
      >
        {data.map((item) => (
          <TabPane tab={`Năm học ${item.key}`} key={item.key}>
            <Collapse onChange={(key) => setSelectedSemester(key)}>
              <Panel header="Học kỳ I" key="I">
                <Table
                  bordered
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns}
                />
              </Panel>

              <Panel header="Học kỳ II" key="II">
                <Table
                  bordered
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns}
                />
              </Panel>
            </Collapse>
          </TabPane>
        ))}
      </Tabs>
      {/* Modal View Detail */}
      <Modal
        title={`Năm học ${selectedSchoolYear} --- Học kỳ ${selectedSemester} --- Khoa ${selectedDepartment}`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        afterClose={() => setLock(true)}
        forceRender
      >
        <Form form={form}>
          <Form.Item
            label="Ngày bắt đầu"
            name="startTime"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn ngày bắt đầu",
              },
            ]}
          >
            <DatePicker disabled={lock} placeholder="Ngày bắt đầu" />
          </Form.Item>
          <Form.Item
            label="Ngày kết thúc"
            name="endTime"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn ngày kết thúc",
              },
            ]}
          >
            <DatePicker disabled={lock} placeholder="Ngày kết thúc" />
          </Form.Item>
          <Form.Item>
            <Button onClick={() => setIsModalVisible(false)}>Đóng</Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Thêm kỳ thi"
        visible={isAddSchoolYearModal}
        onOk={() => {
          setIsAddSchoolYearModal(false);
        }}
        onCancel={() => setIsAddSchoolYearModal(false)}
        footer={null}
        okText="Thêm"
        cancelText="Huỷ"
      >
        <Form
          form={formSchoolYear}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item label="Năm học" required name="schoolYear">
            <Input placeholder="Ví dụ: 2020-2021" />
          </Form.Item>
          <Divider />
          <h4>Học kỳ I</h4>
          <Form.Item label="CNTT" required>
            <DatePicker
              placeholder="Ngày bắt đầu"
              bordered={false}
              onChange={(value) =>
                (exam1[0].startTime = value.format("YYYY-MM-DD"))
              }
            />
            <DatePicker
              placeholder="Ngày kết thúc"
              bordered={false}
              onChange={(value) =>
                (exam1[0].endTime = value.format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
          <Form.Item label="Cơ khí" required>
            <DatePicker
              placeholder="Ngày bắt đầu"
              bordered={false}
              onChange={(value) =>
                (exam1[1].startTime = value.format("YYYY-MM-DD"))
              }
            />
            <DatePicker
              placeholder="Ngày kết thúc"
              bordered={false}
              onChange={(value) =>
                (exam1[1].endTime = value.format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
          <Form.Item label="Xây dựng" required>
            <DatePicker
              placeholder="Ngày bắt đầu"
              bordered={false}
              onChange={(value) =>
                (exam1[2].startTime = value.format("YYYY-MM-DD"))
              }
            />
            <DatePicker
              placeholder="Ngày kết thúc"
              bordered={false}
              onChange={(value) =>
                (exam1[2].endTime = value.format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
          <Form.Item label="Kinh tế" required>
            <DatePicker
              bordered={false}
              placeholder="Ngày bắt đầu"
              onChange={(value) =>
                (exam1[3].startTime = value.format("YYYY-MM-DD"))
              }
            />
            <DatePicker
              placeholder="Ngày kết thúc"
              bordered={false}
              onChange={(value) =>
                (exam1[3].endTime = value.format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
          <Divider />
          <h4>Học kỳ II</h4>
          <Form.Item label="CNTT" required>
            <DatePicker
              placeholder="Ngày bắt đầu"
              bordered={false}
              onChange={(value) =>
                (exam2[0].startTime = value.format("YYYY-MM-DD"))
              }
            />
            <DatePicker
              placeholder="Ngày kết thúc"
              bordered={false}
              onChange={(value) =>
                (exam2[0].endTime = value.format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
          <Form.Item label="Cơ khí" required>
            <DatePicker
              placeholder="Ngày bắt đầu"
              bordered={false}
              onChange={(value) =>
                (exam2[1].startTime = value.format("YYYY-MM-DD"))
              }
            />
            <DatePicker
              placeholder="Ngày kết thúc"
              bordered={false}
              onChange={(value) =>
                (exam2[1].endTime = value.format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
          <Form.Item label="Xây dựng" required>
            <DatePicker
              placeholder="Ngày bắt đầu"
              bordered={false}
              onChange={(value) =>
                (exam2[2].startTime = value.format("YYYY-MM-DD"))
              }
            />
            <DatePicker
              placeholder="Ngày kết thúc"
              bordered={false}
              onChange={(value) =>
                (exam2[2].endTime = value.format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
          <Form.Item label="Kinh tế" required>
            <DatePicker
              placeholder="Ngày bắt đầu"
              bordered={false}
              onChange={(value) =>
                (exam2[3].startTime = value.format("YYYY-MM-DD"))
              }
            />
            <DatePicker
              placeholder="Ngày kết thúc"
              bordered={false}
              onChange={(value) =>
                (exam2[3].endTime = value.format("YYYY-MM-DD"))
              }
            />
          </Form.Item>
          <Form.Item style={{ marginLeft: 30 }}>
            <Popconfirm
              title="Bạn có chắc chắn muốn thêm kỳ thi này không?"
              onConfirm={() => {
                let schoolYear = formSchoolYear.getFieldValue("schoolYear");
                if (schoolYear) {
                  let indexCheck = data.findIndex(
                    (item) => item.key === schoolYear
                  );
                  if (indexCheck === -1) {
                    setData([
                      {
                        key: schoolYear,
                        exams_1: [...exam1],
                        exams_2: [...exam2],
                      },
                      ...data,
                    ]);
                    message.success("Thêm kỳ thi thành công!");
                    setIsAddSchoolYearModal(false);
                  } else {
                    message.error("Kỳ thi này đã tồn tại!");
                  }
                } else {
                  message.error("Năm học không hợp lệ");
                }
              }}
              okText="Có"
              cancelText="Không"
            >
              <Button type="primary" style={{ marginRight: 15 }}>
                Thêm
              </Button>
            </Popconfirm>
            <Button onClick={() => setIsAddSchoolYearModal(false)}>Huỷ</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
