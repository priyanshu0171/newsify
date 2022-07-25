import { Link } from "react-router-dom";

export default function NewsCard({
  urlToImage,
  source,
  desc,
  heading,
  author,
  posted,

}) {
  var date = new Date(posted).toDateString();
  if (author === null) {
    author = "Anonymous";
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
            <Link to="/readnews"  className="stretched-link"/>
          </div>
        </div>
    </>
  );
}
