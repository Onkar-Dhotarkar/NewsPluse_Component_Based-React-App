
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'






export default class App extends Component {
  state = {
    progress: 0
  }
  setprogress(progress) {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color='blue'
            progress={this.state.progress}
          />

          <Routes>


            <Route exact path="/" element={<News setProgress={this.setprogress} key={"general"} pageSize={12} category="general" country="us" />}></Route>

            <Route exact path="/business" element={<News setProgress={this.setprogress} key={"business"} pageSize={12} category="business" country="us" />}></Route>

            <Route exact path="/entertainment" element={<News setProgress={this.setprogress} key={"entertainment"} pageSize={12} category="entertainment" country="us" />}></Route>

            <Route exact path="/health" element={<News setProgress={this.setprogress} key={"health"} pageSize={12} category="health" country="us" />}></Route>

            <Route exact path="/science" element={<News setProgress={this.setprogress} key={"science"} pageSize={12} category="science" country="us" />}></Route>

            <Route exact path="/sports" element={<News setProgress={this.setprogress} key={"sports"} pageSize={12} category="sports" country="us" />}></Route>

            <Route exact path="/technology" element={<News setProgress={this.setprogress} key={"technology"} pageSize={12} category="technology" country="us" />}></Route>

          </Routes>

        </BrowserRouter>

      </>


    )
  }
}


// export default App;
