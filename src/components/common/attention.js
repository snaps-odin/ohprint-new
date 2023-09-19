

import React from 'react';
import parser from 'html-react-parser';

export default class Attention extends React.Component {
	render() {
		const { value: { title, children, shippingGuide }, listItem } = this.props;

		return ( title || children ) &&
			(
				<dl className="attention-wrap">
					{title && (<dt dangerouslySetInnerHTML={{ __html: title }}/>)}

					{children && children.reduce((target, item) => {


						if(item[ 'value' ].match(/dt/i)){
                  target.push( parser(item[ 'value' ]));
						} else {
                  target.push(
										<dd className={item[ 'isDotBlank' ] && 'dotBlank'}  dangerouslySetInnerHTML={{ __html: item[ 'value' ] }}/>
									);
						}

						return target;
					}, [])}

					{
            shippingGuide &&
            (listItem ?
              (
                ((shippingGuide.description) || []).reduce((target,item)=>{
                  target.push(
                    <dd>
                      <span dangerouslySetInnerHTML={{ __html: item }}/><br/>
                    </dd>
                  );
                  return target;
                },[])

              )
              :
             (
              <dd>
                <span>{(shippingGuide.description)[0]}</span><br/>
                <span>
                    <span onClick={shippingGuide.handleClick}>{(shippingGuide.description)[1]}</span>
                    <span className="icon icon-arrow-68"/>
                </span>
              </dd>
            ))
					}


				</dl>
			);
	}
}
