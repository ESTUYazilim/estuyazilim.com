import * as React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ImageComponent from "./ImageComponent";
import TitleComponent from "./TitleComponent";
import ParagraphComponent from "./ParagraphComponent";
import Markdown from "markdown-to-jsx/dist/index.js";
import slide1 from "../../slides/slide1.md";
import slide2 from "../../slides/slide2.md";
import slide3 from "../../slides/slide3.md";

export default function SliderCarousel(props) {
  const [slides, setSlides] = React.useState([]);

  React.useEffect(() => {
    async function fetchSlides() {
      const _slide1 = await fetch(slide1)
        .then((res) => res.text())
        .then((text) => text);
      const _slide2 = await fetch(slide2)
        .then((res) => res.text())
        .then((text) => text);
      const _slide3 = await fetch(slide3)
        .then((res) => res.text())
        .then((text) => text);
      setSlides([_slide1, _slide2, _slide3]);
    }
    fetchSlides();
  }, []);
  return (
    <Carousel
      sx={{
        marginX: 8,
      }}>
      {slides.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      sx={{
        minHeight: "75vh",
        padding: 5,
      }}>
      <Markdown
        style={{ height: "60vh", width: "100%", backgroundColor: "white" }}
        options={{
          overrides: {
            h1: TitleComponent,
            p: ParagraphComponent,
            img: ImageComponent,
          },
        }}>
        {props.item}
      </Markdown>
    </Paper>
  );
}
