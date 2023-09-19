import React from 'react';
import Showcase from "components/store/intro/service/showcase";
import { CSTypes } from 'constants/index';

import { getDeepValue } from 'utils/json';


export default class GuideMaker extends React.Component {
  constructor(...args) {
    super(...args);

    this.children = [];
  }


  shouldComponentUpdate(nextProps, nextState) {
    let { product: nextProduct, className: nextClassName } = nextProps;
    let { product: currentProduct, className: currentClassName } = this.props;

    return !(
      Object.is(JSON.stringify(nextProduct), JSON.stringify(currentProduct)) &&
      Object.is(JSON.stringify(nextClassName), JSON.stringify(currentClassName))
    );
  }

  render() {
    let { className, params, product,cdn } = this.props;
    let { category, subCategory } = params;

    let { common : { guide } } = product;
    let { services, contents } = guide || {};

    return (
      <section className={`store-intro-service-wrap ${className}`}
               ref={(c) => {this.el = c;}}>


        {(services || []).length > 0 && (
          (services || []).reduce((target, service) => {
            let showcase = getDeepValue(contents, service) || {};

            showcase && target.push(
              React.cloneElement(<Showcase/>, {
                cdn,
                showcase,
                category,
                ref: c => {c && c[ 'el' ] && (this.children[ showcase[ 'menuIndex' ] ] = c);}
              })
            );

            return target;
          }, [])
        )}

      </section>
    )
  }
}
