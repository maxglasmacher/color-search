import React from 'react';
import logo from './logo.svg';
import './App.css';

const colors = ["red", "green", "blue", "yellow"]

interface AppState {
  currentSearch: string
  selectedColor: string
}


class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      currentSearch: "",
      selectedColor: ""
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p className="flex-box">
            <div className='flex-box-2'>
              <input
                value={this.state.currentSearch}
                onChange={
                  e => {
                    this.setState(
                      {
                        currentSearch: e.target.value
                      }
                    )
                  }
                }
              />
              <p>{this.state.selectedColor}</p>
            </div>
            {colors.filter(color => color.includes(this.state.currentSearch)).
              map(color => { return (<p className={color} onClick={
                () => {
                  this.setState(
                    {
                      selectedColor: color
                    }
                  )
                }
              }>{color}</p>) })}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
