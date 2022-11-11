import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { cleanDetails, getDetails, postCart } from "../../redux/actions";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { Button } from "@mui/material";

export default function Details() {
  const data = useSelector((state) => state.details);
  console.log("data", data);
  const dispatch = useDispatch();

  const { id } = useParams();

  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(cleanDetails());
  }, [dispatch]);

  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");
  const payload = { colorCode: color, id: data?.id, storageCode: storage };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleStorage = (e) => {
    setStorage(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(postCart(payload));
  };

  return (
    <>
      <Header />
      <div className={styles.detailsContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img src={data?.imgUrl} alt={data?.model} />
          </div>
        </div>
        <div className={styles.info}>
          <h2>Description</h2>
          <ul>
            <li>Brand : {data?.brand}</li>
            <li>Model : {data?.model}</li>
            <li>Price : {data?.price}€</li>
            <li>CPU : {data?.cpu}</li>
            <li>Ram : {data?.ram}</li>
            <li>Os : {data?.os}</li>
            <li>Resolution : {data?.displayResolution}</li>
            <li>Battery : {data?.battery}</li>
            <li>1 Camera : {data?.primaryCamera}</li>
            <li>2 Camera : {data?.secondaryCmera}</li>
            <li>Dimentions : {data?.dimentions}</li>
            <li>Weight : {data?.weight}</li>
          </ul>
          <div className={styles.selectContainer}>
            <select onChange={handleColor} className={styles.select}>
              {data?.colors?.map((color, index) => (
                <>
                  <option value={"default"} hidden>
                    Color
                  </option>
                  <option value={color} key={color}>
                    {color}
                  </option>
                </>
              ))}
            </select>
            <select onChange={handleStorage} className={styles.select}>
              {data?.internalMemory?.map((storage) => (
                <>
                  <option value={"default"} hidden>
                    Storage
                  </option>
                  <option value={storage} key={storage}>
                    {storage}
                  </option>
                </>
              ))}
            </select>
            <Button variant="contained" onClick={handleClick}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
