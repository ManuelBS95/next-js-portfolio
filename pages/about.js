import { Box, Text, Heading, Tag } from "@chakra-ui/react"
import Layout from "../components/layout.js"

const skillntools = [
	"HTML",
	"CSS",
	"JavaScript",
	"React",
	"Neovim",
	"Nodejs",
	"MongoDB",
	"MySQL",
]

const About = () => {
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
					about me
				</Heading>
				<Heading
					position="absolute"
					fontSize="8xl"
					opacity=".1"
					textTransform="uppercase"
					color="#fafafa"
				>
					about
				</Heading>
			</Box>
			<Box
				display="grid"
				gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
				gridGap="5"
			>
				<Box color="#bfbecb" fontSize="sm" mb="4">
					<Text>
						Hello! my name is Manuel, a front-end developer located in Peru.
						When I&apos;m not connected. I love to listen to music and practice
						calisthenics.
					</Text>
				</Box>
				<Box>
					<Box color="#bfbecb" fontSize="sm" mb="8">
						<Text>Technologies that I have applied in my projects:</Text>
					</Box>
					<Box display="flex" flexWrap="wrap">
						{skillntools.map((item) => {
							return (
								<Tag key={item} mr="4" mb="3" size="lg">
									<Text fontSize="xs">{item}</Text>
								</Tag>
							)
						})}
					</Box>
				</Box>
			</Box>
		</Layout>
	)
}

export default About
