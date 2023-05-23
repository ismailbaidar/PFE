import { faMagnifyingGlass,faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Search = () => {
  return (
    <div className='SearchDashboardM' >

                <div className='InputSearch' >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input  />
                </div>

                <div className='IconesSearchDashbord' >
                <FontAwesomeIcon icon={faMoon} />

                </div>



    </div>
  )
}

export default Search
