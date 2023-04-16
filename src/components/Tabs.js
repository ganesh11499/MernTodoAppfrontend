import React from 'react'
import { TABS } from '../redux/actions/type'
import { useDispatch } from 'react-redux'
import { toggleTab } from '../redux/actions'

const Tabs = ({currentTab}) => {
    const dispacth = useDispatch()
  return (
   <>
      {
        TABS.map(tab => {
            return(
              <button className={tab === currentTab ? "button selected": 'button'} onClick={() =>dispacth(toggleTab(tab))}>
                {tab}
              </button>
            )
        })
    }
   </>
  )
}

export default Tabs