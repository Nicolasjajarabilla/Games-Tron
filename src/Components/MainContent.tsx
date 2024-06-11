import { SimpleGrid } from "@chakra-ui/react";
import { Games } from "./Types";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  loading: boolean;
  games: Games[];
};

function MainContent({ loading, games}: Props) {
  const skeleton = [1,2,3,4,5,6,7,8]
  return (
    <>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {loading && skeleton.map((skeleton) => <SkeletonCard key={skeleton} />)}
        {games.map((g) => (
          <GameCard key={g.id} games={g}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default MainContent;
