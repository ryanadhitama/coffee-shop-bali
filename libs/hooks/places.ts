import useSWR from "swr";
import useQuery from "../utils/qs";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface IPlaces {
  name?: string;
  location?: string;
}

export const usePlaces = (variables: IPlaces) => {
  const qs = useQuery();
  const { name , location } = variables;
  if (name) {
    qs.set("name", name);
  } else {
    qs.set("name", '');
  }
  if (location) {
    qs.set("location", location);
  } else {
    qs.set("location", '');
  }
  const baseUrl = `/api/places?${qs.toString()}`;

  const { data: res, error } = useSWR(baseUrl, fetcher);

  return {
    loading: !res?.data && error,
    data: res?.data || [],
  };
};
