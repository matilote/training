import React, { Component } from 'react'
import './App.css'
import { Grid } from 'semantic-ui-react'
import content from '../content'

class App extends Component {
  
  // id=1
  // id=5
  // id=7

  render() {
    return (
      <div className="App">
        <Grid textAlign='center' columns={3}>
          <Grid.Row>
            <Grid.Column>
              <section className="about" rel={content[0].id}>
                O mnie
                <p>{content[0].text}</p>
              </section>
            </Grid.Column>
            <Grid.Column>
              <section>
                Zainteresowania
                <p>Text</p>
              </section>
            </Grid.Column>
            <Grid.Column>
              <section>
                Kontakt
                <p>Text</p>
              </section>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App
