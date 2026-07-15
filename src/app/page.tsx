'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Link,
  Icon,
  SimpleGrid,
  Card,
} from '@chakra-ui/react'
import { LuMoon, LuSun, LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ColorModeButton() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <Button variant="ghost" size="sm" visibility="hidden" />

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle color mode"
    >
      {resolvedTheme === 'dark' ? <LuSun /> : <LuMoon />}
    </Button>
  )
}

function Navbar() {
  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={10}
      bg="bg"
      borderBottomWidth="1px"
      borderColor="border"
      backdropFilter="blur"
    >
      <Container maxW="6xl" py={3}>
        <Flex justify="space-between" align="center">
          <Heading size="md" fontWeight="bold">
            AMR<span style={{ color: 'var(--chakra-colors-red-500)' }}>.</span>
          </Heading>
          <HStack gap={4}>
            <Link href="#about" fontSize="sm" _hover={{ color: 'blue.500' }}>
              About
            </Link>
            <Link href="#skills" fontSize="sm" _hover={{ color: 'blue.500' }}>
              Skills
            </Link>
            <Link href="#projects" fontSize="sm" _hover={{ color: 'blue.500' }}>
              Projects
            </Link>
            <Link href="#contact" fontSize="sm" _hover={{ color: 'blue.500' }}>
              Contact
            </Link>
            <ColorModeButton />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

function Hero() {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} textAlign="center">
      <Container maxW="3xl">
        <VStack gap={6}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Hi, I'm{' '}
            <Text as="span" color="blue.500">
              Mohammad Amr
            </Text>
          </Heading>
          <Text fontSize="xl" color="fg.muted" maxW="2xl">
            Full-Stack Web Developer specializing in building digital solutions
            that improve efficiency and scale operations.
          </Text>
          <HStack gap={4}>
            <Button asChild colorPalette="blue" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Supabase',
  'MySQL',
  'CodeIgniter',
]

function Skills() {
  return (
    <Box as="section" id="skills" py={16}>
      <Container maxW="6xl">
        <Heading size="lg" mb={8}>
          Tech Stack
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
          {skills.map((skill) => (
            <Card.Root
              key={skill}
              p={4}
              textAlign="center"
              _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
              transition="all 0.2s"
            >
              <Text fontWeight="semibold">{skill}</Text>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const projects = [
  {
    title: 'Intramurals System',
    description:
      'A web-based system for managing intramural sports events, including team registration, scheduling, and score tracking.',
    status: 'Completed' as const,
  },
  {
    title: 'StudyHub',
    description:
      'A booking and scheduling platform for study rooms, allowing users to reserve spaces for studying and group work.',
    status: 'Ongoing' as const,
  },
]

function Projects() {
  return (
    <Box as="section" id="projects" py={16}>
      <Container maxW="6xl">
        <Heading size="lg" mb={8}>
          Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {projects.map((project) => (
            <Card.Root key={project.title} p={6}>
              <VStack align="start" gap={3}>
                <Heading size="md">{project.title}</Heading>
                {project.status === 'Ongoing' && (
                  <Text color="yellow.500" fontSize="sm">
                    Ongoing
                  </Text>
                )}
                <Text color="fg.muted">{project.description}</Text>
              </VStack>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

function Contact() {
  return (
    <Box as="section" id="contact" py={16}>
      <Container maxW="2xl" textAlign="center">
        <Heading size="lg" mb={4}>
          Get In Touch
        </Heading>
        <Text color="fg.muted" mb={8}>
          I'm open to opportunities and collaborations.
        </Text>
        <HStack justify="center" gap={6}>
          <Button asChild variant="ghost">
            <a href="mailto:pangandamanamr@gmail.com">
              <Icon as={LuMail} mr={2} />
              Email
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="https://github.com/Pangandaman" target="_blank" rel="noreferrer">
              <Icon as={LuGithub} mr={2} />
              GitHub
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Icon as={LuLinkedin} mr={2} />
              LinkedIn
            </a>
          </Button>
        </HStack>
      </Container>
    </Box>
  )
}

function Footer() {
  return (
    <Box as="footer" py={8} borderTopWidth="1px" borderColor="border">
      <Container maxW="6xl" textAlign="center">
        <Text color="fg.muted" fontSize="sm">
          &copy; {new Date().getFullYear()} AMR Portfolio. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}

export default function Home() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  )
}
