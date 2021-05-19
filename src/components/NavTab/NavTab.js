import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';


class NavTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = { anchor: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(anchor) {
    this.setState({
      anchor: anchor,
    })
  }

  render() {
    this.props.onScroll(this.state.anchor);
    return (
      <div className="control-panel">
        <ul className="control-panel__list">
          <li className="control-panel__item">
            <Link to="/#project" onClick={() => this.handleClick("project")} className="control-panel__link">О проекте</Link>
          </li>
          <li className="control-panel__item">
            <Link to="/#technologies" onClick={() => this.handleClick("technologies")} className="control-panel__link">Технологии</Link>
          </li>
          <li className="control-panel__item">
            <Link to="/#student" onClick={() => this.handleClick("student")} className="control-panel__link">Студент</Link>
          </li>
        </ul>
      </div>
    );
  }

}

export default NavTab;