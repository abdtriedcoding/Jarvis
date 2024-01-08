import NextTopLoader from "nextjs-toploader";

const TopLoaderBar = () => {
  return (
    <NextTopLoader
      color="#2299DD"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      easing="ease"
      speed={200}
      showAtBottom={false}
    />
  );
};

export default TopLoaderBar;
