import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Logo from '../components/logo';
import Line from '../components/line';
import Themes from '../components/themes';
import Colleges from '../components/colleges';
import Footer from '../components/footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.openClick = this.openClick.bind(this);
  }
  state = {
    hideList: false
  };
  openClick = containerPlayList => {
    this.setState({
      containerPlayList,
      hideList: true
    });
    console.log(this);
  };

  render() {
    return (
      <HomeLayout>
        <Logo />
        <Line />
        <Themes themes={this.props.data.colleges} openClick={this.openClick} />
        <Colleges containerList={this.state.containerPlayList} />
        <Footer />
      </HomeLayout>
    );
  }
}

export default Home;
