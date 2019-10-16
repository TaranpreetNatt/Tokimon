import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllTokimon, deleteTokimon } from '../services/tokimonService';

class Tokimon extends Component {
  state = {
    tokimons: [],
  };

  async componentDidMount() {
    const {data: tokimons} = await getAllTokimon();
    this.setState({ tokimons });
  }

  handleDelete = async (tokimon) => {
    const tokimons = this.state.tokimons.filter( t => t.id !== tokimon.id);
    const { status } = await deleteTokimon(tokimon.id);
    if (status === 200) this.setState({ tokimons });
    if (status !== 200) alert('Tokimon could not be deleted. \nPlease try again later.');
  }

  render() {

    return (
      <React.Fragment>
        <Link className="btn btn-success btn-large m-3" to="/addtokimon">
          Add Tokimon
        </Link>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Trainer</th>
              <th>Tokimon</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Total</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.tokimons.map(tokimon => (
              <tr key={tokimon.id}>
                <td>{tokimon.trainer}</td>
                <td>{tokimon.name}</td>
                <td>{tokimon.weight}</td>
                <td>{tokimon.height}</td>
                <td>{tokimon.total}</td>
                <td>
                  <Link
                    to={`/tokimoninfo/${tokimon.id}`} 
                    className="btn-info btn-sm"
                  >
                    More Info
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/updatetokimon/${tokimon.id}`} 
                    className="btn-primary btn-sm"
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(tokimon)} 
                    className="btn-danger btn-sm"
                  >
                      Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
 
export default Tokimon;