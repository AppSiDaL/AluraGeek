import { API_URL } from "../config";

const getItems = async () => {
  const response = await fetch(`${API_URL}/items`);
  return response.json();
};

const createItem = async (item)=>{
  const response = await fetch(`${API_URL}/items`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return response.json();
}

const deleteItem = async (id)=>{
  const response = await fetch(`${API_URL}/items/${id}`,{
    method: "DELETE",
  });
  return response.json();
}

export {getItems, createItem, deleteItem}