import React from 'react'
import { setVisibilityFilter } from './filtersSlice'

const Link = ({ active, children, setVisibility, filter}) => {
  return(
    <>
      <button
        onClick={()=> setVisibilityFilter(filter)}
        disabled={active}
        style={{
          marginLeft: '.3m'
        }}
      >{children}</button>  
    </>
  )
}

export default Link