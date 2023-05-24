import { faMagnifyingGlass,faMoon, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Search = () => {
  return (
    <div className='SearchDashboardM' >

                <div className='InputSearch' >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input placeholder='Search...' />

                </div>

                <div className='IconesSearchDashbord' >
                <FontAwesomeIcon icon={faMoon} />
                <FontAwesomeIcon icon={faRightFromBracket} />
                <FontAwesomeIcon icon={faUser} />

                </div>



    </div>
  )
}

export default Search
