import React from "react";
import { Grid, Image, Text } from "@chakra-ui/react";

export const List = ({ people }) => {
	return (
		<>
			{people.map((person) => {
				const { id, name, age, image } = person;
				return (
					<Grid
						key={id}
						templateColumns="auto 1fr"
						gap={6}
						mb="1.5rem"
						alignItems="center"
					>
						<Image
							src={image}
							alt={name}
							boxSize="75px"
							objectFit="cover"
							borderRadius="50%"
							boxShadow="lg"
						/>
						<div>
							<Text fontSize="lg" mb="0.35rem">
								<strong>{name}</strong>
							</Text>
							<p>{age} years </p>
						</div>
					</Grid>
				);
			})}
		</>
	);
};
