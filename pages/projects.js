import { Text, Box, Heading, Image, List, ListItem } from "@chakra-ui/react"
import Layout from "../components/layout.js"

import LaunchIcon from "@mui/icons-material/Launch"
import GitHubIcon from "@mui/icons-material/GitHub"

const dataProjects = [
	{
		id: "mb1",
		title: "Real Notes App",
		description:
			"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
		tech: ["NodeJs", "React", "Tailwindcss"],
		image: "/images/image1.jpg",
	},
	{
		id: "mb2",
		title: "Music Player App",
		description:
			"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
		tech: ["React", "Tailwindcss"],
		image: "/images/image2.jpg",
	},
	{
		id: "mb3",
		title: "Youtube Clone",
		description:
			"A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
		tech: ["React", "Tailwindcss"],
		image: "/images/image3.jpg",
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
								<List display="flex" fontSize="xs" fontFamily="Fira Code">
									{item.tech.map((skill) => {
										return (
											<ListItem key={skill} mb="1" mr="3">
												{skill}
											</ListItem>
										)
									})}
								</List>
								<Box></Box>
							</Box>
						</Box>
					)
				})}
			</Box>
		</Layout>
	)
}

export default Projects
