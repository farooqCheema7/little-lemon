import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const prevScrollY = useRef(0);

  // Handle smooth scrolling
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Hide/show header based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > prevScrollY.current ? "down" : "up");
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${scrollDirection === "down" ? "-200px" : "0"})`}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          {/* Social Media Links */}
          <nav>
            <HStack spacing={6}>
              {socials.map((social, index) => (
                <Link key={index} href={social.url} isExternal>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </Link>
              ))}
            </HStack>
          </nav>

          {/* Internal Navigation Links */}
          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick("projects")} _hover={{ textDecoration: "none" }}>
                Projects
              </Link>
              <Link onClick={handleClick("contactme")} _hover={{ textDecoration: "none" }}>
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
