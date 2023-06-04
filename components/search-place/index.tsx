import React from "react";
import { useForm } from "react-hook-form";
import Box from "../box";

interface SearchPlaceProps {
  setSearch: (name: string, location: string) => void;
}

const SearchPlace: React.FC<SearchPlaceProps> = ({ setSearch }) => {
  const { handleSubmit, register } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (values: any) => {
    setSearch(values?.name, values?.location);
  };

  const options = [
    {
      name: "All",
      value: "",
    },
    {
      name: "Denpasar",
      value: "denpasar",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="home__search">
        <input
          className="form-control"
          placeholder="Type keyword"
          type="text"
          autoComplete="off"
          {...register("name")}
        ></input>
        <select {...register("location")} className="form-control">
          {options?.map((opt) => (
            <option key={opt?.name} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </Box>
    </form>
  );
};

export default SearchPlace;
