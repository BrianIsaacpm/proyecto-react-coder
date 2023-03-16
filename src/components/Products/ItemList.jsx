import Item from "./Item";

const ItemList = ({ item }) => {
  return item.map((item) => <Item item={item} key={item.id} />);
};
export default ItemList;