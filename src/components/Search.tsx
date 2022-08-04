import { Input } from 'antd'
import React, { ChangeEvent, FC, useState } from 'react'

interface SearchProps {
  setSort: (value: string) => void
}

const Search: FC<SearchProps> = ({ setSort }) => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    setSort(value)
  }

  return (
    <Input value={value} onChange={onChange} />
  )
}

export default Search
