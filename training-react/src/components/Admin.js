import React from 'react'
import { Button } from 'semantic-ui-react'

const Admin = (props) => {


  const renderHideAdminButton = () => {
    return (
      <Button
        className="hideAdmin"
        onClick={props.toggleAdminClicked}
      >Wyłącz Admina</Button>
    )
  }

  return (
    <header className="admin">
      <h1>Admin</h1>
      {renderHideAdminButton()}
    </header> 
  )
}

export default Admin
