import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import PokemonsPage from "./pages/PokemonsPage";
import Details from "./pages/Details";
import { replacePokemon } from "./store/pokemonSlice";
import { useDispatch } from "react-redux";
import AddPokemon from "./pages/AddPokemon";

export const API_URL = "http://localhost:8080/api/pokemons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/pokemons", element: <PokemonsPage /> },
      { path: "/pokemons/:id", element: <Details /> },
      { path: "/pokemon/add", element: <AddPokemon /> },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error("Could not fetch data!");

        const data = await response.json();
        console.log(data);
        dispatch(replacePokemon(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
