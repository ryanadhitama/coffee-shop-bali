import Head from "next/head";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Hero, Layout, PlaceCard, Skeleton } from "@/components";
import { usePlaces } from "@/libs/hooks/places";

function Home() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const { data: places, loading: placesLoading } = usePlaces({
    name: name,
    location: location,
  });

  const { handleSubmit, register } = useForm({
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
                <option value="">All</option>
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
            {placesLoading &&
              Array(4)
                .fill(1)
                .map((_, idx) => (
                  <Skeleton key={idx} className="home__place-skeleton" />
                ))}
            {places?.map((place: any) => (
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
