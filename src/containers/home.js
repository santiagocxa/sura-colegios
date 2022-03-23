import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Logo from '../components/logo';
import Line from '../components/line';
import Colleges from '../components/colleges';
import VideoBox from '../components/video-box';
import Video from '../components/video';
import Title from '../components/title';

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
        <Colleges
          containerList={this.props.data}
          openVideoPlayerClick={this.openVideoPlayerClick}
        />
        {!this.state.unhideVideoPlayer && (
          <VideoBox>
            <Video src='https://s3.us-east-2.amazonaws.com/videoscolegiosgv/ingreso_est_gest.mp4' />
            <Title title={'Ingresar Como Estudiante'} />
          </VideoBox>
        )}
        {this.state.unhideVideoPlayer && (
          <VideoBox>
            <Video src={this.state.contentVideoPlayer.src} />
            <Title title={this.state.contentVideoPlayer.title} />
          </VideoBox>
        )}
      </HomeLayout>
    );
  }
}

export default Home;
