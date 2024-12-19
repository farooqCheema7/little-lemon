import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      {/* Avatar */}
      <Avatar
        size="2xl"
        name="Pete"
        src="https://i.pravatar.cc/150?img=7"
      />

      {/* Greeting */}
      <Text fontSize="lg" color="whiteAlpha.800">
        {greeting}
      </Text>

      {/* Role Description */}
      <Heading as="h1" size="xl" color="white" textAlign="center">
        {bio1}
      </Heading>
      <Heading as="h2" size="lg" color="whiteAlpha.900" textAlign="center">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
