import React from "react";
import {
  TwitterTweetEmbed,
  TwitterFollowButton,
  TwitterTimelineEmbed
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
  Notes,
  Fit,
  Layout,
  Appear
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";

// import FlareComponent from "flare-react";

const flare = require("./images/code_agtech.flr");

const images = {
  logo: require("./images/feedx.svg"),
  birdsEye: require("./images/birdseyecombine.jpg"),
  landscape: require("./images/agtech_landscape.jpg"),
  animal: require("./images/animalagtechmap.png"),
  section: require("./images/animaltypechart.png"),
  species: require("./images/specieschart.png")
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
    secondary: "Helvetica"
  }
);

function App() {
  return (
    <Deck theme={theme} transition={["slide"]}>
      <Slide
        transition={["zoom"]}
        bgColor="quaternary"
        bgImage={images.birdsEye}
      >
        <Heading
          size={1}
          fit
          lineHeight={1}
          textColor="secondary"
          textFont="secondary"
          style={{ textDecoration: "underline" }}
        >
          The State of AgTech
        </Heading>
        <div style={{ height: "30px" }}></div>
        <Notes>Hi All Immmm Carl .</Notes>
      </Slide>
      <Slide bgImage={images.landscape} />
      <Slide bgImage={images.animal} />
      <Slide bgImage={images.section} />
      <Slide bgImage={images.species} />
      <Slide transition={["zoom"]} bgColor="quaternary">
        <Appear>
          <Heading
            size={1}
            fit
            lineHeight={1}
            textColor="secondary"
            textFont="secondary"
          >
            The Case for AgTech In Wisconsin
          </Heading>
        </Appear>

        <div style={{ height: "30px" }}></div>
        {/* <FlareComponent
          width={700}
          height={650}
          animationName="coding"
          file={flare}
        /> */}
        <Notes>Hi All Immmm Carl .</Notes>
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
        {/* <Iframe url="https://feedx.io" width="100%" height="100%" /> */}
      </Slide>
    </Deck>
  );
}

export default App;
