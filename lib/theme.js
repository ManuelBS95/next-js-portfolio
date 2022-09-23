import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
	fonts: { heading: "Montserrat", body: "Poppins" },
	styles: {
		global: {
			body: {
				overflow: "auto",
				"::-webkit-scrollbar": { w: "16px" },
				"::-webkit-scrollbar-track": { bg: "#0E121B" },
				"::-webkit-scrollbar-thumb": {
					bg: "#7F889A",
					border: "4px",
					borderColor: "#0E121B",
					borderRadius: "10px",
				},
			},
		},
	},
})

export default theme
