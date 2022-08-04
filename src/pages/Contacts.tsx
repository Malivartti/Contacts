import React, { FC, useState } from 'react'
import AddContactBtn from '../components/AddContactBtn'
import Search from '../components/Search'
import ContactList from '../components/ContactList'

const Contacts: FC = () => {
  const [sort, setSort] = useState('')

  return (
    <div className="content">
      <div className="container">
        <h1>Контакты</h1>
        <div className='contactAct'>
          <Search setSort={setSort} />
          <AddContactBtn />
        </div>
        <ContactList sort={sort} />
      </div>
    </div>
  )
}

export default Contacts