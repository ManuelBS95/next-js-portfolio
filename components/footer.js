import { Box, Icon } from "@chakra-ui/react"
import InstagramIcon from "@mui/icons-material/Instagram"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const Footer = () => {
	return (
		<Box
			zIndex="1"
			position="fixed"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			backdropFilter="blur(10px)"
			w="100%"
			bottom="0"
			px={["20px", "20px", "40px", "60px"]}
			py="30px"
		>
			<Box fontSize={["xs", "xs", "sm"]}>© Manuel 2020</Box>
			<Box display="flex" alignItems="center">
				<Box display="flex" alignItems="center">
					<Icon
						as={InstagramIcon}
						fontSize={["md", "md", "lg", "xl"]}
						cursor="pointer"
						transition="0.2s"
						_hover={{ transform: "scale(1.2)", color: "#3369FF" }}
					/>
				</Box>
				<Box display="flex" alignItems="center" ml={["15px", "30px", "30px"]}>
					<Icon
						as={GitHubIcon}
						fontSize={["md", "md", "lg", "xl"]}
						cursor="pointer"
						transition="0.2s"
						_hover={{ transform: "scale(1.2)", color: "#3369FF" }}
					/>
				</Box>
				<Box display="flex" alignItems="center" ml={["15px", "30px", "30px"]}>
					<Icon
						as={LinkedInIcon}
						fontSize={["md", "md", "lg", "xl"]}
						cursor="pointer"
						transition="0.2s"
						_hover={{ transform: "scale(1.2)", color: "#3369FF" }}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default Footer
