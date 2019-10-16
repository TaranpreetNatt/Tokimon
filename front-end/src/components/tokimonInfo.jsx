import React, { Component } from 'react';
import { getTokimonById } from '../services/tokimonService'

class TokimonInfo extends Component {
  state = {
    tokimon: {},
  };

  async componentDidMount() {
    const result = await getTokimonById(this.props.match.params.id);
    this.setState({ tokimon: result.data[0] });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="m-3">{this.state.tokimon.name}</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Trainer</th>
              <th>Weight</th>
              <th>Height</th> 
              <th>Fly</th>
              <th>Fight</th>
              <th>Fire</th>
              <th>Water</th>
              <th>Electric</th>
              <th>Frozen</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{this.state.tokimon.trainer}</td>
                <td>{this.state.tokimon.weight}</td>
                <td>{this.state.tokimon.height}</td>
                <td>{this.state.tokimon.fly}</td>
                <td>{this.state.tokimon.fight}</td>
                <td>{this.state.tokimon.fire}</td>
                <td>{this.state.tokimon.water}</td>
                <td>{this.state.tokimon.electric}</td>
                <td>{this.state.tokimon.frozen}</td>
                <td>{this.state.tokimon.total}</td>
              </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
 
export default TokimonInfo;