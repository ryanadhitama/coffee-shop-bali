import Head from "next/head";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Hero, Layout, PlaceCard } from "@/components";
import { usePlaces } from "@/libs/hooks/places";

function Home() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const places = usePlaces({
    name: name,
    location: location,
  });

  const { handleSubmit, register, control, watch, setValue } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (values: any) => {
    setName(values?.name);
    setLocation(values?.location);
  };

  return (
    <>
      <Head>
        <title>Coffee Shop Bali</title>
      </Head>
      <Hero
        title="Home"
        description="Listing coffee shop in Bali"
        content={
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className="home__search">
              <input
                className="form-control"
                placeholder="Type keyword"
                type="text"
                {...register("name")}
              ></input>

              <select {...register("location")} className="form-control">
                <option value=''>All</option>
                <option value="denpasar">Denpasar</option>
              </select>

              <button type="submit">Search</button>
            </Box>
          </form>
        }
      />
      <Box className="container">
        <Box className="home__content">
          <Box className="home__place-grid">
            {places?.data?.map((place: any) => (
              <PlaceCard data={place} key={place.slug} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
