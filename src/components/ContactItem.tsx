import React, { FC } from 'react'
import { Button, Card } from 'antd'
import { IContact } from '../models/IContact'
import { useAppDispatch } from '../hooks/redux'
import { deleteContact } from '../store/redusers/Contacts/contactsSlice'
import ChangeContactBtn from './ChangeContactBtn'

interface ContactItemProps {
  contact: IContact
}

const ContactItem: FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useAppDispatch()

  function fdeleteContact() {
    dispatch(deleteContact(contact.id))
  }

  return (
    <Card className='card'>
      <div className="user">
        <div>{contact.firstName} {contact.secondName} </div>
        <div>{contact.email}</div>
      </div>
      <ChangeContactBtn contact={contact}/>
      <Button danger={true} onClick={fdeleteContact}>Удалить</Button>
    </Card>
  )
}

export default ContactItem