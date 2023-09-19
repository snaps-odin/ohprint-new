import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ActionCart, ActionOrder, ActionOrderHistory } from "src/actions";
import { Dispatch } from "redux";
import { useRouter } from "next/router";
import Coupon from "components/member/coupon";
import Delivery from "components/member/delivery";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Estimate from "components/print/estimate";

function Print(props: any) {
  const router = useRouter();

  const {
    query: { type },
  } = router;

  switch (type) {
    case "receipt":
      break;
    case "estimate":
      return <Estimate {...props} />;
    case "trading":
      break;
    case "expenditure":
      break;

    default:
      return null;
  }
}

const mapStateToProps = (state: any, ownerProps: any) => {
  return {
    states: {
      ...ownerProps.states,

      order: state.order,
    },
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    actions: {
      handleRequestOrderPaymentOption: () => dispatch(ActionOrder.requestOrderPaymentOption()),

      handleRequestOrderHistoryTaxByOrderCode: (orderCode: string, receiptType: string) => dispatch(ActionOrderHistory.requestOrderHistoryTaxByOrderCode(orderCode, receiptType)),

      handleRequestCartEstimate: (projectCodes: string) => dispatch(ActionCart.requestCartEstimate(projectCodes)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Print);

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export async function getStaticPaths() {
  const pathList = ["receipt", "estimate", "trading", "expenditure"];

  const paths = pathList.map((item) => `/print/${item}`);

  return {
    paths,
    fallback: true,
  };
}
