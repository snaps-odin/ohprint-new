import React, { useEffect } from "react";
import { pageView } from "utils/kakao";
import Banner from "src/pages/layout/banner";
import Util from "src/pages/layout/util";
import { useRouter } from "next/router";
import Gnb from "src/pages/layout/gnb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Header(props: any) {
  const { location, user } = props;
  const router = useRouter();

  useEffect(() => {
    pageView();
  }, []);

  return (
    <div className={`header-wrap`}>
      <Banner user={user} />
      <Util />
      <Gnb />
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default Header;
