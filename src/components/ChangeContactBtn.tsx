import React, { FC, useState } from 'react'
import { Button, Form, Modal, Input } from 'antd'
import { useAppDispatch } from '../hooks/redux'
import { IContact } from '../models/IContact'
import { changeContact } from '../store/redusers/Contacts/contactsSlice'

interface ChangeContactBtnProps {
  contact: IContact
}

const ChangeContactBtn: FC<ChangeContactBtnProps> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function submit(values: Omit<IContact, "id">) {
    dispatch(changeContact({ id: contact.id, ...values }))
    setIsModalVisible(false);
  }

  return (
    <>
      <Button onClick={showModal}>Изменить</Button>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <h2>Новый контакт</h2>
        <Form
          onFinish={submit}
          initialValues={{
            firstName: contact.firstName,
            secondName: contact.secondName,
            email: contact.email
          }}
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
            <Input  />
          </Form.Item>
          <Form.Item
            label="Почта"
            name="email"
            rules={[{ required: true, message: 'Пожалуйста введите почту!' }]}
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

export default ChangeContactBtn