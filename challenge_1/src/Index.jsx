import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DisplayChart from './DisplayChart';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('/data')
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
        <div>
          {this.state.data.map(x => <DisplayChart dataForChart={x} />)}
        </div>
    );
  }
}

ReactDOM.render(<Display />, document.getElementById('app'));
