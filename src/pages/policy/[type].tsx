import React, { useEffect } from "react";
import { getScrollTop } from "utils/scroll";
import { getPosition } from "utils/dom";
import { useRouter } from "next/router";
import { change, Field, reduxForm } from "redux-form";
import { SelectField } from "components/common/fields";
import TermsIndex from "components/policy/terms";
import PrivacyIndex from "components/policy/privacy";
import { ActionUI } from "src/actions";
import { connect } from "react-redux";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Dispatch } from "redux";

type MyObject = {
  terms: { label: string; date: string; value: string }[];
  privacy: { label: string; date: string; value: string }[];
  [key: string]: any; // 추가된 인덱스 시그니처
};

function Policy(props: any) {
  const options: MyObject = {
    terms: [
      { label: "이용약관 (2017.09.04)", date: "2017.09.04", value: "previous-0" },
      { label: "이용약관 (2022.04.11)", date: "2022.04.11", value: "current" },
    ],
    privacy: [
      { label: "개인정보처리방침 (2017.09.04)", date: "2017.09.04", value: "previous-0" },
      { label: "개인정보처리방침 (2018.04.02)", date: "2018.04.02", value: "previous-1" },
      { label: "개인정보처리방침 (2019.08.13)", date: "2019.08.13", value: "previous-2" },
      { label: "개인정보처리방침 (2019.10.01)", date: "2019.10.01", value: "previous-3" },
      { label: "개인정보처리방침 (2019.10.22)", date: "2019.10.22", value: "previous-4" },
      { label: "개인정보처리방침 (2020.03.05)", date: "2020.03.05", value: "previous-5" },
      { label: "개인정보처리방침 (2020.03.05)", date: "2020.03.05", value: "previous-6" },
      { label: "개인정보처리방침 (2021.01.18)", date: "2021.01.18", value: "previous-7" },
      { label: "개인정보처리방침 (2021.06.30)", date: "2021.06.30", value: "previous-8" },
      { label: "개인정보처리방침 (2022.04.11)", date: "2022.04.11", value: "previous-9" },
      { label: "개인정보처리방침 (2022.12.19)", date: "2022.12.19", value: "current" },
    ],
  };

  const router = useRouter();

  const version = options[String(router.query?.type)].find((item: { label: string; date: string; value: string }) => item.value === (props.states.currentForm?.values.version || "current"));

  useEffect(() => {
    const type = router.query.type;
    if (type) {
      Promise.all([props.actions.handleChangeFormValue("version", "current")]).then(() => {
        props.actions.handleUpdateUIScroll(0);
      });
    }
  }, [router.query.type]);

  const onChangeVersion = () => {
    let {
      actions: { handleUpdateUIScroll },
    } = props;

    handleUpdateUIScroll(0);
  };

  const onFocusScroll = (index: number) => {
    const {
      actions: { handleUpdateUIScroll },
    } = props;
    let targetY = getScrollTop() + getPosition(document.getElementById(`section-${index}`)).top;

    handleUpdateUIScroll(targetY);
  };

  const onSubmit = (values: any) => {};

  return (
    <div className="policy-wrap">
      <div className="container">
        <div className="top">
          <div className="top">
            <h1>{String(router.query?.type).match(/terms/i) ? "이용약관" : "개인정보처리방침 "}</h1>
          </div>
          <div className="bottom">
            <h2>{`[ ${String(router.query?.type).match(/terms/i) ? "이용약관" : "개인정보처리방침 "} 시행 일자: ${Object.entries(version || {}).length > 0 && version.date} ]`}</h2>

            {options[String(router.query?.type)].length > 1 && (
              <div>
                <form onSubmit={props.handleSubmit(onSubmit)}>
                  <Field name="version" width="210" options={options[String(router.query?.type)]} onChange={onChangeVersion} component={SelectField} />
                </form>
              </div>
            )}
          </div>
        </div>

        <div className="bottom">
          {React.cloneElement(String(router.query?.type).match(/terms/i) ? <TermsIndex /> : <PrivacyIndex />, {
            actions: {
              handleFocus: onFocusScroll,
            },
            version: props.states.currentForm?.values.version ?? "current",
            showNavigate: true,
          })}
        </div>
      </div>
    </div>
  );
}

const formName = "policy";

const mapStateToProps = (state: any) => {
  return {
    states: {
      currentForm: state.form[formName],
    },
    initialValues: {
      version: "current",
    },
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    actions: {
      handleChangeFormValue: (key: string, value: string) => dispatch(change(formName, key, value)),

      handleUpdateUIScroll: (targetY: string, easingType: string) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),
    },
  };
};

export async function getStaticPaths() {
  //TODO 값 긁어와서 만들기

  const pathList = ["terms", "privacy"];

  const paths = pathList.map((item) => `/policy/${item}`);

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
    enableReinitialize: true,
  })(Policy),
);
