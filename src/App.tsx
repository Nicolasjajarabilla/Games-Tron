import { Grid, GridItem } from "@chakra-ui/react";
import Headers from "./Components/Headers";
import SideNav from "./Components/SideNav";
import MainContent from "./Components/MainContent";
import useHttpsData from "./Components/Hooks/useHttpsData";
import { Games, Genero, SearchForm} from "./Components/Types";
import { useState } from "react";
import axios from "axios";
const baseUrl = "https://api.rawg.io/api/";
const API_KEY = "10fdaa13600648b1adbd04d3f9f92aba";

const url = `${baseUrl}genres?key=${API_KEY}`;

const listGamesUrl = `${baseUrl}games?key=${API_KEY}`;

function App() {



  const { data, loading } = useHttpsData<Genero>(url);

  const [select, setSelect] = useState<Genero>({
    id: 4,
    name: "Action",
  });

  const {
    loading: loadingGames,
    data: dataGames,
    setLoading: setLoadingGames,
    setData: setDataGames,
  } = useHttpsData<Games>(listGamesUrl);

  const searchApi = (searchForm: SearchForm) => {
    const url = `${baseUrl}games?key=${API_KEY}&search=${searchForm.search}`;
    setLoadingGames(true);
    axios
      .get<{ results: Games[] }>(url)
      .then(({ data }) => setDataGames(data.results))
      .finally(() => setLoadingGames(false));
  };


  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
      >
        <GridItem
          boxShadow="lg"
          zIndex={1}
          pos="sticky"
          top="0px"
          pt="2"
          bg="gray.700"
          area={"header"}
        >
          <Headers onSubmit={searchApi}></Headers>
        </GridItem>
        <GridItem
          overflowY={"auto"}
          position="sticky"
          top="60px"
          left={0}
          padding={5}
          area={"nav"}
          height="calc(100vh - 60px)"
        >
          <SideNav
            select={select}
            setSelect={setSelect}
            data={data}
            loading={loading}
          ></SideNav>
        </GridItem>
        <GridItem p={4} bg="gray.300" area={"main"}>
          <MainContent loading={loadingGames} games={dataGames}></MainContent>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
