import { Box } from "@chakra-ui/react"
import Navbar from "./navbar.js"

const Layout = ({ children }) => {
	return (
		<Box minH="100vh" bg="#0E121B" display="flex" justifyContent="center">
			<Navbar />
			<Box
				__css={{
					"&::-webkit-scrollbar-thumb": {
						bg: "gray.100",
					},
				}}
				pt="75px"
				px={["20px", "20px", "40px", "60px"]}
				minH="100vh"
			>
				{children}
			</Box>
		</Box>
	)
}

export default Layout
