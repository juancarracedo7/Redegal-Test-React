import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "../../redux/actions";
import { useParams } from "react-router-dom";

export default function Details() {
  const data = useSelector((state) => state.details);
  console.log("data", data);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <div>
      <div>
        <img src={data.imgUrl} alt={data.model} />
      </div>
      <div>
        <ul key={data.id}>
          <li>{data.brand}</li>
          <li>{data.model}</li>
          <li>{data.price}</li>
          <li>{data.cpu}</li>
          <li>{data.ram}</li>
          <li>{data.os}</li>
          <li>{data.displayResolution}</li>
          <li>{data.battery}</li>
          <li>{data.primaryCamera}</li>
          <li>{data.secondaryCmera}</li>
          <li>{data.dimentions}</li>
          <li>{data.weight}</li>
        </ul>
      </div>
      </div>
    </>
  );
}
