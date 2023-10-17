import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL ORDERS
const getAllOrders = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET A SINGLE ORDER DETAILS
const getSingleOrder = (orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE AN ORDER
const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/orders`, {
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

// UPDATE AN ORDER
const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/orders/${payload.orderId}.json`, {
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

// DELETE AN ORDER
const deleteOrder = (orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/albums/${orderId}`, {
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
  getAllOrders,
  getSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
