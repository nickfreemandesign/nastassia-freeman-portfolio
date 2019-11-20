import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Router, navigate } from "@reach/router"
// import ReactGA from 'react-ga';
// import Loadable from 'react-loadable';

// import components
import Home from './components/Home'
import Image from './components/ImageView'
// import Loading from './components/Loading'

// const Applications = Loadable({
//   loader: () => import('./components/Applications'),
//   loading: Loading,
//   timeout: 10000
// });

const AppContainer = styled.div`
  width: 100%;
  background-color: black;
  margin: -10px;
`;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      currImg: null,
    }

    this.handleToggleImage = this.handleToggleImage.bind(this)
    // this.fireTracking = this.fireTracking.bind(this)
  }

  componentWillMount() {
    axios.get(`https://spreadsheets.google.com/feeds/list/13Nm0Pv0A0CJgIU5AR-eeILYyxjYERkr1nZizxcxc_9s/od6/public/values?alt=json`)
        .then( resp => {
          let siteData = resp.data.feed.entry.map((item, idx) => {
            return {
              id          : idx,
              name        : item.gsx$name.$t,
              description : item.gsx$description.$t,
              thumb       : item.gsx$thumb.$t,
              full        : item.gsx$full.$t,
              tags        : item.gsx$tags.$t.split(',')
            }
            })
            console.log(siteData)
            this.setState({data: siteData})
          })
  }

  handleToggleImage (imgData) {
    if (!imgData.name) {
      navigate(`/`)
    } else {
      this.setState({ currImg: imgData }, ()=>{
        navigate(`/view/${imgData.name.split(' ').join('-')}`)
      })
    }
  }

  // fireTracking(pageName) {
  //   ReactGA.pageview(pageName);
  // }

  render() {
    return (
      <AppContainer>
        {
          this.state.data 
            ? (
                <Router>

                    <Home 
                      path='/'
                      data={this.state.data}
                      toggleImg={this.handleToggleImage} 
                      />

                    <Image 
                      path='/view/:imageName'
                      toggleImg={this.handleToggleImage} 
                      currImg={this.state.currImg}
                      />
                      
                </Router>
              )
            : null 
        }
      </AppContainer>
    )
  }
}

