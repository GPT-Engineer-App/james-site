import { Box, Flex, Heading, Text, Button, Image, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" maxW="1200px" m="auto">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585076800527-972613dc816c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxKYW1lcyUyME1vbnJvZXxlbnwwfHx8fDE3MTM4NzIxOTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="James Monroe" mb={4} />
        <Heading as="h1" size="xl" mb={2}>
          James Monroe
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Software Developer | Tech Enthusiast
        </Text>
        <HStack spacing={4} mt={4}>
          <Link href="https://linkedin.com/in/jamesmonroe" isExternal>
            <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/jamesmonroe" isExternal>
            <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray">
              GitHub
            </Button>
          </Link>
          <Link href="mailto:james.monroe@example.com">
            <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="red">
              Email
            </Button>
          </Link>
        </HStack>
        <VStack spacing={5} mt={10} textAlign="center">
          <Text fontSize="xl">Passionate about building scalable software and creating effective solutions that improve the lives of users worldwide.</Text>
          <Text fontSize="xl">With over 5 years of experience in full-stack development, I have a proven track record of delivering high-quality software on time and on budget.</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
