import React, { useState } from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { List } from "./List";
import { data } from "../data";

export function App() {
	const [people, setPeople] = useState(data);
	return (
		<Flex
			minH="100vh"
			bg="#F56565
"
			direction="column"
			justify="center"
			align="center"
		>
			<Box
				w="90vw"
				m="5rem 0"
				maxW="450px"
				bg="#fff"
				rounded="md"
				p="1.5rem 2rem"
				boxShadow="dark-lg"
			>
				<Text fontSize="xl" mb="2rem">
					{people.length} birthdays today
				</Text>
				<List people={people} />
				<Button
					fontSize="lg"
					w="100%"
					colorScheme="pink"
					onClick={() => setPeople([])}
				>
					Clear All
				</Button>
			</Box>
		</Flex>
	);
}
