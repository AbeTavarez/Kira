import React from 'react'

const AddButton = () => {
  return (
    <div className="fixed-action-btn">
      <a className='btn-floating btn-large blue darken-2 modal-trigger' href="#add-log-modal">
          <i className="large material-icons">add</i>
      </a>
      <ul>
          <li className='btn-floating green modal-trigger' href='#tech-list-modal'>
              <i className='material-icons'>person</i>
          </li>
          <li className='btn-floating red modal-trigger' href='#add-tech-modal'>
              <i className='material-icons'>person_add</i>
          </li>
      </ul>
    </div>
  )
}

export default AddButton
