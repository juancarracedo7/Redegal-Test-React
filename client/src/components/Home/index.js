import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { getAllPhones } from "../../redux/actions";
import Header from "../Header";


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
    console.log("que es", infoFilter);
    return infoFilter;
  };

  return (
    <>
    <Header />
    <input type="text" placeholder="Search" onChange={handleInputChange} />
      <button onClick={handleButton}>Search</button>
    <div>
        {data.filter((e) => {
            return (
                e.brand.toLowerCase().includes(search) ||
                e.model.toLowerCase().includes(search)
            )
        }).map((phone) => (
            <Link to={`details/${phone.id}`}>
            <div key={phone.id}>
            <img src={phone.imgUrl} alt={phone.model} />
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