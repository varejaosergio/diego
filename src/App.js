import React from "react";
import PageDefault from "./components/PageDefault";
import BannerMain from "./components/BannerMain";
import data from "./data/dados_iniciais.json";
import Carousel from "./components/Carousel";
import { Container, Typography } from "@material-ui/core";
import Form from "./components/Form/Form";
import Video from "./components/Video";
import SearchBar from "./components/SearchBar/SearchBar";
import youtube from '../src/apis/youtube';


class App extends React.Component {
  onTermSubmit = (term) => {
    console.log(term);      
    youtube.get("/search", {
      params: {
        q: term 
      }
    });
  };

  render() {
    return (
      <PageDefault paddingAll={0}>
        {data.categorias.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={data.videos[0].titulo}
                  url={data.videos[0].url}
                  videoDescription="#Hawaianlife"
                />
                
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

        <Container component="article" maxWidth="sm">
          <Typography
            variant="h4"
            component="h1"
            align="left"
            color="textPrimary"
          > Video Search
          </Typography>
          <SearchBar onSubmit={this.onTermSubmit}/>
        </Container>
        <Video />

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
