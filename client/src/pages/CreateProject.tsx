import FormLayout from "@/components/layout/ContentLayout";
import { Button, DatePicker, Form, Input, Select } from "antd";

const CreateProject = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FormLayout>
      <Form
        name="project"
        form={form}
        style={{ maxWidth: 400 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="title"
          label="Project Title"
          rules={[{ required: true, message: "Field is required" }]}
        >
          <Input placeholder="Title" className="create-task__form-item" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Project Type"
          rules={[{ required: true, message: "Field is required" }]}
        >
          <Select placeholder="Type" className="create-task__form-item" />
        </Form.Item>
        <div className="" style={{ display: "flex", gap: "1rem" }}>
          <Form.Item
            label="Start Date"
            name="startDate"
            rules={[{ required: true, message: "Field is required" }]}
          >
            <DatePicker className="create-task__form-item" />
          </Form.Item>
          <Form.Item
            label="End Date"
            name="endDate"
            rules={[{ required: true, message: "Field is required" }]}
          >
            <DatePicker className="create-task__form-item" />
          </Form.Item>
        </div>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Field is required" }]}
        >
          <Input.TextArea
            className="create-task__form-item"
            placeholder="Description"
            style={{ fontWeight: "inherit", height: 100, resize: "none" }}
          />
        </Form.Item>
        <Form.Item className="create-task__submit">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormLayout>
  );
};

export default CreateProject;
