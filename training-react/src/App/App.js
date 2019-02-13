import React, { Component } from 'react'
import './App.css'
import { Grid } from 'semantic-ui-react'
import { contentArray, contentObj } from '../content.js' 

class App extends Component {
  
  render() {
    const d = new Date()
    return (
      <div className="App">
        <Grid textAlign='center' columns={3}>
          <Grid.Row>
            <Grid.Column>
              <section>
                <h1>O mnie</h1>
                <p>{contentObj.tc001.i1.text}</p>
              </section>
            </Grid.Column>
            <Grid.Column>
              <section>
                <h1>Hobby</h1>
                  <p>{contentObj.tc002.i1.text}</p>
              </section>
            </Grid.Column>
            <Grid.Column>
              <section>
                <h1>Kontakt</h1>
                <p>{contentObj.tc003.i1.text}</p>
              </section>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App
