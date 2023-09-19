'use strict'

import React from 'react';

import { TUTORIAL_LOGO } from 'configs/index';
import { TUTORIAL_QR } from 'configs/index';
import { addZero } from 'utils/format'
import { addCdn } from 'utils/url';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.type = this.props.type === "logo" ? 0 : 1

    this.guideList = [
      {
        title : "로고 만들기 안내",
        description : "디자인이 없어도, 디자이너가 아니어도, 내가 원하는 타입만 선택해서 간편하게 로고를 만들 수 있습니다.<br/>오프린트미에서 추천 해 주는 로고 제작 사이트를 이용해 보세요.",
        className: "tutorial-logo-wrap"
      },
      {
        title: "QR 코드 안내",
        description: "오프린트미에서 추천해 주는 QR코드 사이트를 이용해 보세요.<br/>QR코드 추가 시 아래 유의사항을 지켜주세요.",
        className: "tutorial-qr-wrap"
      }
    ]

  }

  render() {
    const { type } = this.props;
    let { title , description, className } = this.guideList[this.type]



		return (
			<div className={className}>
				<div className="top">
					<div>
						<span className="icon icon-logo-13341"/>
						<h1 dangerouslySetInnerHTML={{ __html: title }}/>
						<span dangerouslySetInnerHTML={{ __html: description }}/>
					</div>
				</div>

				<div className="middle">
					{
            (type === "logo") &&
                  TUTORIAL_LOGO.reduce((target, item, index) => {
                    target.push(
                      <section>
                        <div>
                          <span className="number">{addZero(index + 1, 2)}</span>
                          <h3>{item[ 'name' ]}</h3>
                          <a href={ item[ 'link' ] } className="link" target="_blank">{item[ 'link' ]}</a>

                          <div className="split-line"/>

                          <span className="description" dangerouslySetInnerHTML={{ __html: item[ 'description' ] }}/>

                          <div className="image">
                            <img src={addCdn(`${item[ 'image' ]}@2x.png`)}/>
                          </div>

                          <ul className="info">
                            {item[ 'spec' ].map((spec, index) => (
                              <li>
                                <span>{spec[ 'title' ]}</span>
                                <span dangerouslySetInnerHTML={{ __html: spec[ 'description' ] }}/>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </section>
                    );

                    return target;
                }, [])
          }

          {
            (type === "qr") &&
                  TUTORIAL_QR.reduce((target, item, index) => {
                    const { title, name, link, description, image, spec, subTitle, attentions, imageGuideLine, customCSS } = item;
                    //const { attention } = customCSS;


                    target.push(
                      <section>
                        <div>
                          {imageGuideLine && <div className={"imageGuideLine"}/>}
                          {title && <span className={`str  ${customCSS && customCSS.title}`}>{title}</span>}
                          {name && <h3>{name}</h3>}
                          {link && <a href={link} className="link" target="_blank">{link}</a>}

                          {description && <span className="description" dangerouslySetInnerHTML={{__html: description}}/>}

                          {subTitle && <span className={"subTitle"}>{subTitle}</span>}

                          {attentions &&
                            <dl className={`attention-wrap ${customCSS && customCSS.attention}`}>
                              {attentions.map((item, idx) => (
                                <dd className={"attention"}>{item}</dd>
                              ))}
                            </dl>
                          }

                          {image && <div className="image">
                            <img src={addCdn(`${image}@2x.jpg`)} alt={""}/>
                          </div>}

                          {spec && <ul className="info">
                            {spec.map((spec, index) => (
                              <li>
                                <span>{spec.title}</span>
                                <span dangerouslySetInnerHTML={{__html: spec.description}}/>
                              </li>
                            ))}
                          </ul>}
                        </div>
                      </section>
                    );

                    return target;
                  }, [])}
				</div>
			</div>
		);
	}
}

export default Logo;

export const getStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        }
    }
}