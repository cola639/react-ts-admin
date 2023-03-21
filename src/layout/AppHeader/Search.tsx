// Third Lib
import { FC, useState } from 'react'

// UI Component
import { Select } from 'antd'

// Own Component
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'

// API

// Utils

// CSS
import styles from './Search.module.scss'

// Assets

export interface IindexProps {}

const index: FC<IindexProps> = () => {
  const [show, setshow] = useState(false)

  const onChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const clickSearch = () => {
    setshow(!show)
    console.log(show)
  }

  return (
    <div className="flex-center">
      <div className={`${styles.searchIcon}`}>
        <SearchIcon onClick={clickSearch} className="icon-small" />
      </div>

      <Select
        bordered={false}
        showArrow={false}
        className={`${styles.select} ${show ? styles.show : ''}`}
        placeholder="Input Search"
        optionFilterProp="children"
        onChange={onChange}
        options={[]}
      />
    </div>
  )
}

export default index
