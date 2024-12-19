import React from "react";
import { Box, Heading, Text, Image, VStack, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      display="flex"
      flexDirection="column"
    >
      {/* Project Image */}
      <Image src={imageSrc} alt={title} objectFit="cover" height="200px" />

      {/* Card Content */}
      <VStack
        align="start"
        spacing={4}
        p={6}
        flex="1"
        justify="space-between"
      >
        {/* Title */}
        <Heading as="h3" size="md" color="#2D3748">
          {title}
        </Heading>

        {/* Description */}
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>

        {/* See More Link */}
        <HStack spacing={2}>
          <Link color="teal.500" fontWeight="bold" href="#">
            See more
          </Link>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#38B2AC" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
