import React from 'react';
import update from 'react-addons-update';
import { addDomain, addCdn } from 'utils/url';
import ImageLoader from 'components/common/image-loader';

export default class ThumbnailProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false
    };

    this.url = '/images/common/mask/showcase/';

    this.mask = {
      tiles: {
        CALENDAR_DESK_HORIZONTAL : {
          CALENDAR_DESK_L : "calendar-list-original-width@2x.png",
          CALENDAR_DESK_M : "calendar-list-opm-width@2x.png"
        },

        CALENDAR_DESK_VERTICAL : {
          CALENDAR_DESK_M : "calendar-list-opm-height@2x.png",
          CALENDAR_DESK_S : "calendar-list-mini-height@2x.png"
        }
      },
      preview:{
        CALENDAR_DESK_HORIZONTAL : {
          CALENDAR_DESK_L : {
            images : "calendar-list-popup-original-thumb@2x.png",
            size: {
              width: 134,
              height: 104,
              padding: 0
            }
          },
          CALENDAR_DESK_M : {
            images : "calendar-list-popup-opm-width-thumb@2x.png",
            size: {
              width: 117,
              height: 104,
              padding: 0
            }
          }
        },

        CALENDAR_DESK_VERTICAL : {
          CALENDAR_DESK_M : {
            images : "calendar-list-popup-opm-height-thumb@2x.png",
            size: {
              width: 69,
              height: 104,
              padding: 0
            }
          },
          CALENDAR_DESK_S : {
            images : "calendar-list-popup-mini-thumb@2x.png",
            size: {
              width: 72,
              height: 104,
              padding: 0
            }
          }
        }
      }


    };

    this.content = {
      CALENDAR_DESK_HORIZONTAL : {
        CALENDAR_DESK_L : {
          size: {
            width: 120,
            height: 75
          },
          position: {
            top: 7,
            left: 7
          }
        },
        CALENDAR_DESK_M : {
          size: {
            width: 103,
            height: 74
          },
          position: {
            top: 7,
            left: 7
          }
        }
      },

      CALENDAR_DESK_VERTICAL : {
        CALENDAR_DESK_M: {
          size: {
            width: 55,
            height: 79
          },
          position: {
            top: 7,
            left: 7
          }
        },
        CALENDAR_DESK_S: {
          size: {
            width: 58,
            height: 76
          },
          position: {
            top: 7,
            left: 7
          }
        }
      }
    }

    this.tripod = {
      CALENDAR_DESK_HORIZONTAL: {
        CALENDAR_DESK_L: {
          size: {
            width: '104px',
            height: '10px'
          },
          position: {
            left: 15,
            top: 84
          }
        },

        CALENDAR_DESK_M: {
          size: {
            width: '85px',
            height: '11px'
          },
          position: {
            left: 16,
            top: 83
          }
        }

      },

      CALENDAR_DESK_VERTICAL : {
        CALENDAR_DESK_M: {
          size: {
            width: '59.4%',
            height: '104px'
          },
          position: {
            left: 20,
            top: 87
          }

        },

        CALENDAR_DESK_S: {
          size: {
            width: '32px',
            height: '7px'
          },
          position: {
            top: 86,
            left: 20
          }
        }
      }

    }
    this.getSkin = this.getSkin.bind(this);
    this.getSizeInfo = this.getSizeInfo.bind(this);

  }

  getSkin(items){
    let { type } = this.props;

    if(type === "tiles"){
      let { productShapeType, productSizeType  } = items;

      return this.url+this.mask[type][productShapeType][productSizeType];
    }

    if(type === "preview"){
      let { productShapeType, productSizeType  } = this.props;


      return this.url+this.mask[type][productShapeType][productSizeType]['images'];
    }

  }

  getSizeInfo(){
    let { type } = this.props;

    if(type === "preview"){
      let { productShapeType, productSizeType  } = this.props;

      return this.mask[type][productShapeType][productSizeType]['size'];
    }
  }



  componentDidMount() {
    //console.log("type[",this.props.type,"]  tiles props  " , this.props)
  }


  render() {
    let { items, type, index, onClickThumbnail, width, height, cdnUrl, tripod, productShapeType, productSizeType, backCode } = this.props;

    return (
      (type === "tiles") ? (
        <div className="calendarListMap">
          <img src={addDomain(cdnUrl,items.thumbnailUrl)} className="contents" alt=""/>
          <img src={addCdn(this.getSkin(items))} className="skin" alt=""/>
        </div>
      )
      :
      (type === "preview") ?
      (

        <span data-index={index} onClick={onClickThumbnail} style={{padding: `${this.getSizeInfo().padding}px`}}>
          <span
                style={{
                  position:"relative",
                  width: `${this.getSizeInfo().width}px`,
                  height: `${this.getSizeInfo().height}px`,
                  background: '#6a6a6b'
                }}>
            <img src={addDomain(cdnUrl,items.thumbnailUrl)} className="contents"
                 style={{
                   width:`${(productShapeType && productSizeType) && this.content[productShapeType][productSizeType]['size'].width}px`,
                   height:`${(productShapeType && productSizeType) && this.content[productShapeType][productSizeType]['size'].height}px`,
                   top: `${(productShapeType && productSizeType) &&this.content[productShapeType][productSizeType]['position'].top}px`,
                   left: `${(productShapeType && productSizeType) &&this.content[productShapeType][productSizeType]['position'].left}px`,
                 }}/>
            <img src={addCdn(this.getSkin(items))} className="skin" alt=""
            />
          </span>
          {(((items.itemType === "BACK") || (items.itemType === "FRONT" && index === 1)) && (backCode || "") !== "503000") && <img className="tripod"
                                                style={{
                                                  width:`${(productShapeType && productSizeType) && this.tripod[productShapeType][productSizeType]['size'].width}`,
                                                  height:`${(productShapeType && productSizeType) && this.tripod[productShapeType][productSizeType]['size'].height}`,
                                                  left:`${(productShapeType && productSizeType) && this.tripod[productShapeType][productSizeType]['position'].left}px`,
                                                  top:`${(productShapeType && productSizeType) && this.tripod[productShapeType][productSizeType]['position'].top}px`
                                                }}


                                                src={addDomain(cdnUrl, tripod.effectMatch1Url)} alt="삼각대"/>
          }

          {((items.itemType === "FRONT") && index === 1) && <div className="calendarSign" data-index={index}>표지</div>}
          {((items.itemType === "FRONT") && index === 1) && <div className="calendarDescBar"/>}
          {((items.itemType === "BACK") && (index % 2 === 1)) && <div className="calendarDesc" data-index={index}>{Math.floor(index/2)}월 (앞/뒤)</div>}
          {(index !== 25) && ((items.itemType === "BACK") && (index !== 1)) && <div className="calendarDescBar"/>}
        </span>
      )
      :
      (
        <div/>
      )
    )
  }
}
