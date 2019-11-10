import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Logo from '../components/logo';
import Line from '../components/line';
import Themes from '../components/themes';
import Colleges from '../components/colleges';
import Footer from '../components/footer';
import VideoMediaPlayerContainer from '../containers/video-media-player';
import VideoMediaPlayer from '../components/video-media-player';
import VideoPlayer from './video-player';

class Home extends Component {
  state = {
    hideList: true,
    hidevideo: false
  };

  openClick = containerPlayList => {
    this.setState({
      containerPlayList,
      hideList: false,
      hidevideo: true
    });
  };

  openVideoPlayerClick = contentVideoPlayer => {
    this.setState({
      contentVideoPlayer,
      unhideVideoPlayer: true
    });
  };

  closeVideoPlayerClick = event => {
    this.setState({
      unhideVideoPlayer: false
    });
  };

  render() {
    return (
      <HomeLayout>
        <Logo />
        <Line />
        <Themes themes={this.props.data.colleges} openClick={this.openClick} />
        <Colleges
          containerList={this.state.containerPlayList}
          hidevideo={this.state.hidevideo}
          openVideoPlayerClick={this.openVideoPlayerClick}
        />
        <Footer />
        {this.state.unhideVideoPlayer && (
          <VideoMediaPlayerContainer>
            <VideoMediaPlayer
              closeVideoPlayerClick={this.closeVideoPlayerClick}
            >
              <VideoPlayer
                title={this.state.contentVideoPlayer.title}
                src={this.state.contentVideoPlayer.src}
              />
            </VideoMediaPlayer>
          </VideoMediaPlayerContainer>
        )}
      </HomeLayout>
    );
  }
}

export default Home;
