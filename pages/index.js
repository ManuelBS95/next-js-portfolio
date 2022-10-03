import { Box, Heading, Link, ButtonGroup, Icon } from "@chakra-ui/react"
import Layout from "../components/layout.js"
import InstagramIcon from "@mui/icons-material/Instagram"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const Home = () => {
	return (
		<Layout>
			<Box
				minH="calc(100vh - 75px)"
				maxW="100%"
				display="flex"
				alignItems="center"
			>
				<Box>
					<Heading
						textAlign="center"
						fontWeight="600"
						fontSize="4xl"
						color="#fff"
					>
						Howdy,
					</Heading>
					<Heading
						textAlign="center"
						fontWeight="600"
						fontSize="4xl"
						color="#72e2ae"
					>
						I&apos;m Manuel Benites
					</Heading>
					<Box textAlign="center" mt="20px" color="#bfbecb">
						I am a Frontend Web Developer building the Frontend of Websites and
						Web Applications.
					</Box>
					<Box display="flex" justifyContent="center" color="#bfbecb" mt="20px">
						<ButtonGroup variant="outline">
							<Link href="#" isExternal>
								<Box
									mx="2"
									color="#bfbecb"
									transition=".2s"
									_hover={{
										color: "#72e2ae",
										transform: "scale(1.1)",
									}}
								>
									<Icon as={InstagramIcon} fontSize="xl" />
								</Box>
							</Link>
							<Link href="#" isExternal>
								<Box
									mx="2"
									color="#bfbecb"
									transition=".2s"
									_hover={{
										color: "#72e2ae",
										transform: "scale(1.1)",
									}}
								>
									<Icon as={LinkedInIcon} fontSize="xl" />
								</Box>
							</Link>
							<Link href="#" isExternal>
								<Box
									mx="2"
									color="#bfbecb"
									transition=".2s"
									_hover={{
										color: "#72e2ae",
										transform: "scale(1.1)",
									}}
								>
									<Icon as={GitHubIcon} fontSize="xl" />
								</Box>
							</Link>
						</ButtonGroup>
					</Box>
				</Box>
			</Box>
		</Layout>
	)
}

export default Home
