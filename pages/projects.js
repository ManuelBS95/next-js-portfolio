import {
	Text,
	Box,
	Heading,
	Image,
	List,
	ListItem,
	Icon,
	Link,
} from "@chakra-ui/react"
import Layout from "../components/layout.js"

import LaunchIcon from "@mui/icons-material/Launch"
import GitHubIcon from "@mui/icons-material/GitHub"

const dataProjects = [
	{
		id: "mb1",
		title: "Notes App",
		description:
			"Web application to create and save notes built with react, nodejs and mongodb. ",
		tech: ["NodeJS", "Express", "React", "Tailwindcss", "Neovim"],
		image: "/images/image1.jpg",
		github: "https://github.com/ManuelBS95/notesapp-mongodb-react-node",
		page: "",
	},
	{
		id: "mb2",
		title: "Music Player App",
		description:
			"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
		tech: ["React", "Tailwindcss"],
		image: "/images/image2.jpg",
		github: "",
		page: "",
	},
	{
		id: "mb3",
		title: "Trivia Game",
		description:
			"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
		tech: ["JavaScript", "HTML5", "CSS3"],
		image: "/images/project1.jpg",
		github: "https://github.com/ManuelBS95/Trivia-Game",
		page: "https://manuelbs95.github.io/Trivia-Game/",
	},
]

const Projects = () => {
	return (
		<Layout>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="20"
				mt="8"
				mb="10"
				position="relative"
				overflow="hidden"
			>
				<Heading textTransform="uppercase" color="#fafafa">
					Projects
				</Heading>
				<Heading
					position="absolute"
					fontSize="8xl"
					opacity=".1"
					textTransform="uppercase"
				>
					Projects
				</Heading>
			</Box>
			<Box w="100%">
				{dataProjects.map((item) => {
					return (
						<Box
							key={item.id}
							position="relative"
							overflow="hidden"
							borderRadius="sm"
							boxShadow="lg"
							borderWidth="1px"
							borderColor="#181D29"
							mb="10"
						>
							<Image
								src={item.image}
								objectFit="cover"
								position="absolute"
								minH="100%"
								minW="100%"
							/>
							<Box
								position="absolute"
								w="100%"
								h="100%"
								top="0"
								background="#0E121B"
								opacity=".8"
							></Box>
							<Box position="relative" display="block" p="8" zIndex="1">
								<Text fontFamily="Fira Code" fontSize="xs" my="2">
									Featured Project
								</Text>
								<Heading mb="2">{item.title}</Heading>
								<Box py="5" position="relative">
									<Text fontSize="sm">{item.description}</Text>
								</Box>
								<List
									display="flex"
									fontSize="xs"
									flexWrap="wrap"
									fontFamily="Fira Code"
								>
									{item.tech.map((skill) => {
										return (
											<ListItem key={skill} mb="1" mr="3">
												{skill}
											</ListItem>
										)
									})}
								</List>
								<Box display="flex" alignItems="center" gap="4" mt="4">
									<Link href={item.github} isExternal _focus={{ border: "0" }}>
										<Icon fontSize="xl" as={GitHubIcon} />
									</Link>
									<Link href={item.page} isExternal _focus={{ border: "0" }}>
										<Icon fontSize="xl" as={LaunchIcon} />
									</Link>
								</Box>
							</Box>
						</Box>
					)
				})}
			</Box>
		</Layout>
	)
}

export default Projects
