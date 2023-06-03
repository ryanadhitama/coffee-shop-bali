import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const usePlaces = () => {
  const baseUrl = "/api/places";
  const { data: res, error } = useSWR(baseUrl, fetcher);

  return {
    loading: !res?.data && error,
    data: res?.data || [],
  };
};
