import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Logo from '../components/logo';
import Line from '../components/line';
import Themes from '../components/themes';
import Colleges from '../components/colleges';
import Footer from '../components/footer';




class Home extends Component {
    state = {
        listaoculta:false,
    }
    openClick = (event) =>{
        this.setState({
            listaoculta: true,
        })
    }

    render(){
        return(
            <HomeLayout>
                <Logo/>
                <Line/>
                <Themes 
                    themes={this.props.data.colleges}
                    openClick={this.openClick}
                />
                <Colleges colleges={this.props.data.colleges} listaoculta={this.state.listaoculta}/>
                <Footer/>
            </HomeLayout>
        )
    }
}

export default Home;