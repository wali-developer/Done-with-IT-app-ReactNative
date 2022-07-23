import client from "./client";

const endPoint = "/listings";

const getListings = () => client.get(endPoint);

const addListings = async (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  await client.post(endPoint, data);
};

export default {
  getListings,
  addListings,
};
