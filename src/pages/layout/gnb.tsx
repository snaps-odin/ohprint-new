import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { getDatasetByName, isCollisionByPoint } from "utils/dom";
import { goHome, goLink, goMemberBag, goMemberCart, goMemberCoupon } from "utils/url";
import { MENUS } from "src/configs";
import { useRouter } from "next/router";
import { connect, useSelector } from "react-redux";
import { ActionCommon, ActionLayer } from "src/actions";
import { Dispatch } from "redux";
import { InitialValue } from "../../../types/store/initialValue";

function Gnb(props: any) {
  const [focus, setFocus] = useState(-1);
  const [category, setCategory] = useState<string | number | null>(-1);
  const [subCategory, setSubCategory] = useState<string | number | null>(-1);

  const router = useRouter();
  const container = useRef<MutableRefObject<HTMLUListElement | null | undefined>>();
  const inner = useRef<MutableRefObject<HTMLUListElement | null | undefined>>();

  const { loggedIn } = useSelector((state: InitialValue) => state.user);
  const cart = useSelector((state: InitialValue) => state.cart);

  useEffect(() => {
    window.addEventListener("mousemove", onCollision);
    setActive().then((res: any) => {
      const { category, subCategory } = res;
      setCategory(category);
      setSubCategory(subCategory);
    });

    return function cleanUp() {
      window.removeEventListener("mousemove", onCollision);
    };
  }, []);

  useEffect(() => {
    const {
      query: { category, subCategory },
    } = router;

    setCategory(category as string);
    setSubCategory(subCategory as string);
  }, [router]);

  const onFocus = (event: any) => {
    const index = Number(getDatasetByName(event.currentTarget, "index"));

    setFocus(index);
  };

  const onCollision = (event: any) => {
    const { clientX, clientY } = event;
    if (!isCollisionByPoint(container.current, clientX, clientY) && !isCollisionByPoint(inner.current, clientX, clientY)) {
      setFocus(-1);
    }
  };

  const onClickHome = () => {
    goHome();
  };

  const onClickBag = () => {
    goMember(goMemberBag);
  };

  const onClickCoupon = () => {
    goMember(goMemberCoupon);
  };

  const onClickCart = (event: any) => {
    goMember(goMemberCart);
  };

  const goMember = (callback: any) => {
    let {
      actions: { handleExecuteAfterUserLogin },
    } = props;

    handleExecuteAfterUserLogin()
      .then(() => {
        callback();
      })
      .catch(function () {});
    /*        let { actions: { handleExecuteAfterUserLogin } } = this.props;

        handleExecuteAfterUserLogin().then(() => {
            callback();
        }).catch(function (error) {});*/
  };

  const setActive = () => {
    const { pathname, query: search } = router;

    return new Promise((resolve, reject) => {
      resolve(
        MENUS.reduce(
          (target, menu, index) => {
            let { path, children } = menu;

            if (pathname !== "/" && target["category"] < 0) {
              let category = (pathname || "").match(path) || (path || "").match(pathname) ? index : -1;

              if (category < 0 && pathname.match(/search/i)) {
                let tempCategory = (path || "").match(/search/i) ? pathname : (pathname || "").replace(/search/i, "intro");
                category = (tempCategory || "").match(path) || (path || "").match(tempCategory) ? index : -1;
              }

              category >= 0 && (target["category"] = category);

              let subCategory = (children || []).findIndex((child) => {
                let { path } = child;
                let filteredPathname = (path || "").match(/search/i) ? pathname : (pathname || "").replace(/search/i, "intro");

                if (search && pathname.match(/apparel/i)) {
                  // @ts-ignore
                  return (search || "").match(path) || (path || "").match(search.substr(1, search.length));
                } else {
                  // @ts-ignore
                  return (filteredPathname || "").match(path) || (path || "").match(filteredPathname);
                }
              });

              if (!search && pathname.match(/apparel/i)) {
                subCategory = -1;
              }

              (subCategory >= 0 || (path.match(/apparel/i) && pathname.match(/apparel/i))) &&
                (target = {
                  category: index,
                  subCategory,
                });
            }

            return target;
          },
          { category: -1, subCategory: -1 },
        ),
      );
    });
  };

  const goToLink = (event: any, menu: any) => {
    let path = getDatasetByName(event.currentTarget, "path");
    let type = getDatasetByName(event.currentTarget, "type");

    let params = {
      location: type,
      type: "",
      etAction: event.currentTarget.innerText.trim(),
    };

    if (type === "SUB_MENU") {
      let bigIn = {
        id: "defaults",
        name: menu.name,
        price: 0,
        category: menu.gaKey,
      };

      // @ts-ignore
      params["dimension4"] = getDatasetByName(event.currentTarget, "name");

      if (menu.gaKey !== "apparel") {
        params = {
          ...params,
          ...bigIn,
        };
      }
    }

    goLink(path, params);
  };

  return (
    <div className="gnb">
      <div className="container">
        <span className="left">
          <span className="icon icon-logo" onClick={onClickHome} />

          <ul
            // @ts-ignore
            ref={container}
          >
            {MENUS.reduce((target, menu, index) => {
              let { path, name, children } = menu;
              let isActiveCategory = index === category;
              let isCalendarDesk = path.indexOf("calendar-desk") !== -1;

              // @ts-ignore
              children = (children || []).reduce((target, child) => {
                child["type"] !== "blank" && target.push(child);

                return target;
              }, []);

              // @ts-ignore
              target.push(
                // @ts-ignore
                <li key={index+path+name} data-index={index} className={isActiveCategory ? "active" : ""} onMouseOver={onFocus}>
                  <a
                    href={"javascript:void(0)"}
                    onClick={(e) => {
                      goToLink(e, menu);
                    }}
                    data-path={path}
                    data-type={(menu.children || []).length === 0 ? "SUB_MENU" : "MENU"}
                    data-name={menu.name}
                  >
                    {menu["tagName"] && <span className={`${menu["tagName"]}`} />}
                    <span>{name}</span>
                  </a>

                  {focus === index && (children || []).length > 0 && (
                    <span className="inner">
                      <span className="icon icon-editor-arrow-149" />

                      <dl
                        className={(path || "").match(/accessory/i) ? `accessory` : (path || "").match(/business-card/i) ? `businessCard` : (path || "").match(/card/i) ? `card` : (path || "").match(/apparel/i) ? `apparel` : (path || "").match(/md/i) ? `md` : ``}
                        // @ts-ignore
                        ref={inner}
                      >
                        {
                          // @ts-ignore
                          children.reduce((target, child, index) => {
                            let { name, path, type, icon } = child;
                            let isActiveSubCategory = isActiveCategory && subCategory === index;

                            target.push(
                              (type || "").match(/title/i) ? (
                                <dt key={index+path+name}>{name}</dt>
                              ) : (
                                <dd key={index+path+name} className={`${type || ""} ${isActiveSubCategory ? "active" : ""}`}>
                                  <a href={"javascript:void(0)"} onClick={(e) => goToLink(e, child)} data-path={path} data-type="SUB_MENU" data-name={menu.name}>
                                    {name}
                                  </a>

                                  {icon && <span className={`icon icon-${icon}`} />}
                                </dd>
                              ),
                            );

                            return target;
                          }, [])
                        }
                      </dl>
                    </span>
                  )}
                </li>,
              );

              return target;
            }, [])}
          </ul>
        </span>

        <span className="right">
          <span>
            <button type="button" className="cart" onClick={onClickCart}>
              <span>
                <span className="icon">{loggedIn && ((cart.badgeCount || 0) as number) > 0 && <span className="badge" data-count={((cart.badgeCount || 0) as number) < 100 ? cart.badgeCount : "99+"} />}</span>
                <span>장바구니</span>
              </span>
            </button>
          </span>
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    states: {
      user: state.user,
      cart: state.cart,
    },
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    actions: {
      handleOpenContentsLayer: (type: string, options: object) => dispatch(ActionLayer.openContentsLayer(type, options)),

      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gnb);
