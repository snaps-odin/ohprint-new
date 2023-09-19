import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import Coupon from "components/member/coupon";
import Delivery from "components/member/delivery";
import Cart from "components/member/cart";
import Profile from "components/member/profile";
import Withdraw from "components/member/withdraw";
import Benefit from "components/member/benefit";
import Order from "components/member/order";

function Member(props: any) {
  const router = useRouter();

  const {
    query: { type },
  } = router;

  switch (type) {
    case "profile":
      return <Profile {...router.query} />;
    case "coupon":
      return <Coupon {...router.query} />;
    case "order":
      return <Order {...router.query} />;
    case "delivery":
      return <Delivery {...router.query} />;
    case "cart":
      return <Cart {...router.query} />;
    case "withdraw":
      return <Withdraw {...router.query} />;
    case "benefit":
      return <Benefit  {...router.query} />;

    default:
      return null;
  }
}
export default Member

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export async function getStaticPaths() {
  const pathList = ["cart", "coupon", "order", "delivery", "profile", "withdraw", "benefit"];

  const paths = pathList.map((item) => `/member/${item}`);

  return {
    paths,
    fallback: true,
  };
}
