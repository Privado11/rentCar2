import axios from "axios";
import React, { useEffect, useState } from "react";

const apiInstance = axios.create({
  baseURL: "https://rentcar-production.up.railway.app/api/v1",
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function ApiRentCar() {
  const [user, setUser] = useState(null);
  const [cars, setCars] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [salesBranch, setSalesBranch] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  useEffect(() => {
    if (token) {
      getReservation(user?.id);
      getSalesBranch();
      getCarsAvailables();
      getUserByEmail(email);
    }
  }, [token]);

  useEffect(() => {
    getReservation(user?.id);
  }, [user]);

  const loginUser = async (data) => {
    try {
      const response = await axios.post(
        "https://rentcar-production.up.railway.app/auth/login",
        data
      );
      const token = response.data;
      localStorage.setItem("token", token);
      setToken(token);
      setEmail(data.email);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  const registerUser = async (data) => {
    try {
      await axios.post(
        "https://rentcar-production.up.railway.app/auth/register",
        data
      );
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const getData = async (endPoint, setters) => {
    try {
      const response = await apiInstance.get(endPoint);
      setters(response.data);
    } catch (error) {
      console.error(`Error al obtener datos de ${endPoint}:`, error);
    }
  };

  const getDataParams = async (endPoint, name, params, setters) => {
    try {
      const response = await apiInstance.get(endPoint, {
        params: { [name]: params },
      });
      setters(response.data);
    } catch (error) {
      console.error(
        `Error al obtener datos de ${endPoint} con ${name}=${params}:`,
        error
      );
    }
  };

  const getDataParams2 = async (endPoint, name, params, params2, setters) => {
    try {
      const response = await apiInstance.get(endPoint, {
        params: { paymentMethod: params, [name]: params2 },
      });
      setters(response.data);
    } catch (error) {
      console.error(
        `Error al obtener datos de ${endPoint} con ${name}=${params2} y paymentMethod=${params}:`,
        error
      );
    }
  };

  const postData = async (endPoint, data) => {
    try {
      await apiInstance.post(endPoint, data);
    } catch (error) {
      console.error(`Error al postear datos a ${endPoint}:`, error.message);
    }
  };

  const putData = async (endPoint, id, data) => {
    try {
      await apiInstance.put(`${endPoint}/${id}`, data);
    } catch (error) {
      console.error(
        `Error al actualizar datos en ${endPoint}/${id}:`,
        error.message
      );
    }
  };

  const deleteData = async (endPoint, id) => {
    try {
      await apiInstance.delete(`${endPoint}/${id}`);
    } catch (error) {
      console.error(`Error al eliminar datos en ${endPoint}/${id}:`, error);
    }
  };

  //cars
  const getCars = () => getData("cars", setCars);
  const getCarsAvailables = () => getData("cars/available", setCars);
  const getCarsAvailablesByCityAndDate = (cityId, startDate, endDate) =>
    getData(
      `cars/availables?cityId=${cityId}&startDate=${startDate}&endDate=${endDate}`,
      setCars
    );
  const saveCar = (car) => postData("cars", car);
  const putCar = (id, car) => putData("cars", id, car);
  const deleteCar = (id) => deleteData("cars", id);
  const getCarById = (id) => getData(`cars/${id}`);

  //Usuarios
  const putUser = (id, user) => putData("users", id, user);
  const deleteUser = (id) => deleteData("users", id);
  const getUserById = (id) => getData(`users/${id}`);
  const getUserByEmail = (email) =>
    getDataParams("users/email", "email", email, setUser);

  //reservations
  const getReservation = (id) =>
    getData(`reservation/user/${id}`, setReservations);
  const saveReservation = (Reservation) => postData("reservation", Reservation);
  const putReservation = (id, Reservation) =>
    putData("reservation", id, Reservation);
  const deleteReservation = (id) => deleteData("reservation", id);

  //SalesBranchs
  const getSalesBranch = () => getData("sales-branches", setSalesBranch);
  const saveSalesBranch = (salesBranch) =>
    postData("sales-branches", salesBranch);
  const putSalesBranch = (id, salesBranch) =>
    putData("sales-branches", id, salesBranch);
  const deleteSalesBranch = (id) => deleteData("sales-branches", id);

  //invoices
  const getInvoices = () => getData("invoices", setInvoices);
  const getInvoiceById = (id) => getData(`invoices/${id}`, setInvoices);
  const saveInvoice = (invoice) => postData("invoices", invoice);
  const putInvoice = (id, invoice) => putData("invoices", id, invoice);
  const deleteInvoice = (id) => deleteData("invoices", id);
  const getInvoiceByYear = (year) =>
    getDataParams("invoices/year", "year", year, setInvoices);
  const getInvoicesByYearAndMonths = (year, months) =>
    getDataParams(`invoices/${year}/months`, "months", months, setInvoices);
  const getInvoiceByPaymentMethod = (paymentMethod) =>
    getDataParams(
      "invoices/payment-method",
      "paymentMethod",
      paymentMethod,
      setInvoices
    );
  const getByPaymentMethodAndMonth = (paymentMethod, month) =>
    getDataParams2(
      "invoices/payment-method",
      "month",
      paymentMethod,
      month,
      setInvoices
    );
  const getByPaymentMethodAndYear = (paymentMethod, year) =>
    getDataParams2(
      "invoices/payment-method",
      "year",
      paymentMethod,
      year,
      setInvoices
    );

  return {
    loginUser,
    registerUser,
    logoutUser,
    cars,
    reservations,
    salesBranch,
    invoices,
    getCars,
    getCarsAvailablesByCityAndDate,
    saveCar,
    putCar,
    deleteCar,
    getCarById,
    user,
    putUser,
    deleteUser,
    getUserById,
    getUserByEmail,
    saveReservation,
    putReservation,
    deleteReservation,
    saveSalesBranch,
    putSalesBranch,
    deleteSalesBranch,
    saveInvoice,
    putInvoice,
    deleteInvoice,
    getInvoiceById,
    getInvoiceByYear,
    getInvoicesByYearAndMonths,
    getInvoiceByPaymentMethod,
    getByPaymentMethodAndMonth,
    getByPaymentMethodAndYear,
  };
}

export { ApiRentCar };
