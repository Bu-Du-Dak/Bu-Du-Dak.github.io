import axios from 'axios';
import ListUI from './list.presenter';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const List = () => {
    const router = useRouter()
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_API}/posts/`)
        .then(result => setData(result.data.results));
    } catch (e) {
      console.log(e);
    }
  };
  const deleteData = async (id: string) => {
    try {
      await axios
        .delete(`${process.env.NEXT_PUBLIC_API}/posts/${id}`)
        .then(() => {
          getData();
          alert('완료');
        });
    } catch (e) {
      console.log(e);
    }
  };
  const onClickEdit = (id:string) => {
    router.push(`/admin/${id}`)
  }
  useEffect(() => {
    getData();
  }, []);
  return <ListUI data={data} deleteData={deleteData} onClickEdit={onClickEdit} />;
};
export default List;
