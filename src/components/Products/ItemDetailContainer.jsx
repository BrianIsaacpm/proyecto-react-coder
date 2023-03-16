import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from "../../firebaseConfig/contextData";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [useProductById, setProductById] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      getItem(id)
        .then((response) => {
          setProductById(response);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Ocurrio un error: ' + error);
        });
    })();
  }, [id]);

  return <ItemDetail item={useProductById} loading={loading} />;
};

export default ItemDetailContainer;