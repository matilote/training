import React from 'react'
import { Button, Grid, Input } from 'semantic-ui-react'

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
      <Grid textAlign='center'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Input
                className="about"
              />
            </Grid.Column>
            <Grid.Column>
              b
            </Grid.Column>
            <Grid.Column>
              c
            </Grid.Column>
          </Grid.Row>
        </Grid>
      {renderHideAdminButton()}
    </header> 
  )
}

export default Admin
