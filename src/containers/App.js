import React, { useEffect } from "react";
import { connect } from "react-redux";

import SearchBox from "../components/SearchBox";
import { robots } from "../robots";
import CardList from "../components/CardList";
import { setSearchField } from "../redux/actions";
import Scroll from "../components/Scroll";
import { requestRobots } from "../redux/actions";

import "./App.css";

const App = props => {
  const {
    isPending,
    onRequestRobots,
    onSearchChange,
    robots,
    searchField
  } = props;

  const onChange = e => {
    onSearchChange(e.target.value);
  };

  useEffect(() => {
    onRequestRobots();
  }, []);

  const filteredRobots = robots.filter(robot => {
    const normalizedName = robot.name.toLocaleLowerCase();
    return normalizedName.includes(searchField.toLowerCase());
  });

  return (
    <div className="App tc">
      {isPending ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="title f2">Robo Friends</h1>
          <SearchBox onChange={onChange} />
          <div className="spacer"></div>
          <Scroll>
            {!!props.robots.length && <CardList robots={filteredRobots} />}
          </Scroll>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

// onRequestRobots - requestRobots function requires being passed dispatch
// so we can kick off our async request
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: search => dispatch(setSearchField(search)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
