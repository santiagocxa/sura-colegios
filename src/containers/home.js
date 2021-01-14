import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Logo from '../components/logo';
import Line from '../components/line';
import Themes from '../components/themes';
import Colleges from '../components/colleges';
import VideoBox from '../components/video-box';

class Home extends Component {
  state = {
    hideList: true
  };

  openClick = containerPlayList => {
    this.setState({
      containerPlayList,
      hideList: false
    });
  };

  openVideoPlayerClick = contentVideoPlayer => {
    this.setState({
      contentVideoPlayer,
      unhideVideoPlayer: true
    });
  };

  render() {
    return (
      <HomeLayout>
        <Logo />
        <Line />
        <Themes themes={this.props.data.colleges} openClick={this.openClick} />
        {!this.state.containerPlayList && (
          <Colleges
            containerList={this.props.data.colleges[0]}
            openVideoPlayerClick={this.openVideoPlayerClick}
          />
        )}
        <Colleges
          containerList={this.state.containerPlayList}
          openVideoPlayerClick={this.openVideoPlayerClick}
        />
        {!this.state.unhideVideoPlayer && (
          <VideoBox
            title="Capacitación Virtual De 50 Horas Del SGSST"
            src="https://contenidosdigitalessura.com/videosura/cgr/curso_50_horasintro.mp4"
            muted={true}
          />
        )}
        {this.state.unhideVideoPlayer && (
          <VideoBox
            title={this.state.contentVideoPlayer.title}
            src={this.state.contentVideoPlayer.src}
            muted={true}
          />
        )}
      </HomeLayout>
    );
  }
}

export default Home;
