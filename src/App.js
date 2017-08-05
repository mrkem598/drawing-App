import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class SideBar extends Component {
  static displayName = 'Sidebar';
  static defaultProps = {
    onRemove: () => {},
    onAttach: () => {},
    onUpload: () => {},
  };
  constructor(props) {
    super(props);
    this.state = {
      timestamp : Date.now(),
    };
  }
  upload(e) {
    this.props.onUpload(e.target.files);
    this.setState({
      timestamp : Date.now()
    });
  }
  render() {
    const { props, state } = this;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Moha React Photo Drawing Application</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <nav className="ple-sideNavigation ple-side__navigation">
				<div className="ple-sideNavigation__wrap">
					<button type="button" title="attach images" onClick={props.onAttach}>
						<i className="ple-sp-ico ple-ico-reply ple-abs">Moving the image to grid block</i>
					</button>
					<button type="button" title="toggle select" onClick={props.onToggleSelect}>
						<i className="ple-sp-ico ple-ico-select ple-abs">Image Stamp</i>
					</button>
					<span title="upload images" key={state.timestamp}>
						<input type="file" ref="inputFile" onChange={(e) => this.upload(e)} multiple />
						<i className="ple-sp-ico ple-ico-upload ple-abs">Upload Images</i>
					</span>
					<button type="button" title="remove images" onClick={props.onRemove}>
						<i className="ple-sp-ico ple-ico-trash ple-abs">Remove Images</i>
					</button>
				</div>
			</nav>
      </div>
    );
  }
}

export default SideBar;
