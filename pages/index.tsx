import { gql } from '@apollo/client';
import { InferGetServerSidePropsType } from 'next';
import client from '../apollo-client';
import Card from '../components/Card';

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const { loading, error, data } = useQuery(GET_BREEDS);
  return (
    <div className={''}>
      <div className='flex flex-wrap justify-center  mx-10 md:mx-36 my-4 max-w-auto'>
        {data &&
          data?.CatBreeds.map((cat: any) => <Card key={cat.id} cat={cat} />)}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { loading, error, data } = await client.query({
    query: gql`
      query CatBreeds {
        CatBreeds {
          id
          name
          image {
            url
            success
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};

export default Home;
