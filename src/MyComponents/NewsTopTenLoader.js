import { useState, useEffect } from "react";
import NewsCard from "./UIComponents/NewsCard";
import { Link } from "react-router-dom";
import React from "react";

export default function NewsTopTenLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=pub_95704bc0e29bdeac594059d65f3ad64837da&q=trending`
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
        
        var dataArr = actualData.results;
        setData(dataArr.filter(Boolean));
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
              .filter(data => data.image_url !== null || data.content !== null)
              .map(
                ({
                  source_id,
                  description,
                  title,
                  image_url,
                  pubDate,
                  content,
                  link
                }) => (
                  <div className="col-md-9 ps-0 my-1" key={image_url}>
                    <NewsCard
                      urlToImage={image_url}
                      source={source_id}
                      desc={description}
                      heading={title}
                      author={source_id}
                      posted={pubDate}
                      content={content}
                      url={link}
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
