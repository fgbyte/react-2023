//carga Radix
import { Button, Heading, Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Flex } from "@radix-ui/themes";
import { useStore } from "./hooks/useStore";
import "./index.css";
import { ArrowsIcons } from "./components/Icons";
import LanguageSelector from "./components/LanguageSelector";
import { AUTO_LANGUAGE } from "./constants";

const App = () => {
	const {
		fromLanguage,
		toLanguage,
		interchangeLanguages,
		setFormLanguage,
		setToLanguage,
	} = useStore();

	return (
		<Theme accentColor="amber" grayColor="sage" radius="none" appearance="dark">
			<Flex
				as="div"
				direction="column"
				gap="4"
				align="center"
				justify="center"
				height="100dvh"
			>
				<Heading>Google Translate</Heading>
				<Flex direction="row" gap="9">
					<Flex direction="column">
						<LanguageSelector
							type="from"
							value={fromLanguage}
							onChange={setFormLanguage}
						/>
						{fromLanguage}
					</Flex>

					<Flex direction="column" gap="2">
						<Button
							disabled={fromLanguage === AUTO_LANGUAGE}
							onClick={interchangeLanguages}
						>
							<ArrowsIcons />
						</Button>
					</Flex>

					<Flex direction="column" gap="2">
						<LanguageSelector
							type="to"
							value={toLanguage}
							onChange={setToLanguage}
						/>
						{toLanguage}
					</Flex>
				</Flex>
			</Flex>
			{/* <ThemePanel /> */}
		</Theme>
	);
};
export default App;
