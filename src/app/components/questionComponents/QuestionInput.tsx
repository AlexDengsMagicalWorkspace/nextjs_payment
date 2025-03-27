
import React , { FC } from 'react';
import { Input, Form, Button, message } from 'antd';

const QuestionInput: FC = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                label="Question"
                name="question"
                rules={[{ required: true, message: 'Please input your question!' }]}
            ></Form.Item>
        </Form>
    )
};

export default QuestionInput;

