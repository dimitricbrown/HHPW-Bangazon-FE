import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL ITEMS
const getAllItems = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET A SINGLE ITEM DETAILS
const getSingleItem = (itemId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/items/${itemId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE AN ITEM
const createItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE AN ITEM
const updateItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/items/${payload.itemId}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// DELETE AN ITEM
const deleteItem = (itemId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/albums/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllItems,
  getSingleItem,
  createItem,
  updateItem,
  deleteItem,
};
