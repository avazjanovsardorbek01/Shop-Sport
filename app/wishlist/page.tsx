"use client";
import { useEffect } from "react";
import useWishlistStore from "@/store/wishlist-store";
import { CaruselCard } from "@/components/ui/card";

const WishlistPage = () => {
  const { datawishlist, getAllWishlist } = useWishlistStore();

  useEffect(() => {
    getAllWishlist({ page: 1, limit: 100 });
  }, []);

  return (
    <div className="bg-[#f2f2f2]">
      <div className="flex gap-3 flex-wrap container mb-4">
        {datawishlist.map((item) => (
          <CaruselCard
            key={item.product_id}
            productData={item}
            cardUI={{ text: "", bg: "" }}
            isliked={true}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
