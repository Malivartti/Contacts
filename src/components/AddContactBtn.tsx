import { Button, Form, Modal, Input } from 'antd'
import React, { FC, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { IContact } from '../models/IContact'
import { addContact } from '../store/redusers/Contacts/contactsSlice'

const AddContactBtn: FC = () => {
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm()

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function submit(values: Omit<IContact, "id">) {
    dispatch(addContact(values))
    setIsModalVisible(false);
    form.resetFields()
  }

  return (
    <>
      <Button onClick={showModal}>Добавить</Button>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <h2>Новый контакт</h2>
        <Form
          onFinish={submit}
          form={form}
        >
          <Form.Item
            label="Имя"
            name="firstName"
            rules={[{ required: true, message: 'Пожалуйста введите имя!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Фамилия"
            name="secondName"
            rules={[{ required: true, message: 'Пожалуйста введите фамилию!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Почта"
            name="email"
            rules={[{ required: true, message: 'Пожалуйста введите почту!' }, { type: "email", message: "Введите валидную почту!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddContactBtn