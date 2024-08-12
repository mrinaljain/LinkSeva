import React, { useEffect } from "react";
import { useParams } from "react-router";
import { GET_LINK } from "../utils/constants/api";

function Visitor() {
  const params = useParams();

  const short_link = params.link;
  const getLink = async () => {
    try {
      const response = await fetch(`${GET_LINK}${short_link}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === true) {
        console.log(data.data.url);

        window.location.href = data.data.url;
      } else {
        console.log("Try again");
      }
    } catch (error) {}
  };
  useEffect(() => {
    getLink();
  });

  return (
    <>
      <h1>Hello World..!</h1>
    </>
  );
}

export default Visitor;
