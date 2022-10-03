import { useRef } from "react"
import {
	Box,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	Link,
	Icon,
	useDisclosure,
} from "@chakra-ui/react"
import NextLink from "next/link"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"

const navLinks = [
	{ name: "Home", route: "/" },
	{ name: "About", route: "about" },
	{ name: "Projects", route: "projects" },
	{ name: "Contact", route: "contact" },
]

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()
	return (
		<Box
			position="fixed"
			w="100%"
			px={["20px", "20px", "40px", "60px"]}
			zIndex="100"
			bg="#0E121B"
		>
			<Box
				h="100%"
				color="#72e2ae"
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				py="24px"
			>
				<Box fontWeight="bold" fontSize="xl" textTransform="uppercase">
					Manuel
				</Box>
				<Box display={["none", "none", "flex"]} h="100%">
					{navLinks.map((item) => {
						return (
							<Box key={item.name} h="100%">
								<NextLink href={item.route}>
									<Link
										fontWeight="500"
										fontSize="sm"
										color="#fafafa"
										ml="10"
										textTransform="uppercase"
										_hover={{ textDecoration: "none" }}
									>
										{item.name}
									</Link>
								</NextLink>
							</Box>
						)
					})}
				</Box>
				<Box
					display={["block", "block", "none"]}
					ref={btnRef}
					onClick={onOpen}
					variant="none"
					color="#72e2ae"
					w="24px"
					h="24px"
					cursor="pointer"
					transition="0.3s"
					_focus={{ border: "none" }}
				>
					<Icon as={MenuOutlinedIcon} />
				</Box>
				<Drawer
					size="full"
					isOpen={isOpen}
					placement="left"
					onClose={onClose}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent
						bg="#0E121B"
						pr="20px"
						pt="24px"
						display="flex"
						justifyContent="center"
					>
						<Box
							onClick={onClose}
							cursor="pointer"
							position="absolute"
							right={["20px", "20px", "40px", "60px"]}
							top="27px"
						>
							<Icon as={CloseOutlinedIcon} color="#72e2ae" />
						</Box>
						<Box
							w="100%"
							fontSize="20px"
							display="flex"
							flexDirection="column"
							alignItems="center"
						>
							{navLinks.map((navlink) => {
								return (
									<Box
										key={navlink.name}
										my="15px"
										transition="0.3s"
										position="relative"
									>
										<NextLink href={navlink.route}>
											<Link
												color="#fafafa"
												textTransform="uppercase"
												_hover={{
													textDecoration: "none",
													color: "#72e2ae",
												}}
												fontWeight="500"
											>
												{navlink.name}
											</Link>
										</NextLink>
									</Box>
								)
							})}
						</Box>
					</DrawerContent>
				</Drawer>
			</Box>
		</Box>
	)
}

export default Navbar
