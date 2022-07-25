import { useState, useEffect } from "react";
import NewsCard from "./UIComponents/NewsCard";
import { Link } from "react-router-dom";

export default function NewsTopTenLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=69176d80491a48f3a34d45200430acc0`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        var dataArr = actualData.articles;
        setData(dataArr);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="container mt-4 p-4">
        <h3>Trending Now</h3>
        {loading && (
          <div className="">
            <div className="spinner-border"></div>
          </div>
        )}
        {error && (
          <div className="text-danger">{`There is problem fetching the post - ${error}`}</div>
        )}
        <div className="row">
          {data &&
            data
              .slice(0, 10)
              .map(
                ({
                  source,
                  author,
                  description,
                  title,
                  urlToImage,
                  publishedAt,
                }) => (
                  <div className="col-md-9 ps-0 my-1" key={urlToImage}>
                    <NewsCard
                      urlToImage={urlToImage}
                      source={source.name}
                      desc={description}
                      heading={title}
                      author={author}
                      posted={publishedAt}
                    />
                  </div>
                )
              )}

          <Link className="" to="allnews">
            Load More
          </Link>
        </div>
      </div>
    </>
  );
}
