import React from "react";
// import {
//   TwitterTweetEmbed,
//   TwitterFollowButton,
//   TwitterTimelineEmbed
// } from "react-twitter-embed";
import YouTube from "react-youtube";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  Fill,
  Notes,
  Fit,
  Layout,
  Appear
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";

import FlareComponent from "flare-react";
import ImageSlide from "./components/ImageSlide";

const flare = require("./images/code_agtech.flr");

const images = {
  logo: require("./images/feedx.svg"),
  birdsEye: require("./images/birdseyecombine.jpg"),
  landscape: require("./images/agtech_landscape.jpg"),
  animal: require("./images/animalagtechmap.png"),
  section: require("./images/animaltypechart.png"),
  species: require("./images/specieschart.png"),
  dick: require("./images/DickRobot.jpg"),
  goterra: require("./images/Goterra.jpeg"),
  rantizo: require("./images/rantizo.jpg")
};

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#cccccc"
  },
  {
    primary: "Montserrat",
    secondary: "Montserrat"
    // secondary: "Helvetica"
  }
);

const Spacer = () => <div style={{ height: "0px" }} />;

function App() {
  return (
    <Deck theme={theme} transition={["slide"]}>
      <Slide
        transition={["zoom"]}
        bgColor="quaternary"
        bgImage={images.birdsEye}
      >
        <Heading
          size={2}
          // fit
          lineHeight={1}
          textColor="secondary"
          textFont="secondary"
          style={{ textDecoration: "underline" }}
        >
          The State of AgTech
        </Heading>
        <div style={{ height: "30px" }}></div>
      </Slide>
      {/* Landscape */}
      <Slide bgImage={images.landscape} />
      {/* Increase in VC funding  */}
      {/* Some of my favorite companies */}
      {/* Small Robot Co */}
      <Slide>
        <Heading
          size={2}
          // fit
          lineHeight={1}
          textColor="secondary"
          textFont="secondary"
        >
          Small Robot Company
        </Heading>
        <Image src={images.dick} />
      </Slide>
      <Slide>
        <YouTube
          videoId={"tnaN7FlPfEo"}
          opts={{
            height: "700",
            width: "1000",
            playerVars: { autoplay: 1 }
          }}
        />
      </Slide>
      {/* Rantizo */}
      <Slide>
        <Heading
          size={2}
          // fit
          lineHeight={1}
          textColor="secondary"
          textFont="secondary"
        >
          Rantizo
        </Heading>
        <Image src={images.rantizo} />
      </Slide>
      <Slide>
        <YouTube
          videoId={"KPRhrDOiGvc"}
          opts={{
            height: "700",
            width: "1000",
            playerVars: { autoplay: 1 }
          }}
        />
      </Slide>
      {/* FBN */}
      {/* Goterra */}
      <Slide>
        <Heading
          size={2}
          // fit
          lineHeight={1}
          textColor="secondary"
          textFont="secondary"
        >
          Goterra
        </Heading>
        <Image src={images.goterra} />
      </Slide>
      <Slide>
        <YouTube
          videoId={"pyU3faF-8ak"}
          opts={{
            height: "700",
            width: "1000",
            playerVars: { autoplay: 1, start: 16 }
          }}
        />
      </Slide>
      {/* FeedX! */}
      {/* Why */}
      {/* What */}
      {/* How */}
      {/* How Tech */}
      {/* Why Wisconsin */}
      <Slide transition={["zoom"]} bgColor="quaternary">
        <Heading
          size={1}
          fit
          lineHeight={1}
          textColor="secondary"
          textFont="secondary"
        >
          The Case for AgTech In Wisconsin
        </Heading>

        <div style={{ height: "30px" }}></div>
        <FlareComponent
          width={700}
          height={650}
          animationName="coding"
          file={flare}
        />
      </Slide>
      <Slide bgColor="secondary">
        <Image src={images.logo} width={800} />
      </Slide>
      {/* Density */}
      {/* Organization Knowledge */}
      {/* Customers */}
      {/* Real Struggle */}
      {/* Barriers */}
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={6} textColor="primary" caps>
          Typography
        </Heading>
        <Heading size={1} textColor="secondary">
          Heading 1
        </Heading>
        <Heading size={2} textColor="secondary">
          Heading 2
        </Heading>
        <Heading size={3} textColor="secondary">
          Heading 3
        </Heading>
        <Heading size={4} textColor="secondary">
          Heading 4
        </Heading>
        <Heading size={5} textColor="secondary">
          Heading 5
        </Heading>
        <Text size={6} textColor="secondary">
          Standard text
        </Text>
      </Slide>
      <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
          Standard List
        </Heading>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </Slide>
      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote>All models are wrong, but some are useful.</Quote>
          <Cite>George Box</Cite>
        </BlockQuote>
      </Slide>
      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote> We wanted flying cars, instead we got 140 characters.</Quote>
          <Cite>Peter Thiel</Cite>
        </BlockQuote>
      </Slide>

      <Slide>
        {/* <Iframe url="https://feedx.io" width="100%" height="100%" /> */}
      </Slide>
    </Deck>
  );
}

export default App;
