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
					<Heading textAlign="center" fontWeight="600" fontSize="4xl">
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
					<Box textAlign="center" mt="20px">
						I am a frontend web developer. I can provide clean code and pixel
						perfect design. I also make website more & more interactive with web
						animations.
					</Box>
					<Box display="flex" justifyContent="center" color="#bfbecb" mt="20px">
						<ButtonGroup variant="outline">
							<Link href="#" isExternal>
								<Box
									display="flex"
									justifyContent="center"
									alignItems="center"
									borderRadius="sm"
									border="1px"
									borderColor="#3F444E"
									w="40px"
									h="40px"
									color="#bfbecb"
									transition="0.2s"
									_hover={{
										borderColor: "#72e2ae",
										bg: "#72e2ae",
										color: "#0E121B",
									}}
								>
									<Icon as={InstagramIcon} fontSize="lg" />
								</Box>
							</Link>
							<Link href="#" isExternal>
								<Box
									display="flex"
									justifyContent="center"
									alignItems="center"
									borderRadius="sm"
									border="1px"
									borderColor="#3F444E"
									w="40px"
									h="40px"
									color="#bfbecb"
									transition="0.2s"
									_hover={{
										borderColor: "#72e2ae",
										bg: "#72e2ae",
										color: "#0E121B",
									}}
								>
									<Icon as={LinkedInIcon} fontSize="lg" />
								</Box>
							</Link>
							<Link href="#" isExternal>
								<Box
									display="flex"
									justifyContent="center"
									alignItems="center"
									borderRadius="sm"
									border="1px"
									borderColor="#3F444E"
									w="40px"
									h="40px"
									color="#bfbecb"
									transition="0.2s"
									_hover={{
										borderColor: "#72e2ae",
										bg: "#72e2ae",
										color: "#0E121B",
									}}
								>
									<Icon as={GitHubIcon} fontSize="lg" />
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
