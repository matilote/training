import React, { Component } from 'react'
import './App.css'
import { Grid } from 'semantic-ui-react'
import { contentArray, contentObj } from '../content.js' 

class App extends Component {
  
  // 1. Na 1. stopniu zagniezdzenia wystepuja na pewno obiekty, które zawierają klucz: tc001, tc002, tc003
  // 2. Każdy z rekordów powyżej posiada co najmniej jeden rekord wewnątrz swojej tablicy

  // contentArray[0]
  // tc001
  
  // textOmnie += contentArray[i];

  // {contentObj.tc003.i1.text}
  
  render() {
    
    const id = 'tc001'
    var rekordOmnie = ''
    for (var klucz = 0; klucz < contentArray.length; klucz++) {
      var rekord = contentArray[klucz]
      if (rekord.hasOwnProperty(id)) {
        rekordOmnie = rekord[id]
      }
    }
    
    console.log(rekordOmnie)

    return (
      <div className="App">
        <Grid textAlign='center' columns={3}>
          <Grid.Row>
            <Grid.Column>
              <section>
                <h1>O mnie</h1>
                <p></p>
              </section>
            </Grid.Column>
            <Grid.Column>
              <section>
                <h1>Hobby</h1>
                  <p>{contentArray[1].text}</p>
              </section>
            </Grid.Column>
            <Grid.Column>
              <section>
                <h1>Kontakt</h1>
                <p>{contentArray[2]}</p>
              </section>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App
