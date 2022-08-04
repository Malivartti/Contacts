import React, { FC, useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchContacts } from '../store/redusers/Contacts/actionCreators';
import { selectContacts } from '../store/redusers/Contacts/contactsSlice';
import ContactItem from './ContactItem'

interface ContactListProps {
  sort: string;
}

const ContactList: FC<ContactListProps> = ({ sort }) => {
  const dispatch = useAppDispatch()
  const { contacts, isLoading, error } = useAppSelector(selectContacts)
  const filteredContacts = useMemo(() => contacts.filter(c => (`${c.firstName} ${c.secondName}`.toLocaleLowerCase()).includes(sort.toLocaleLowerCase())), [contacts, sort])

  useEffect(() => {
    dispatch(fetchContacts())
  }, [])

  return (
    <>{
      isLoading
        ? <h1>Идет загрузка...</h1>
        : error
          ? <h1>{error}</h1>
          : filteredContacts.length
            ? filteredContacts.map((contact, i) => <ContactItem key={i} contact={contact} />)
            : <h1>Контактов нет</h1>
    }</>
  )
}

export default ContactList
