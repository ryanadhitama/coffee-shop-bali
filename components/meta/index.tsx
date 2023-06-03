interface IMeta {
  title: string;
  description: string;
  image: string;
}

const Meta = ({ title, description, image }: IMeta) => {
  return (
    <>
      <meta name="description" content={`${description}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://coffee-shop-bali.vercel.app" />
      <meta property="og:title" content={`${title} - Coffee Shop Bali`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://coffee-shop-bali.vercel.app/"
      />
      <meta property="twitter:title" content={`${title} - Coffee Shop Bali`} />
      <meta property="twitter:description" content={`${description}`} />
      <meta property="twitter:image" content={image} />
    </>
  );
};

export default Meta;
