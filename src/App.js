import './App.css'
import React from "react";
import PageDefault from "./components/PageDefault";
import BannerMain from "./components/BannerMain";
import data from "./data/dados_iniciais.json";
import Carousel from "./components/Carousel";
import { Container, Typography } from "@material-ui/core";
import Form from "./components/Form/Form";

import SearchBar from "./components/SearchBar/SearchBar";
import youtube from '../src/apis/youtube';
import VideoList from "./components/VideoList";
import VideoDetail from './components/VideoDetail';
import About from './components/About';


class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('surf');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term 
      }
    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <PageDefault className="pageDefault" paddingAll={0}>
        {data.categorias.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={data.videos[0].titulo}
                  url={data.videos[0].url}
                  videoDescription="#Hawaianlife"
                />
                <About/>
                
                <Carousel
                  ignoreFirstVideo
                  category={data.categorias[0]}
                  videos={data.videos}
                />
              </div>
            );
          }

          return <Carousel key={categoria.id} category={categoria} />;
        })}

        <div className="searchBar ui container">
          <h3>Choose your video</h3>
          <SearchBar onSubmit={this.onTermSubmit}/>
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide collumn">
              <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect} 
                  videos={this.state.videos} 
                />
              </div>
            </div>
          </div>
        </div>

        <Container component="article" maxWidth="sm">
          <Typography
            variant="h4"
            component="h1"
            align="center"
            color="textPrimary"
          >
            Make an appointment here
          </Typography>
          <Form onSubmit={onSubmitForm} />
        </Container>
      </PageDefault>
    );
  }
}

function onSubmitForm(data) {
  console.log(data);
}

export default App;
