import React, { Component } from "react";
import axios from "axios";
import { Accordion } from "react-bootstrap";

export default class StateData extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {},
    };
  }
  componentDidMount() {
    axios
      .get("https://data.covid19india.org/state_district_wise.json")
      .then((response) => {
        this.setState({ stateData: response.data });
      });
  }

  render() {
    let keys = Object.keys(this.state.stateData);
    return (
      <div className="row">
        <div className="col-md-12">
          <Accordion>
            {keys.map((itm, ky) => {
              let districts = this.state.stateData[itm].districtData;
              let district_keys = Object.keys(districts);

              let total_active = 0;
              let total_confirmed = 0;
              let total_deaths = 0;
              let total_recover = 0;

              let district_list = [];

              for (let x in districts) {
                total_active += districts[x].active;
                total_confirmed += districts[x].confirmed;
                total_deaths += districts[x].deceased;
                total_recover += districts[x].recovered;
                let ob = districts[x];
                ob["district_name"] = x;
                district_list.push(ob);
              }
              console.log(district_list);
              return (
                <Accordion.Item eventKey={ky}>
                  <Accordion.Header> 
                    {itm} - Total Cases - {total_confirmed}, Active - {total_active}, Recovered - {total_recover}, Deaths - {total_deaths}
                   </Accordion.Header>
                  <Accordion.Body>
                    <table className="table table-borderd table-stripped">
                      <thead>
                        <tr>
                          <td>Districts</td>
                          <td>Confirmed Cases</td>
                          <td>Active</td>
                          <td>Recovered</td>
                          <td>Deaths</td>
                          </tr>
                          </thead>
                          <tbody>
                            {
                              district_list.map((itm,ky)=>{
                                return(
                                  <tr>
                                    <td>{itm.district_name}</td>
                                    <td>{itm.confirmed}</td>
                                    <td>{itm.active}</td>
                                    <td>{itm.recovered}</td>
                                    <td>{itm.deceased}</td>
                                  </tr>
                                )
                              })
                            }
                          </tbody> 
                    </table>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    );
  }
}
