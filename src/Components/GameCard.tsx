import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { Games } from "./Types";

type Props = {
  games: Games;
};

function GameCard({ games }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card boxShadow="">
        <CardBody>
          <Image
            src={games.background_image}
            alt={games.name}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{games.name}</Heading>
            <UnorderedList>
              <ListItem>Fecha de lanzamiento: {games.released}</ListItem>
              <ListItem>
                Plataformas: {games.platforms[0].platform.name}
              </ListItem>
              <ListItem>Valoracion: {games.metacritic}</ListItem>
            </UnorderedList>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button onClick={onOpen}>View information</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Informacion</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image
                  alt={games.name}
                  width="100%"
                  borderRadius="lg"
                  src={games.background_image}
                />
                <Heading>{games.name}</Heading>
                <UnorderedList>
                  <ListItem>Reating: {games.rating}</ListItem>
                  <ListItem>Adicionales: {games.added}</ListItem>
                  <ListItem>Tiempo de juego: {games.playtime}hs</ListItem>
                </UnorderedList>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </CardFooter>
      </Card>
    </>
  );
}

export default GameCard;
