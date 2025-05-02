"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { GetPopularStores } from "@/src/actions/GetPopularAction";

const PopularStores = () => {
  // Define categories array here
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await GetPopularStores();
      setStores(data);
    };
    fetchData();
  }, []);

  return (
    <div className="row flex-wrap align-items-center justify-content-between mt-4">
      {stores &&
        stores.map((store) => (
          <div className='col-lg-6 px-1 my-1 '>
            <img
              // src={store?.media?.thumb}
              className="rounded-3 w-100"
              style={{ height: '108px', objectFit: 'cover' }}
              // alt=""
              src={store?.media?.thumb ?? 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'}
              srcSet={store?.media?.srcSet}
              alt={store?.media?.alt}
              title={store?.media?.title}
            />
          </div>
        ))}
    </div>
  );
};

export default PopularStores;
