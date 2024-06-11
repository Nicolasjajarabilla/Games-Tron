import { Heading, Link, SkeletonText, VStack,} from "@chakra-ui/react";
import { Genero } from "./Types";


type Props = {
  data: Genero[];
  loading: boolean;
  select: Genero;
  setSelect: (genero: Genero) => void;
};

const selectedProps = {
  color: "red",
  fontWeight: "bold",
};

function SideNav({ data, loading, select, setSelect }: Props) {
  return loading ? (
    <SkeletonText  mt="1" noOfLines={8} spacing="6" skeletonHeight="2"  />
  ) : (
    <>
      <Heading mt={2} fontSize={14} color="blue.400" fontWeight="bold">
        GENERO DE VIDEOJUEGOS
      </Heading>
      <VStack ml={4} mt={4} spacing={4} align="stretch">
        {data.map((g) => (
          <Link
            {...(select.name == g.name && selectedProps)}
            onClick={() => setSelect(g)}
            _hover={{ textDecoration: "none" }}
            key={g.id}
          >
            {g.name}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;
