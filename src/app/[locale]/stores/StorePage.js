"use client";

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { GetStoreCoupons } from "@/src/actions/CouponsAction";
import { Button } from "react-bootstrap";
import { GetStores } from "@/src/actions/StoresAction";
import Link from "next/link";
import Image from "next/image";

const PopularCategories = dynamic(
  () => import("@/src/components/PopularCategories/PopularCategories"),
  { ssr: false }
);
const PopularStores = dynamic(
  () => import("@/src/components/PopularStores/PopularStores"),
  { ssr: false }
);

export default function StorePage({ initialStores, alphabet }) {
  const [stores, setStores] = useState(initialStores);
  const [hasMoreStores, setHasMoreStores] = useState(true);
  const [currentPage, setCurrentPage] = useState(2);
  const [loading, setLoading] = useState(false);

  const loadMoreStores = async () => {
    if (hasMoreStores) {
      setLoading(true);
      const data = await GetStores(currentPage, alphabet);

      if (data?.meta?.last_page === currentPage) {
        setHasMoreStores(false);
      }

      setStores((prevStores) => [...prevStores, ...data?.data]);
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="container custom_box spacer_code mt-5 pt-5">
        <div className="row spacer">
          <ul className="custom_box_Shadow custom_pd row stores-logo">
            {stores?.map((store) => (
              <li
                key={store.slug}
                className="col-md-3 col-sm-6 col-12 mb-3 d-flex justify-content-center"
              >
                <a
                  className="store-logo"
                  href={`stores/${store.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={
                      store.media?.thumb && store.media?.thumb.length > 0
                        ? store.media?.thumb
                        : "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
                    }
                    alt={store.name}
                    style={{ width: "150px", height: "100px" }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {hasMoreStores && (
            <>
              {stores?.length > 0 && (
                <div className="pagination mt-4 d-flex justify-content-center mb-3 gap-2 loadmore">
                  <Button
                    disabled={loading}
                    onClick={loadMoreStores}
                    variant="info"
                    size="sm"
                  >
                    {loading ? "Load more stores..." : "Load More..."}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px; /* Adjust height as needed */
        }

        .loader-box {
          padding: 20px;
          border: 2px solid #007bff; /* Border color */
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.9); /* Background color */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .loader {
          font-size: 1.5rem;
          color: #007bff; /* Loader text color */
        }
      `}</style>
    </>
  );
}
