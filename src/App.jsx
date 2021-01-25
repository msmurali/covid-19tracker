import React, { Component } from "react";
import "./App.css";
import MapComponent from "./Components/mapComponent/MapComponent";
import FlexContainer from "./Components/flexcontainer/FlexContainer";
import Card from "./Components/card/Card";
import Container from "./Components/container/Container";
import Template from "./Components/template/Template";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: [],
      stateData: [],
      loaded: false,
      cardStyles : { from: "white", to: "#e57b92a6" }
    };
  }

  componentDidMount() {
    fetch("https://api.covid19india.org/v4/data.json")
      .then((res) => res.json())
      .then((json) => this.setState({ mapData: json }))
      .then(() => {
        return fetch("https://api.covid19india.org/data.json");
      })
      .then((res) => res.json())
      .then((json) => this.setState({ stateData: json, loaded: true }));
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="app">
          <Header>INDIA COVID-19 TRACKER</Header>
          <FlexContainer>
            <Card
              text={this.state.stateData.statewise[0].active}
              bg={this.state.cardStyles}
            >
              ACTIVE
            </Card>
            <Card
              text={this.state.stateData.statewise[0].confirmed}
              bg={this.state.cardStyles}
            >
              CONFIRMED
            </Card>
            <Card
              text={this.state.stateData.statewise[0].recovered}
              bg={this.state.cardStyles}
            >
              RECOVERED
            </Card>
            <Card
              text={this.state.stateData.statewise[0].deaths}
              bg={this.state.cardStyles}
            >
              DEATHS
            </Card>
          </FlexContainer>
          <MapComponent statedata={this.state.mapData} />
          <Container>
            {this.state.stateData.statewise.slice(1).map((itm, k) => {
              if(itm.state !== 'State Unassigned'){
                return (
                  <Template
                    key={k}
                    title={itm.state}
                    active={itm.active}
                    confirmed={itm.confirmed}
                    recovered={itm.recovered}
                    deaths={itm.deaths}
                  />
                );
              } else{
                return (<div></div>)
              }
            })}
          </Container>
        </div>
      );
    } else {
      return <div className="loader">LOADING...</div>;
    }
  }
}

export default App;
