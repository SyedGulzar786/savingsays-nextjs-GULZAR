import {GetCouponsByCategory} from "@/src/actions/CouponsAction";
import {notFound} from "next/navigation";
import React from "react";
import {GetAllCategories} from "@/src/actions/CategoriesAction";
import CategoryPage from "./CategoriesPage";

export default async function CategoryPageServer(props) {

    const {data: categories} = await GetAllCategories();

    if (!categories) {
        notFound();
    }

    return (
        <CategoryPage categories={categories} />
    )
}
