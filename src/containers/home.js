import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Logo from '../components/logo';
import Line from '../components/line';
import Colleges from '../components/colleges';
import VideoBox from '../components/video-box';

class Home extends Component {
  state = {
    hideList: true,
  };

  openClick = (containerPlayList) => {
    this.setState({
      containerPlayList,
      hideList: false,
    });
  };

  openVideoPlayerClick = (contentVideoPlayer) => {
    this.setState({
      contentVideoPlayer,
      unhideVideoPlayer: true,
    });
  };

  render() {
    return (
      <HomeLayout>
        <Logo />
        <Line />
        {!this.state.containerPlayList && (
          <Colleges
            containerList={this.props.data}
            openVideoPlayerClick={this.openVideoPlayerClick}
          />
        )}
        {!this.state.unhideVideoPlayer && (
          <VideoBox
            title='Ingresar Como Estudiante'
            src='https://s3.us-east-2.amazonaws.com/videoscolegiosgv/ingreso_est_gest.mp4'
          />
        )}
        {this.state.unhideVideoPlayer && (
          <VideoBox
            title={this.state.contentVideoPlayer.title}
            src={this.state.contentVideoPlayer.src}
          />
        )}
      </HomeLayout>
    );
  }
}

export default Home;
