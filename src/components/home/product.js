import React from "react";
import update from "react-addons-update";

import { goLink, addCdn } from "utils/url";
import { getDatasetByName } from "utils/dom";
import { addDomain, goMemberCart } from "utils/url";
import { toDate } from "utils/format";

import ImageLoader from "components/common/image-loader";
import ThumbnailProduct from "components/common/thumbnail-product";
import { CDN_URL } from "configs/aws";

export default class HomeProduct extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      userItem: null,
    };

    this.items = [
      {
        title: "명함",
        description: "평범하지 않은 단 한 장으로<br/>유니크한 당신을 알려보세요.",
        imagePath: "/images/home/main-bizcard-360280@2x.jpg",
        path: "/store/business-card/overview",
      },
      {
        title: "스티커",
        description: "원하는 모양이나 사이즈로 자유롭게 만들 수 있는<br/>DIY 스티커부터 다양한 용지까지 만나보세요.",
        imagePath: "/images/home/main-sticker-360280@2x.jpg",
        path: "/store/sticker/overview",
      },
      {
        title: "어패럴",
        description: "커스텀 디자인으로<br/> 나만의 스타일을 연출해 보세요.",
        imagePath: "/images/home/main-ss-apparel-360280@2x.jpg",
        // imagePath: '/images/home/main-fw-apparel-360280@2x.jpg',
        path: "/store/apparel/overview",
      },
      {
        title: "쇼핑백",
        description: "걸어 다니는 우리 브랜드 홍보대사!<br/>어디서나 우리 브랜드를 알려요.",
        imagePath: "/images/home/main-shoppingbag@2x.jpg",
        path: "/store/shoppingbag/intro/defaults",
      },
      {
        title: "봉투",
        description: "봉투 하나도 남다른 느낌<br/>중요할수록 특별하게 건네요.",
        imagePath: "/images/home/main-envelope-360280@2x.jpg",
        path: "/store/envelope/intro/defaults",
      },
      {
        title: "투명PVC커버 다이어리",
        description: "자유롭게 디자인 가능한 다이어리에<br/>브랜드를 담아보세요.",
        imagePath: "/images/home/md-pvc-diary@2x.jpg",
        path: "/store/pvc-diary/intro/defaults",
      },
      {
        title: "홍보물",
        description: "브라보 당신의 비즈니스!<br/>단 한 장으로도 충분합니다.",
        imagePath: "/images/home/main-ad-360360@2x.jpg",
        path: "/store/pr/overview",
      },
      {
        title: "MD",
        description: "작지만 실속 있는<br/>브랜드 홍보대사를 만나보세요.",
        imagePath: "/images/home/main-md-360280@2x.jpg",
        path: "/store/md/overview",
      },
      {
        title: "캘린더",
        description: "나만의 스타일로 완성한 캘린더로<br/>365일 홍보하세요.",
        imagePath: "/images/home/main-calendar-360280@2x.jpg",
        path: "/store/calendar-desk/intro/defaults",
      },
      {
        title: "배너/현수막",
        description: "거리에서 행사장에서 시선을 사로잡아<br/>사람들의 발걸음을 멈춰 세우세요.",
        imagePath: "/images/home/main-sign-360280@2x.jpg",
        path: "/store/banner/overview",
      },
      /*			{
				title: '사인/포스터',
				description: '어떤 내용이든 감각적으로 전시할 수 있는<br/>다양한 사이즈와 소재의 사인을 만나보세요.',
				imagePath: '/images/home/main-poster-360280@2x.jpg',
				path: '/store/signs-posters/overview'
			},*/

      /**,
			{
				title: '카드',
				description: '플랫, 폴더 두 가지 형태의 반짝이는 효과로<br/>특별한 메시지를 전달할 수 있어요.',
				imagePath: '/images/home/main-card-360280@2x.jpg',
				path: '/store/card/overview'
			},
			{
				title: '액세서리',
				description: '다양한 색상의 봉투와 우리만의 특별한 명함 케이스 등<br/>함께하면 더 좋은 상품들을 확인해 보세요.',
				imagePath: '/images/home/main-acc-360280@2x.jpg',
				path: '/store/accessory/overview'
			}
			*/
    ];

    this.onClickGoLink = this.onClickGoLink.bind(this);
    this.onClickGoCart = this.onClickGoCart.bind(this);
  }

  onClickGoLink(event) {
    goLink(getDatasetByName(event.currentTarget, "path"), {
      location: "MAIN_OVERVIEW",
      type: "",
      etAction: getDatasetByName(event.currentTarget, "name").trim(),
    });
  }

  onClickGoCart(event) {
    goMemberCart();
  }

  updateUserItem() {
    let {
      states: {
        user: { loggedIn },
      },
      actions: { handleRequestHomeLatelyBag },
    } = this.props;
    let { userItem } = this.state;

    loggedIn
      ? handleRequestHomeLatelyBag().then((result) => {
          let item = (result || [])[0];

          item && this.setState(update(this.state, { userItem: { $set: item } }));
        })
      : userItem && this.setState(update(this.state, { userItem: { $set: null } }));
  }

  componentDidMount() {
    this.updateUserItem();
  }

  componentDidUpdate(prevProps, prevState) {
    let {
      states: {
        user: { loggedIn: currentLoggedIn },
      },
    } = this.props;
    let {
      states: {
        user: { loggedIn: prevLoggedIn },
      },
    } = prevProps;

    currentLoggedIn !== prevLoggedIn && this.updateUserItem();
  }

  render() {
    let { userItem } = this.state;

    let items = userItem
      ? this.items.filter((item) => {
          return item["title"] !== "전단";
        })
      : this.items;

    let options = userItem
      ? ["frameName", "shapeName", "sizeName", "paperName", "weightName", "effectName", "colorName", "attachSideName", "materialName", "finishName", "holderFinishName", "ropeLength", "glossName", "wallHangingName", "holderTypeName", "frameColorName", "quantity"].reduce((target, option) => {
          userItem[option] && !(option === "sizeName" && userItem["productCode"].match(/205001001001|204001001001/)) && (option === "quantity" && userItem["productUnitName"] ? target.push(`${userItem[option]}${userItem["productUnitName"]}`) : target.push(userItem[option]));

          return target;
        }, [])
      : null;

    return (
      <section className="home-product-wrap">
        <div className="inner">
          <ul>
            {userItem && (
              <li onClick={this.onClickGoCart}>
                <div className="top">
                  {React.cloneElement(<ThumbnailProduct />, {
                    imageUrl: addDomain(CDN_URL, userItem["thumbnailImageUrl"] || userItem["templateThumbnailImageUrl"]),
                    paperCode: userItem["paperCode"],
                    productCode: userItem["productCode"],
                    frameCode: userItem["frameCode"],
                    frameOptionCode: userItem["frameOptionCode"],
                    colorCode: userItem["frameColorCode"],
                    directionType: userItem["thumbnailDirectionType"],
                    skinVersion: userItem["skinVersion"],
                    type: "defaults",
                    className: "bag",
                  })}
                  <span className="icon icon-save-7070" />
                </div>
                <div className="bottom">
                  <h4>
                    {userItem["productGroupName"]} [{userItem["projectName"]}]
                  </h4>
                  <span>
                    옵션 : {options.join(" / ")}
                    <br />
                    최종 편집일 : {toDate(userItem["lastUpdate"], "YYYY.MM.DD")}
                  </span>

                  <button type="button">장바구니 바로가기</button>
                </div>
              </li>
            )}
            {items.reduce((target, item, idx) => {
              let { title, description, imagePath, path } = item;
              let maxIdx = userItem ? 4 : 5;

              maxIdx >= idx &&
                target.push(
                  <li data-path={path} data-name={title} onClick={this.onClickGoLink}>
                    <div className="top">
                      {imagePath &&
                        React.cloneElement(<ImageLoader />, {
                          imageUrl: addCdn(imagePath),
                        })}
                    </div>
                    <div className="bottom">
                      <h4>{title}</h4>
                      <span dangerouslySetInnerHTML={{ __html: description }} />

                      {path && <button type="button">{title} 시작하기</button>}
                    </div>
                  </li>,
                );
              return target;
            }, [])}
          </ul>
        </div>
      </section>
    );
  }
}
