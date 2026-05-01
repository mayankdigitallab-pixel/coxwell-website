import type { Metadata } from "next";
import { ProductsIndex } from "@/components/products/ProductsIndex";

export const metadata: Metadata = {
  title: "Products — Coxwell",
  description: "Seven polycarbonate panel systems across two families: Innovative and Traditional.",
};

export default function ProductsPage() {
  return <ProductsIndex />;
}

