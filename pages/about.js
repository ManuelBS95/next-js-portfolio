import { Box, Text, Heading, Grid, GridItem, Icon } from "@chakra-ui/react"
import Layout from "../components/layout.js"
import CircleIcon from "@mui/icons-material/Circle"

const skillntools = [
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
				>
					about
				</Heading>
			</Box>
			<Box color="#bfbecb">
				<Text>
					Hello! my name is Manuel, a web developer. When I&apos;m not
					connected, I love to listen to music and practice calisthenics
				</Text>
				<Box mt="4" color="#bfbecb">
					<Text>Technologies that I have applied in my projects:</Text>
				</Box>
			</Box>
			<Grid mt="5" gap="3" templateColumns="repeat(2, minmax(140px, 200px))">
				{skillntools.map((item) => {
					return (
						<GridItem key={item} display="flex" alignItems="center">
							<Icon as={CircleIcon} fontSize="8px" mr="15px" color="#72e2ae" />
							<Text fontSize="xs" fontFamily="Fira Code" color="#bfbecb">
								{item}
							</Text>
						</GridItem>
					)
				})}
			</Grid>
		</Layout>
	)
}

export default About
