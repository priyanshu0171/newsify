import { Button } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import Navbar from "./UIComponents/Navbar";

export default function ReadNews() {
  const state = useLocation();
  var data = state.state;
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9 shadow bg-white rounded-3 p-lg-5">
            <h3 className="mb-0">{data.heading}</h3> <br />
            <p>Author: {data.author}</p>
            <div className="text-center">
              <img
                src={data.urlToImage}
                className="w-100"
                height={"500px"}
                alt="News Banner"
              />
            </div>
            <p className="mt-4">
                {data.content}
            </p>
            <Button className="sourceBTN" variant="outlined" target="_blank" elevation="3" title="Source" href={data.url}>Source</Button> <br/><br/>
            <p>Date: {data.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
