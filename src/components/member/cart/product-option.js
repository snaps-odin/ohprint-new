import React from "react";
import update from "react-addons-update";
import { Field } from "redux-form";

import { getDeepValue, isEmpty } from "utils/json";
import * as Validate from "utils/validate";

import { InputField, SelectField } from "components/common/fields";

export default class CartProductOption extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      storeOptionType: "",
      defaults: null,
      options: null,
      essentials: null,
      ready: false,
    };

    this.enables = null;

    this.field = {
      engraveText: "",
    };

    this.onClickCancelChange = this.onClickCancelChange.bind(this);
    this.onClickUpdateChange = this.onClickUpdateChange.bind(this);

    this.onChangeOption = this.onChangeOption.bind(this);
  }

  onClickCancelChange(event) {
    let {
      actions: { handleCancelEditOption, handleChangeFormValue },
      field,
    } = this.props;

    Promise.all([handleCancelEditOption()]).then(() => {
      Object.keys(this.field).map((keyName) => {
        handleChangeFormValue(`${field}.${keyName}`, this.field[keyName]);
      });
    });
  }

  onClickUpdateChange(event) {
    let { states, actions, index, fieldsName, value } = this.props;
    let { essentials, options } = this.state;

    let { currentForm } = states;
    let currentValues = getDeepValue(currentForm, `values.${fieldsName}.${index}`) || {};
    let { option, engraveText } = currentValues;

    let { handleUpdateCartOptionByProjectCode, handleCancelEditOption, handleUpdateEditOption, handleOpenAlertLayer } = actions;
    let { projectCode, productCode, templateCode } = value;

    let params = (essentials || []).reduce((target, item) => {
      let { keyName, value } = item;

      target[keyName] = value;

      return target;
    }, Object.assign({ productCode, templateCode, engraveText }, option));

    let changed = (options || []).reduce((target, option) => {
      let { isParent, keyName, child: children } = option;

      target += !Object.is(params[keyName], String(this.getDefaults(target, isParent, children))) || !Object.is(engraveText, this.field["engraveText"]) ? 1 : 0;

      return target;
    }, 0);

    changed
      ? handleUpdateCartOptionByProjectCode(projectCode, params)
          .then((result) => {
            let values = Object.assign({}, result, { selected: value["selected"] });

            values && handleUpdateEditOption(values);
          })
          .catch((error) => {
            handleOpenAlertLayer({
              description: error,
            });
          })
      : handleCancelEditOption();
  }

  onChangeOption(keyName, value, isWild) {
    let { states, actions, index, fieldsName, field } = this.props;
    let { defaults, options } = this.state;
    let { currentForm } = states;
    let { handleChangeFormValue } = actions;

    let currentValues = getDeepValue(currentForm, `values.${fieldsName}.${index}.option`);

    let values = (options || []).reduce(
      (target, option) => {
        let { isParent, keyName, child: children } = option;

        if (isParent) {
          target[keyName] = currentValues[keyName];
        } else {
          let matched = (children || []).find((child) => Object.is(child["value"], currentValues[keyName]));

          target[keyName] = !!(matched && (matched["parentCodeList"] || []).includes(target[matched["parentKeyName"]])) ? currentValues[keyName] : this.getDefaults(target, false, children);
        }

        return target;
      },
      (defaults || []).reduce((target, item) => {
        let { keyName, value } = item;

        target[keyName] = value;

        return target;
      }, {}),
    );

    new Promise((resolve) => {
      !isWild
        ? this.getEnables(values).then((result) => {
            resolve(result);
          })
        : resolve({ values });
    })
      .then((result) => {
        let { values, enables } = result;

        return this.getWildEnables(values, enables, !isWild);
      })
      .then((result) => {
        let { values, enables } = result;

        !isWild && (this.enables = enables);

        !isWild && handleChangeFormValue(`${field}.option`, values);
      })
      .then(() => {
        return this.requestByOption();
      });
  }

  normalize(value, previousValue) {
    return value
      .replace(/[^a-zA-Z.,]/gi, "")
      .toUpperCase()
      .slice(0, 5);
  }

  getDefaults(source, isParent, children) {
    let filtered = (children || []).filter((child) => {
      let { parentKeyName, parentCodeList } = child;

      return isParent ? true : (parentCodeList || []).includes(source[parentKeyName]);
    });

    let selectedChild = (filtered || []).find((item) => item["isSelect"]);

    return getDeepValue(selectedChild || filtered[0], "value") || null;
  }

  getEnables(values) {
    let { options } = this.state;

    let editValues = Object.assign({}, values);

    return new Promise((resolve) => {
      let enables = (options || []).reduce((target, option) => {
        let { keyName, child: children, isParent, isWild } = option;

        !isParent &&
          !isWild &&
          (target[keyName] = (children || []).reduce((target, child) => {
            let { parentKeyName, parentCodeList, value } = child;

            (parentCodeList || []).includes(editValues[parentKeyName]) && target.push(value);

            return target;
          }, []));

        return target;
      }, {});

      resolve({
        values: editValues,
        enables,
      });
    });
  }

  getWildEnables(values, enables, isRequestEnable) {
    let { actions, category, value } = this.props;
    let { handleRequestStoreOptionEnable } = actions;
    let { storeOptionType, options } = this.state;

    let hasWild = (options || []).findIndex((option) => option["isWild"]) !== -1;

    let editValues = Object.assign({}, values);

    return new Promise((resolve) => {
      hasWild && isRequestEnable
        ? handleRequestStoreOptionEnable(category, storeOptionType, values).then((result) => {
            Object.keys(result).reduce((target, keyName) => {
              let option = (options || []).find((option) => Object.is(option["keyName"], keyName));
              let noneCode = getDeepValue(
                (getDeepValue(option, "child") || []).find((child) => child["attribute"].match(/NONE/i)),
                "value",
              );
              let selectedCode = getDeepValue(
                (getDeepValue(option, "child") || []).find((child) => child["isSelect"]),
                "value",
              );

              !editValues[keyName] && (editValues[keyName] = (result[keyName] || []).includes(noneCode) ? noneCode : (result[keyName] || []).includes(selectedCode) ? selectedCode : getDeepValue(result[keyName], "0") || null);

              return target;
            }, []);

            resolve({
              values: editValues,
              enables: Object.assign({}, enables, result),
            });
          })
        : resolve({
            values: editValues,
            enables,
          });
    });
  }

  getOptions(option) {
    let { keyName, child: children, isParent } = option;

    let enables = getDeepValue(this.enables, `${keyName}`) || [];

    return !(!isParent && enables.length > 0) ? children : children.filter((child) => enables.includes(child["value"]));
  }

  initialize(storeOptionType) {
    let { actions, category, field, value } = this.props;
    let { handleRequestStoreDefault, handleRequestStoreOptions, handleChangeFormValue } = actions;
    let { projectCode } = value;

    return Promise.all([handleRequestStoreDefault(category, storeOptionType), handleRequestStoreOptions(category, storeOptionType, projectCode)])
      .then((results) => {
        let defaults = results[0];
        let options = (results[1] || []).reduce((target, option) => {
          let { child: children } = option;

          let isParent = !getDeepValue(children, "0.parentKeyName");
          let isWild = getDeepValue(children, "0.parentKeyName") === "*";

          target.push(Object.assign({}, option, { isParent, isWild }));

          return target;
        }, []);

        return new Promise((resolve) => {
          this.setState(
            update(this.state, {
              storeOptionType: { $set: storeOptionType },
              defaults: { $set: defaults },
              options: { $set: options },
              ready: { $set: true },
            }),
          );

          resolve({ defaults, options });
        });
      })
      .then((result) => {
        let { defaults, options } = result;

        let values = (options || []).reduce(
          (target, option) => {
            let { isParent, keyName, child: children } = option;

            target[keyName] = this.getDefaults(target, isParent, children);

            return target;
          },
          (defaults || []).reduce((target, item) => {
            let { keyName, value } = item;

            target[keyName] = value;

            return target;
          }, {}),
        );

        return values;
      })
      .then((values) => {
        return this.getEnables(values);
      })
      .then((result) => {
        let { values, enables } = result;

        return this.getWildEnables(values, enables, true);
      })
      .then((result) => {
        let { values, enables } = result;

        this.enables = enables;

        Object.keys(this.field).map((keyName) => {
          this.field[keyName] = value[keyName];
        });

        handleChangeFormValue(`${field}.option`, values);
      })
      .then(() => {
        return this.requestByOption();
      });
  }

  requestByOption() {
    let {
      states,
      actions,
      category,
      index,
      fieldsName,
      field,
      value: { projectCode },
    } = this.props;
    let { currentForm } = states;
    let { handleRequestStoreEssential } = actions;
    let { storeOptionType } = this.state;

    let params = Object.assign({}, getDeepValue(currentForm, `values.${fieldsName}.${index}.option`) || {});

    if (category && category === "sticker") {
      params = Object.assign({}, params, { projectCode: projectCode });
    }

    return handleRequestStoreEssential(category, storeOptionType, params)
      .then((essentials) => {
        params = (essentials || []).reduce((target, item) => {
          let { keyName, value } = item;

          target[keyName] = value;

          return target;
        }, params);

        return { essentials };
      })
      .then((result) => {
        let { essentials } = result;

        this.setState(
          update(this.state, {
            essentials: { $set: essentials },
          }),
        );
      });
  }

  componentDidMount() {
    let {
      actions: { handleRequestStoreOptionType, handleOpenAlertLayer },
      value: { productCode },
    } = this.props;

    handleRequestStoreOptionType(productCode)
      .then((result) => {
        let { storeOptionType } = result;

        storeOptionType && this.initialize(storeOptionType);
      })
      .catch((error) => {
        handleOpenAlertLayer({
          description: error,
        });
      });
  }

  render() {
    let { field, value } = this.props;
    let { ready, options } = this.state;

    let enables = this.enables;

    return (
      ready && (
        <div className="cart-product-option-wrap">
          <ul>
            {(options || []).reduce((target, option) => {
              let { title, keyName, isParent, isWild, isEditable } = option;

              (isParent || (!isParent && (getDeepValue(enables, `${keyName}`) || []).length > 0)) &&
                target.push(
                  <li>
                    {isEditable && (
                      <dl>
                        <dt>{title}</dt>
                        <dd>
                          <Field
                            name={`${field}.option.${keyName}`}
                            className="box"
                            width={150}
                            options={this.getOptions(option)}
                            onChange={(event, value) => {
                              window.setTimeout(() => {
                                this.onChangeOption(keyName, value, isWild);
                              }, 0);
                            }}
                            component={SelectField}
                            validate={[Validate.required]}
                          />
                        </dd>
                      </dl>
                    )}
                  </li>,
                );

              return target;
            }, [])}

            {(value["productCode"] || "").match(/901001004001/) && (
              <li>
                <dl>
                  <dt>각인</dt>
                  <dd>
                    <Field name={`${field}.engraveText`} type="text" className="box" placeholder="영문, 쉼표, 온점만 입력 가능" maxLength={5} showLength={true} component={InputField} normalize={this.normalize} />
                  </dd>
                </dl>
              </li>
            )}
          </ul>

          <span className="btn-option-edit">
            <button type="button" className="txt" onClick={this.onClickCancelChange}>
              취소
            </button>
            <button type="button" className="txt" onClick={this.onClickUpdateChange}>
              변경 완료
            </button>
          </span>
        </div>
      )
    );
  }
}
