import { useRouter } from 'next/router';

const Champion = () => {
  const router = useRouter();
  const { championName } = router.query;

  return <p>Post: {championName}</p>;
};

export default Champion;
