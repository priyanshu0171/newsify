import { useRadioGroup } from "@mui/material";
import { Link } from "react-router-dom";
import ReadNews from "../ReadNews";

export default function NewsCard(props) {
  
  var date = new Date(props.posted).toDateString();
  if (props.author === null) {
    // props.author = "Anonymous";
  }
  return (
    <>

        <div className="card newsCard mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={props.urlToImage}
                className="img-fluid rounded-start"
                alt={props.source}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title">{props.heading}</h6>
                <p className="card-text text-truncate">{props.desc}</p>
                <small className="mt-3">By- {props.author}</small>
                <p className="card-text">
                  <small className="text-muted">{date}</small>
                </p>
              </div>
            </div>
            <Link
              to="/readnews"
              element={{urlToImage: urlToImage}}
              className="stretched-link"
            ></Link>
          </div>
        </div>
    </>
  );
}
