import { useRadioGroup } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ReadNews from "../ReadNews";

export default function NewsCard({
  author,
  posted,
  urlToImage,
  heading,
  desc,
  source,
  content,
  url
}) {
  const navigate = useNavigate();
  var date = new Date(posted).toDateString();
  if (author === null) {
    author = "Anonymous";
  } 
  if (urlToImage === null) {
    urlToImage = "https://img.freepik.com/premium-vector/modern-minimal-found-error-icon-oops-page-found-404-error-page-found-with-concept_599740-716.jpg?w=2000";
  }
  const navigateHandler = () => {
    navigate("/readnews", {
      state: {
        urlToImage: urlToImage,
        desc: desc,
        date: date,
        heading: heading,
        author: author,
        source: source,
        content: content,
        url: url
      },
    });
  }
  

  return (
    <>
      <div className="card newsCard mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={urlToImage}
              className="img-fluid rounded-start"
              alt={source}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">{heading}</h6>
              <p className="card-text text-truncate">{desc}</p>
              <small className="mt-3">By- {author}</small>
              <p className="card-text">
                <small className="text-muted">{date}</small>
              </p>
            </div>
          </div>
          <a
            className="stretched-link"
            onClick={navigateHandler}
          ></a>
        </div>
      </div>
    </>
  );
}
