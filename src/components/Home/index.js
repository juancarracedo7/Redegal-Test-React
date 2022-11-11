import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { getAllPhones } from "../../redux/actions";
import Header from "../Header";
import styles from "./Home.module.css";


export default function Home() {
    const data = useSelector((state) => state.phones);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPhones())
    }, [dispatch]);
console.log(data)

const [search, setSearch] = useState("");
  console.log("search", search);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleButton = (e) => {
    e.preventDefault();

   const infoFilter = data.filter((el) => {
      return (
        el.brand.toLowerCase().includes(search) ||
        el.model.toLowerCase().includes(search)
      );
    });
    console.log("infoFilter", infoFilter);
    return infoFilter;
  };

  return (
    <>
    <Header />
    <div className={styles.header}>
        <h1>List View</h1>
        <div>
        <TextField id="outlined-basic" label="Search" variant="outlined" size="small" onChange={handleInputChange} />
          <Button style={{marginLeft: "15px"}} variant="contained" onClick={handleButton}>Search</Button>
        </div>
      </div>
    <div className={styles.cardContainer}>
        {data.filter((e) => {
            return (
                e.brand.toLowerCase().includes(search.toLocaleLowerCase()) ||
                e.model.toLowerCase().includes(search.toLocaleLowerCase())
            )
        }).map((phone) => (
            <Link className={styles.cardLink} to={`details/${phone.id}`}>
            <div className={styles.card} key={phone.id}>
            <img  src={phone.imgUrl} alt={phone.model} />
            <h1>{phone.brand}</h1>
            <h2>{phone.model}</h2>
            <h3>{phone.price}</h3>
            </div>
            </Link>
        ))}
    </div>
    </>
  )
}