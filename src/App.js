import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
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
  Fill,
  Notes,
  Layout,
  Appear
} from "spectacle";

import createTheme from "spectacle/lib/themes/default";

import FlareComponent from "flare-react";

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
  rantizo: require("./images/rantizo.jpg"),
  glass: require("./images/googleGlass.jpg"),
  feedMill: require("./images/mil.jpg"),
  strings: require("./images/strings.jpg"),
  productDetail: require("./images/productDetail.png"),
  map: require("./images/map.png"),
  code: require("./images/feedx_code.png"),
  investment: require("./images/investment.png"),
  twitCarl: require("./images/carl.png"),
  twitFeedX: require("./images/feedxtwitter.png"),
  usOfD: require("./images/unitedstatesofdairy.jpeg"),
  graphql: require("./images/graphql.png"),
  untapped: require("./images/untapped.png"),
  last: require("./images/last.png"),
  fax: require("./images/fax.jpg"),
  feedmanager: require("./images/feedmngr.png"),
  feedmanagerWeb: require("./images/feedmngrweb.png")
};

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#f2f2f2",
    quaternary: "#cccccc"
  },
  {
    primary: "Montserrat",
    secondary: "Montserrat"
  }
);

function App() {
  return (
    <Deck theme={theme} transition={["slide"]}>
      <Slide bgColor="quaternary" bgImage={images.birdsEye}>
        <Heading
          size={2}
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
      <Slide>
        <Image src={images.investment} />
        <Notes>
          Mention Indigo Ag -> $600million raised = Terraton Initiative FBN ->
          $300m raised -> farm group buying and transparency. The new coop.
        </Notes>
      </Slide>
      {/* Some of my favorite companies */}
      {/* Small Robot Co */}
      <Slide>
        <Heading
          size={2}
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
      {/* Goterra */}
      <Slide>
        <Heading
          size={2}
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
      <Slide bgColor="secondary">
        <Image src={images.logo} width={800} />
      </Slide>
      {/* Why */}
      <Slide>
        <Heading
          size={2}
          lineHeight={1}
          textColor="secondary"
          textFont="secondary"
        >
          What are we solving?
        </Heading>
        <Layout>
          <Fill>
            <Image src={images.feedMill} />
          </Fill>
          <Fill>
            <Image src={images.glass} />
          </Fill>
        </Layout>
      </Slide>
      {/* What */}
      <Slide>
        <Image src={images.strings} />
      </Slide>
      <Slide>
        <Image src={images.graphql} />
      </Slide>
      <Slide>
        <Image src={images.productDetail} />
      </Slide>
      <Slide>
        <Layout>
          <Fill>
            <TwitterTweetEmbed tweetId={"1135944683681722375"} />
          </Fill>
          <Fill align="center center">
            <Image src={images.feedmanager} />
          </Fill>
        </Layout>
      </Slide>
      <Slide bgImage={images.map}></Slide>
      <Slide align="center center">
        <Image src={images.fax} />
      </Slide>

      {/* How */}
      <Slide>
        <Heading
          size={1}
          lineHeight={1}
          textColor="secondary"
          textFont="secondary"
        >
          More specificly.
        </Heading>
        <List>
          <ListItem>Nutrition Data</ListItem>

          <ListItem>Market Data</ListItem>

          <ListItem>Financing</ListItem>

          <ListItem>Logistics</ListItem>

          <ListItem>Communication & Data Sharing</ListItem>
        </List>
        <Notes></Notes>
      </Slide>
      {/* How Tech*/}
      <Slide bgColor="tertiary">
        <Image src={images.code} height={700} width={1000} />
      </Slide>
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

      {/* Density */}
      <Slide>
        <Heading
          size={1}
          lineHeight={1}
          textColor="secondary"
          textFont="secondary"
        >
          Density 🧀
        </Heading>
        <List>
          <ListItem>Cheese - 2x any other state</ListItem>

          <ListItem>Dairies - 8,000 </ListItem>

          <ListItem>Cranberries - 62% of nations crop</ListItem>

          <ListItem>Top Ginseng State</ListItem>
        </List>
        <Notes>
          Dairy --- 8,000 Dairy Farms 43.4 billion to the economy 215,000 full
          time jobs. Other ---- 62% of nations cranberrry crop 5.55 million
          barrels 1200 licensed cheesmakers - Nearly double in cheese of any
          other state. Wisconsin ranks first in the nation for: snap beans for
          processing, cheese, cranberries, ginseng, mink pelts, dry whey for
          humans, milk goats and corn for silage
        </Notes>
      </Slide>
      <Slide>
        <Image src={images.usOfD} />
      </Slide>

      {/* Organization Knowledge */}
      <Slide>
        <Heading
          size={1}
          lineHeight={1}
          textColor="secondary"
          textFont="secondary"
        >
          Knowledge
        </Heading>
        <List>
          <ListItem>The farmers</ListItem>

          <ListItem>The Universities</ListItem>

          <ListItem>Businesses</ListItem>

          <ListItem>Trade Orgs</ListItem>
        </List>
        <Notes>
          People -> Culturally jarring to go from madison to somewhere else (
          this is good ){/*  */}
          Farmers -> Thousands of translaters
          {/*  */}
          The Universities -> 6th highest R&D spend in the country Business ->
          Proximity to huge "markets" -> Chicago
        </Notes>
      </Slide>

      <Slide>
        <Layout>
          <Fill>
            <Image src={images.untapped} />
          </Fill>

          <div style={{ width: "50px", height: "50px" }}></div>
          <Appear>
            <Fill>
              <Image src={images.last} />
            </Fill>
          </Appear>
        </Layout>
      </Slide>

      {/* Real Struggle */}
      <Slide bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote> We wanted flying cars, instead we got 140 characters.</Quote>
          <Cite>Peter Thiel</Cite>
        </BlockQuote>
      </Slide>
      <Slide bgColor="secondary" textColor="primary">
        <Fill>
          <Image src={images.logo} />
        </Fill>
        <Layout>
          <Fill>
            <List>
              <ListItem>Twitter -> @carllippert</ListItem>
              <ListItem>FeedX -> feedx.io</ListItem>
              <ListItem>FeedsForLess -> feedsforless.com</ListItem>
              <ListItem>Feed Manager -> feedmanager.io</ListItem>
              <ListItem>
                Slides -> carllippert.github.io/digital_fertilizer
              </ListItem>
            </List>
          </Fill>
        </Layout>
        <Notes>These are all customers</Notes>
      </Slide>
    </Deck>
  );
}

export default App;
