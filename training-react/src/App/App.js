import React, { Component } from 'react'
import './App.css'
import { Grid } from 'semantic-ui-react'

class App extends Component {
  
  render() {
    const d = new Date()
    return (
      <div className="App">
        <Grid textAlign='center' columns={3}>
          <Grid.Row>
            <Grid.Column>
              <section>
                O mnie
              </section>
            </Grid.Column>
            <Grid.Column>
              <section>
                Zainteresowania
              </section>
            </Grid.Column>
            <Grid.Column>
              <section>
                Kontakt
              </section>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App
