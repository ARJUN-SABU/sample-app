import { useEffect, useState } from "react";

function GetFetch(url) {
  const [pending, setPending] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPending(false);
          setData(data);
        })
        .catch((err) => console.log(err));
    }, 2000);
  }, []);

  return { data, pending };
}

export default GetFetch;
