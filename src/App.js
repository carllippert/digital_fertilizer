import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton
} from "react-twitter-embed";
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
  Notes
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";

import FlareComponent from "flare-react";

const flare = require("./images/code_agtech.flr");

const images = {
  logo: require("./images/logo.png")
  // goodWork: require('../assets/good-work.gif')
};

const theme = createTheme();
// {
//   primary: "white",
//   secondary: "#1F2022",
//   tertiary: "#03A9FC",
//   quaternary: "#cccccc"
// },
// {
//   primary: "Montserrat",
//   secondary: "Helvetica"
// }

function App() {
  return (
    <Deck theme={theme} transition={["zoom", "slide"]} transitionDuration={500}>
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
        <Notes>Hi All Immmm Carl .</Notes>
        {/* <Text margin="10px 0 0" textColor="tertiary" fit bold>
          open the presentation/index.js file to get started
        </Text> */}
      </Slide>
      <Slide bgColor="secondary">
        <Image src={images.logo} width={800} />
      </Slide>
      <Slide>
        <Fill>
          <TwitterTweetEmbed tweetId={"1226585357271076870"} />
        </Fill>
      </Slide>
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
      <Slide>
        <Image src={images.logo} width={500} />
      </Slide>
      <Slide>
        <Iframe url="https://feedx.io" width="100%" height="100%" />
      </Slide>
    </Deck>
  );
}

export default App;
