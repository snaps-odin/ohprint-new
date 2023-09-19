import React from 'react';
import update from 'react-addons-update';

import ImageLoader from 'components/common/image-loader';
import { addCdn } from 'utils/url';

export default class ThumbnailProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      isValid: false
    };

    this.mask = {
      '101002000001': {
        name: '표준 사이즈 명함',
        defaults: {
          frame: [
            {
              code: '504001',
              name: '직각 모서리',
              directionType: [
                { code: '194001', name: '가로', value: 'bcard-9-x-5-square-408-x-230' },
                { code: '194002', name: '세로', value: 'bcard-9-x-5-square-230-x-408' }
              ]
            },
            {
              code: '504002',
              name: '둥근 모서리',
              directionType: [
                { code: '194001', name: '가로', value: 'bcard-9-x-5-round-408-x-230' },
                { code: '194002', name: '세로', value: 'bcard-9-x-5-round-230-x-408' }
              ]
            }
          ]
        }
      },
      '101001000001': {
        name: 'OPM 사이즈 명함',
        defaults: {
          frame: [
            {
              code: '504001',
              name: '직각 모서리',
              directionType: [
                { code: '194001', name: '가로', value: 'bcard-square-175-x-115' },
                { code: '194002', name: '세로', value: 'bcard-square-115-x-175' }
              ]
            },
            {
              code: '504002',
              name: '둥근 모서리',
              directionType: [
                { code: '194001', name: '가로', value: 'bcard-round-175-x-115' },
                { code: '194002', name: '세로', value: 'bcard-round-115-x-175' }
              ]
            }
          ]
        }
      },
      '101003000001': {
        name: '정사각 사이즈 명함',
        defaults: {
          frame: [
            {
              code: '504001',
              name: '직각 모서리',
              value: 'bcard-6-x-6-square-270'
            },
            {
              code: '504002',
              name: '둥근 모서리',
              value: 'bcard-6-x-6-round-270'
            }
          ]
        }
      },
      '107001000001': {
        name: '투명 명함 OPM',
        showcase: {
          frame: [
            { code: '504001', value: 'bcard-clean-square-720-x-880' },
            { code: '504002', value: 'bcard-clean-round-720-x-880' }
          ]
        },
        defaults: {
          frame: [
            {
              code: '504001',
              name: '직각 모서리',
              directionType: [
                { code: '194001', name: '가로', value: 'bcard-clean-square-250-x-162' },
                { code: '194002', name: '세로', value: 'bcard-clean-square-162-x-250' }
              ]
            },
            {
              code: '504002',
              name: '둥근 모서리',
              directionType: [
                { code: '194001', name: '가로', value: 'bcard-clean-round-250-x-162' },
                { code: '194002', name: '세로', value: 'bcard-clean-round-162-x-250' }
              ]
            }
          ]
        }
      },
      '107002000001': {
        name: '투명 명함 표준',
        showcase: {
          frame: [
            { code: '504001', value: 'bcard-clean-9-x-5-square-720-x-880' },
            { code: '504002', value: 'bcard-clean-9-x-5-round-720-x-880' }
          ]
        },
        defaults: {
          frame: [
            {
              code: '504001',
              name: '직각 모서리',
              directionType: [
                { code: '194001', name: '가로', value: 'bcard-clean-square-280-x-158' },
                { code: '194002', name: '세로', value: 'bcard-clean-square-158-x-280' }
              ]
            },
            {
              code: '504002',
              name: '둥근 모서리',
              directionType: [
                { code: '194001', name: '가로', value: 'bcard-clean-round-280-x-158' },
                { code: '194002', name: '세로', value: 'bcard-clean-round-158-x-280' }
              ]
            }
          ]
        }
      },
      '107003000001': {
        name: '투명 명함 정사각',
        showcase: {
          frame: [
            { code: '504001', value: 'bcard-clean-6-x-6-square-720-x-880' },
            { code: '504002', value: 'bcard-clean-6-x-6-round-720-x-880' }
          ]
        },
        defaults: {
          frame: [
            {
              code: '504001',
              name: '직각 모서리',
              value: 'bcard-clean-square-186-x-186'
            },
            {
              code: '504002',
              name: '둥근 모서리',
              value: 'bcard-clean-round-186-x-186'
            }
          ]
        }
      },
      '102001001001': {
        name: '플랫형 카드 5*7',
        showcase: { value: 'card-flat-big-720-x-880' },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'card-flat-57-horizontal' },
            { code: '194002', name: '세로', value: 'card-flat-57-vertical' }
          ]
        }
      },
      '102002001001': {
        name: '플랫형 카드 4*6',
        showcase: { value: 'card-flat-small-720-x-880' },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'card-flat-46-horizontal' },
            { code: '194002', name: '세로', value: 'card-flat-46-vertical' }
          ]
        }
      },
      '102003001001': {
        name: '플랫형 미니 카드',
        showcase: { value: 'card-flat-big-720-x-880' },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'card-flat-57-horizontal' },
            { code: '194002', name: '세로', value: 'card-flat-57-vertical' }
          ]
        }
      },
      '102001002001': {
        name: '폴더형 카드 5*7',
        showcase: { value: 'card-folder-big-720-x-880' },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'card-folder-57-horizontal' },
            { code: '194002', name: '세로', value: 'card-folder-57-vertical' }
          ]
        }
      },
      '102002002001': {
        name: '폴더형 카드 4*6',
        showcase: { value: 'card-folder-small-720-x-880' },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'card-folder-46-horizontal' },
            { code: '194002', name: '세로', value: 'card-folder-46-vertical' }
          ]
        }
      },
      '102003002001': {
        name: '폴더형 미니 카드',
        showcase: { value: 'card-folder-big-720-x-880' },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'card-folder-57-horizontal' },
            { code: '194002', name: '세로', value: 'card-folder-57-vertical' }
          ]
        }
      },
      '105006000001': {
        name: '포스터 A1',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-a-horizontal-720-x-880' },
            { code: '194002', name: '세로', value: 'poster-a-720-x-880' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-240-x-170' },
            { code: '194002', name: '세로', value: 'poster-170-x-240' }
          ]
        }
      },
      '105001000001': {
        name: '포스터 A2',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-a-horizontal-720-x-880' },
            { code: '194002', name: '세로', value: 'poster-a-720-x-880' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-240-x-170' },
            { code: '194002', name: '세로', value: 'poster-170-x-240' }
          ]
        }
      },
      '105002000001': {
        name: '포스터 A3',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-a-horizontal-720-x-880' },
            { code: '194002', name: '세로', value: 'poster-a-720-x-880' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-240-x-170' },
            { code: '194002', name: '세로', value: 'poster-170-x-240' }
          ]
        }
      },
      '105007000001': {
        name: '포스터 A4',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-a-horizontal-720-x-880' },
            { code: '194002', name: '세로', value: 'poster-a-720-x-880' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-240-x-170' },
            { code: '194002', name: '세로', value: 'poster-170-x-240' }
          ]
        }
      },
      '105003000001': {
        name: '포스터 B2',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-b-horizontal-720-x-880' },
            { code: '194002', name: '세로', value: 'poster-b-720-x-880' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-240-x-166' },
            { code: '194002', name: '세로', value: 'poster-166-x-240' }
          ]
        }
      },
      '105004000001': {
        name: '포스터 B3',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-b-horizontal-720-x-880' },
            { code: '194002', name: '세로', value: 'poster-b-720-x-880' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-240-x-166' },
            { code: '194002', name: '세로', value: 'poster-166-x-240' }
          ]
        }
      },
      '105005000001': {
        name: '포스터 B4',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-b-horizontal-720-x-880' },
            { code: '194002', name: '세로', value: 'poster-b-720-x-880' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'poster-240-x-166' },
            { code: '194002', name: '세로', value: 'poster-166-x-240' }
          ]
        }
      },
      '104000001001': {
        name: '원형 스티커',
        showcase: { value: 'sticker-round-720-x-880' },
        defaults: {
          directionType: [
            { code: '194003', name: '정사각', value: 'sticker-round' }
          ]
        }
      },
      '104000002001': {
        name: '정사각형 스티커',
        showcase: { value: 'sticker-square-720-x-880' },
        defaults: {
          directionType: [
            { code: '194003', name: '정사각', value: 'sticker-square' }
          ]
        }
      },
      '104000003001': {
        name: '직사각형 스티커',
        showcase: { value: 'sticker-rectangle-720-x-880' },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-rectangle-horizontal' },
            { code: '194002', name: '세로', value: 'sticker-rectangle-vertical' }
          ]
        }
      },
      '106026006001': {
        name: 'DIY 스티커 A6',
        showcase: {//160072, 160073
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-diy' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-diy' },
            { code: '160019', name: '크라프트', value: 'sticker-list-diy' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-diy' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-diy' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-diy' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-diy' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-diy' },
            { code: '160036', name: '매트', value: 'sticker-list-diy' },
            { code: '160072', name: '리무버블 무광', value: 'sticker-list-diy' },
            { code: '160073', name: '리무버블 유광', value: 'sticker-list-diy' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-diy-horizontal' },
            { code: '194002', name: '세로', value: 'sticker-cart-diy-vertical' }
          ]
        }
      },
      '106025006001': {
        name: 'DIY 스티커 A5',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-diy' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-diy' },
            { code: '160019', name: '크라프트', value: 'sticker-list-diy' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-diy' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-diy' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-diy' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-diy' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-diy' },
            { code: '160036', name: '매트', value: 'sticker-list-diy' },
            { code: '160072', name: '리무버블 무광', value: 'sticker-list-diy' },
            { code: '160073', name: '리무버블 유광', value: 'sticker-list-diy' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-diy-horizontal' },
            { code: '194002', name: '세로', value: 'sticker-cart-diy-vertical' }
          ]
        }
      },
      '106024006001': {
        name: 'DIY 스티커 A4',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-diy' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-diy' },
            { code: '160019', name: '크라프트', value: 'sticker-list-diy' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-diy' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-diy' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-diy' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-diy' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-diy' },
            { code: '160036', name: '매트', value: 'sticker-list-diy' },
            { code: '160072', name: '리무버블 무광', value: 'sticker-list-diy' },
            { code: '160073', name: '리무버블 유광', value: 'sticker-list-diy' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-diy-horizontal' },
            { code: '194002', name: '세로', value: 'sticker-cart-diy-vertical' }
          ]
        }
      },
      '106027006001': {
        name: 'DIY 스티커 75X100',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-diy-75' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-diy-75' },
            { code: '160019', name: '크라프트', value: 'sticker-list-diy-75' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-diy-75' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-diy-75' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-diy-75' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-diy-75' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-diy-75' },
            { code: '160036', name: '매트', value: 'sticker-list-diy-75' },
            { code: '160072', name: '리무버블 무광', value: 'sticker-list-diy-75' },
            { code: '160073', name: '리무버블 유광', value: 'sticker-list-diy-75' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-diy-75-horizontal' },
            { code: '194002', name: '세로', value: 'sticker-cart-diy-75-vertical' }
          ]
        }
      },
      '106028006001': {
        name: 'DIY 스티커 100X100',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-diy-100' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-diy-100' },
            { code: '160019', name: '크라프트', value: 'sticker-list-diy-100' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-diy-100' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-diy-100' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-diy-100' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-diy-100' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-diy-100' },
            { code: '160036', name: '매트', value: 'sticker-list-diy-100' },
            { code: '160072', name: '리무버블 무광', value: 'sticker-list-diy-100' },
            { code: '160073', name: '리무버블 유광', value: 'sticker-list-diy-100' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194003', name: '정사각형', value: 'sticker-cart-diy-100' }
          ]
        }
      },
      '106999007001': {
        name: '낱장 스티커',
        defaults: { value: 'dummy-720x720' }
      },
      '106049108001':
        {
          name: '롤 스티커 20 x 20',
          showcase:{
            productCode: [
              { code: '106049108001', name: '롤 스티커 20 x 20', value: 'roll-sticker-list-round-20' }
            ]
          },
          defaults: { value: 'roll-sticker-cart-round-20' }
        },
      '106050108001':
        {
          name: '롤 스티커 30 x 30',
          showcase:{
            productCode: [
              { code: '106050108001', name: '롤 스티커 30 x 30', value: 'roll-sticker-list-round-30' }
            ]
          },
          defaults: { value: 'roll-sticker-cart-round-30' }
        },

      '106042208001':
        {
          name: '롤 스티커 30 x 18',
          showcase:{
            productCode: [
              { code: '106042208001', name: '롤 스티커 30 x 18', value: 'roll-sticker-list-rec-30-x-18' }
            ]
          },
          defaults: {
            directionType: [
              { code: '194001', name: '가로', value: 'roll-sticker-cart-rec-30-x-18' },
              { code: '194002', name: '세로', value: 'roll-sticker-cart-rec-18-x-30' }
            ]
          }
        },
      '106043208001':
        {
          name: '롤 스티커 40 x 20',
          showcase:{
            productCode: [
              { code: '106043208001', name: '롤 스티커 40 x 20', value: 'roll-sticker-list-rec-40-x-20' }
            ]
          },
          defaults: {
            directionType: [
              { code: '194001', name: '가로', value: 'roll-sticker-cart-rec-40-x-20' },
              { code: '194002', name: '세로', value: 'roll-sticker-cart-rec-20-x-40' }
            ]
          }
        },

      '106044208001':
        {
          name: '롤 스티커 50 x 30',
          showcase:{
            productCode: [
              { code: '106044208001', name: '롤 스티커 50 x 30', value: 'roll-sticker-list-rec-50-x-30' }
            ]
          },
          defaults: {
            frame: [
              {
                code: '504001',
                name: '직각모서리',
                directionType: [
                  { code: '194001', name: '가로', value: 'roll-sticker-cart-rec-50-x-30' },
                  { code: '194002', name: '세로', value: 'roll-sticker-cart-rec-30-x-50' }
                ]
              },
              {
                code: '504002',
                name: '둥근모서리',
                directionType: [
                  { code: '194001', name: '가로', value: 'roll-sticker-cart-rec-50-x-30-round' },
                  { code: '194002', name: '세로', value: 'roll-sticker-cart-rec-30-x-50-round' }
                ]
              },
            ]
          }
        },

      '106045208001':
        {
          name: '롤 스티커 60 x 40',
          showcase:{
            productCode: [
              { code: '106045208001', name: '롤 스티커 60 x 40', value: 'roll-sticker-list-rec-60-x-40' }
            ]
          },
          defaults: {
            directionType: [
              { code: '194001', name: '가로', value: 'roll-sticker-cart-rec-60-x-40' },
              { code: '194002', name: '세로', value: 'roll-sticker-cart-rec-40-x-60' }
            ]
          }
        },


      '106046208001':
        {
          name: '롤 스티커 60 x 50',
          showcase:{
            productCode: [
              { code: '106046208001', name: '롤 스티커 60 x 50', value: 'roll-sticker-list-rec-60-x-50' }
            ]
          },
          defaults: {
            directionType: [
              { code: '194001', name: '가로', value: 'roll-sticker-cart-rec-60-x-50' },
              { code: '194002', name: '세로', value: 'roll-sticker-cart-rec-50-x-60' }
            ]
          }
        },


      '106047208001':
        {
          name: '롤 스티커 70 x 30',
          showcase:{
            productCode: [
              { code: '106047208001', name: '롤 스티커 70 x 30', value: 'roll-sticker-list-rec-70-x-30' }
            ]
          },
          defaults: {
            directionType: [
              { code: '194001', name: '가로', value: 'roll-sticker-cart-rec-70-x-30' },
              { code: '194002', name: '세로', value: 'roll-sticker-cart-rec-30-x-70' }
            ]
          }
        },

      '106048208001':
        {
          name: '롤 스티커 85 x 18',
          showcase:{
            productCode: [
              { code: '106048208001', name: '롤 스티커 85 x 18', value: 'roll-sticker-list-rec-85-x-18' }
            ]
          },
          defaults: {
            directionType: [
              { code: '194001', name: '가로', value: 'roll-sticker-cart-rec-85-x-18' },
              { code: '194002', name: '세로', value: 'roll-sticker-cart-rec-18-x-85' }
            ]
          }
        },

      '106051308001':
        {
          name: '롤 스티커 20 x 20',
          showcase:{
            productCode: [
              { code: '106051308001', name: '롤 스티커 20 x 20', value: 'roll-sticker-list-square-20' }
            ]
          },
          defaults: { value: 'roll-sticker-cart-square-20' }
        },

      '106052308001':
        {
          name: '롤 스티커 30 x 30',
          showcase:{
            productCode: [
              { code: '106052308001', name: '롤 스티커 30 x 30', value: 'roll-sticker-list-square-30' }
            ]
          },
          defaults: { value: 'roll-sticker-cart-square-30' }
        },

      '106053308001':
        {
          name: '롤 스티커 45 x 45',
          showcase:{
            productCode: [
              { code: '106053308001', name: '롤 스티커 45 x 45', value: 'roll-sticker-list-square-45' }
            ]
          },
          defaults: { value: 'roll-sticker-cart-square-45' }
        },

      '106054308001':
        {
          name: '롤 스티커 60 x 60',
          showcase:{
            productCode: [
              { code: '106054308001', name: '롤 스티커 60 x 60', value: 'roll-sticker-list-square-60' }
            ]
          },
          defaults: { value: 'roll-sticker-cart-square-60' }
        },




      '106055408001':
        {
          name: '롤 스티커 35 x 35',
          showcase:{
            productCode: [
              { code: '106055408001', name: '롤 스티커 35 x 35', value: 'roll-sticker-list-heart-35' }
            ]
          },
          defaults: { value: 'roll-sticker-cart-heart-35' }
        },
      '106056408001':
        {
          name: '롤 스티커 60 x 60',
          showcase:{
            productCode: [
              { code: '106056408001', name: '롤 스티커 60 x 60', value: 'roll-sticker-list-heart-60' }
            ]
          },
          defaults: { value: 'roll-sticker-cart-heart-60' }
        },
      '106057508001':
        {
          name: '롤 스티커 35 x 35',
          showcase:{
            productCode: [
              { code: '106057508001', name: '롤 스티커 60 x 60', value: 'roll-sticker-list-star-35' }
            ]
          },
          defaults: { value: 'roll-sticker-cart-star-35' }
        },
      '106058508001':
        {
          name: '롤 스티커 60 x 60',
          showcase:{
            productCode: [
              { code: '106058508001', name: '롤 스티커 60 x 60', value: 'roll-sticker-list-star-60' }
            ]
          },
          defaults: { value: 'roll-sticker-cart-star-60' }
        },



      '106029108001':
        {
        name: '롤 스티커 45 x 45',
        showcase:{
          productCode: [
            { code: '106029108001', name: '롤 스티커 45 x 45', value: 'roll-sticker-list-round' }
          ]
        },
        defaults: { value: 'roll-sticker-cart-round' }
      },
      '106030108001': {
        name: '롤 스티커 60 x 60',
        showcase:{
          productCode: [
            { code: '106030108001', name: '롤 스티커 60 x 60', value: 'roll-sticker-list-round' }
          ]
        },
        defaults: { value: 'roll-sticker-cart-round' }
      },
      '106031208001': {
        name: '롤 스티커 85 x 55',
        showcase:{
          productCode: [
            { code: '106031208001', name: '롤 스티커 85 x 55', value: 'roll-sticker-list-rec-85-x-55' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'roll-sticker-cart-rec-horizontal' },
            { code: '194002', name: '세로', value: 'roll-sticker-cart-rec-vertical' }
          ]
        }
      },
      '106032001001': {
        name: '원형 스티커 10mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-round-10' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-round-10' },
            { code: '160019', name: '크라프트', value: 'sticker-list-round-10' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-round-10' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-round-10' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-round-10' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-round-10' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-round-10' },
            { code: '160036', name: '매트', value: 'sticker-list-round-10' }
          ]
        },
        defaults: { value: 'sticker-cart-round-10' }
      },
      '106033001001': {
        name: '원형 스티커 15mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-round-15' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-round-15' },
            { code: '160019', name: '크라프트', value: 'sticker-list-round-15' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-round-15' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-round-15' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-round-15' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-round-15' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-round-15' },
            { code: '160036', name: '매트', value: 'sticker-list-round-15' }
          ]
        },
        defaults: { value: 'sticker-cart-round-15' }
      },
      '106034001001': {
        name: '원형 스티커 20mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-round-20' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-round-20' },
            { code: '160019', name: '크라프트', value: 'sticker-list-round-20' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-round-20' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-round-20' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-round-20' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-round-20' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-round-20' },
            { code: '160036', name: '매트', value: 'sticker-list-round-20' }
          ]
        },
        defaults: { value: 'sticker-cart-round-20' }
      },
      '106035001001': {
        name: '원형 스티커 25mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-round-25' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-round-25' },
            { code: '160019', name: '크라프트', value: 'sticker-list-round-25' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-round-25' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-round-25' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-round-25' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-round-25' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-round-25' },
            { code: '160036', name: '매트', value: 'sticker-list-round-25' }
          ]
        },
        defaults: { value: 'sticker-cart-round-25' }
      },
      '106006001001': {
        name: '원형 스티커 30mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-round-30' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-round-30' },
            { code: '160019', name: '크라프트', value: 'sticker-list-round-30' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-round-30' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-round-30' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-round-30' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-round-30' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-round-30' },
            { code: '160036', name: '매트', value: 'sticker-list-round-30' }
          ]
        },
        defaults: { value: 'sticker-cart-round-30' }
      },
      '106005001001': {
        name: '원형 스티커 40mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-round-40' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-round-40' },
            { code: '160019', name: '크라프트', value: 'sticker-list-round-40' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-round-40' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-round-40' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-round-40' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-round-40' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-round-40' },
            { code: '160036', name: '매트', value: 'sticker-list-round-40' }
          ]
        },
        defaults: { value: 'sticker-cart-round-40' }
      },
      '106004001001': {
        name: '원형 스티커 50mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-round-5060' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-round-5060' },
            { code: '160019', name: '크라프트', value: 'sticker-list-round-5060' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-round-5060' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-round-5060' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-round-5060' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-round-5060' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-round-5060' },
            { code: '160036', name: '매트', value: 'sticker-list-round-5060' }
          ]
        },
        defaults: { value: 'sticker-cart-round-5060' }
      },
      '106003001001': {
        name: '원형 스티커 60mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-round-5060' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-round-5060' },
            { code: '160019', name: '크라프트', value: 'sticker-list-round-5060' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-round-5060' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-round-5060' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-round-5060' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-round-5060' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-round-5060' },
            { code: '160036', name: '매트', value: 'sticker-list-round-5060' }
          ]
        },
        defaults: { value: 'sticker-cart-round-5060' }
      },
      '106002001001': {
        name: '원형 스티커 80mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-round-80100' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-round-80100' },
            { code: '160019', name: '크라프트', value: 'sticker-list-round-80100' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-round-80100' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-round-80100' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-round-80100' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-round-80100' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-round-80100' },
            { code: '160036', name: '매트', value: 'sticker-list-round-80100' }
          ]
        },
        defaults: { value: 'sticker-cart-round-80100' }
      },
      '106001001001': {
        name: '원형 스티커 100mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-round-80100' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-round-80100' },
            { code: '160019', name: '크라프트', value: 'sticker-list-round-80100' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-round-80100' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-round-80100' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-round-80100' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-round-80100' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-round-80100' },
            { code: '160036', name: '매트', value: 'sticker-list-round-80100' }
          ]
        },
        defaults: { value: 'sticker-cart-round-80100' }
      },
      '106036002001': {
        name: '정사각형 스티커 15x15mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-square-15' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-square-15' },
            { code: '160019', name: '크라프트', value: 'sticker-list-square-15' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-square-15' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-square-15' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-square-15' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-square-15' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-square-15' },
            { code: '160036', name: '매트', value: 'sticker-list-square-15' }
          ]
        },
        defaults: { value: 'sticker-cart-square-15' }
      },
      '106007002001': {
        name: '정사각형 스티커 24x24mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-square-24' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-square-24' },
            { code: '160019', name: '크라프트', value: 'sticker-list-square-24' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-square-24' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-square-24' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-square-24' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-square-24' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-square-24' },
            { code: '160036', name: '매트', value: 'sticker-list-square-24' }
          ]
        },
        defaults: { value: 'sticker-cart-square-24' }
      },
      '106008002001': {
        name: '정사각형 스티커 36x36mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-square-36' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-square-36' },
            { code: '160019', name: '크라프트', value: 'sticker-list-square-36' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-square-36' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-square-36' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-square-36' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-square-36' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-square-36' },
            { code: '160036', name: '매트', value: 'sticker-list-square-36' }
          ]
        },
        defaults: { value: 'sticker-cart-square-36' }
      },
      '106009002001': {
        name: '정사각형 스티커 48x48mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-square-4860' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-square-4860' },
            { code: '160019', name: '크라프트', value: 'sticker-list-square-4860' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-square-4860' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-square-4860' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-square-4860' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-square-4860' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-square-4860' },
            { code: '160036', name: '매트', value: 'sticker-list-square-4860' }
          ]
        },
        defaults: { value: 'sticker-cart-square-4860' }
      },
      '106010002001': {
        name: '정사각형 스티커 60x60mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-square-4860' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-square-4860' },
            { code: '160019', name: '크라프트', value: 'sticker-list-square-4860' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-square-4860' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-square-4860' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-square-4860' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-square-4860' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-square-4860' },
            { code: '160036', name: '매트', value: 'sticker-list-square-4860' }
          ]
        },
        defaults: { value: 'sticker-cart-square-4860' }
      },
      '106012002001': {
        name: '정사각형 스티커 80x80mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-square-80120' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-square-80120' },
            { code: '160019', name: '크라프트', value: 'sticker-list-square-80120' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-square-80120' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-square-80120' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-square-80120' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-square-80120' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-square-80120' },
            { code: '160036', name: '매트', value: 'sticker-list-square-80120' }
          ]
        },
        defaults: { value: 'sticker-cart-square-80120' }
      },
      '106011002001': {
        name: '정사각형 스티커 120x120mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-square-80120' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-square-80120' },
            { code: '160019', name: '크라프트', value: 'sticker-list-square-80120' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-square-80120' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-square-80120' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-square-80120' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-square-80120' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-square-80120' },
            { code: '160036', name: '매트', value: 'sticker-list-square-80120' }
          ]
        },
        defaults: { value: 'sticker-cart-square-80120' }
      },
      '106037003001': {
        name: '직사각형 스티커 30x12mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-rectangle-30-x-12' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-rectangle-30-x-12' },
            { code: '160019', name: '크라프트', value: 'sticker-list-rectangle-30-x-12' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-rectangle-30-x-12' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-rectangle-30-x-12' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-rectangle-30-x-12' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-rectangle-30-x-12' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-rectangle-30-x-12' },
            { code: '160036', name: '매트', value: 'sticker-list-rectangle-30-x-12' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-rectangle-30-x-12' },
            { code: '194002', name: '세로', value: 'sticker-cart-rectangle-12-x-30' }
          ]
        }
      },

      '106038003001': {
        name: '직사각형 스티커 50x30mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-rectangle-50-x-30' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-rectangle-50-x-30' },
            { code: '160019', name: '크라프트', value: 'sticker-list-rectangle-50-x-30' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-rectangle-50-x-30' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-rectangle-50-x-30' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-rectangle-50-x-30' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-rectangle-50-x-30' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-rectangle-50-x-30' },
            { code: '160036', name: '매트', value: 'sticker-list-rectangle-50-x-30' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-rectangle-30-x-50' },
            { code: '194002', name: '세로', value: 'sticker-cart-rectangle-50-x-30' }
          ]
        }
      },

      '106039003001': {
        name: '직사각형 스티커 105x70mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-rectangle-70-x-105' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-rectangle-70-x-105' },
            { code: '160019', name: '크라프트', value: 'sticker-list-rectangle-70-x-105' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-rectangle-70-x-105' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-rectangle-70-x-105' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-rectangle-70-x-105' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-rectangle-70-x-105' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-rectangle-70-x-105' },
            { code: '160036', name: '매트', value: 'sticker-list-rectangle-70-x-105' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-rectangle-105-x-70' },
            { code: '194002', name: '세로', value: 'sticker-cart-rectangle-70-x-105' }
          ]
        }
      },

      '106040003001': {
        name: '직사각형 스티커 120x90mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-rectangle-90-x-120' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-rectangle-90-x-120' },
            { code: '160019', name: '크라프트', value: 'sticker-list-rectangle-90-x-120' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-rectangle-90-x-120' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-rectangle-90-x-120' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-rectangle-90-x-120' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-rectangle-90-x-120' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-rectangle-90-x-120' },
            { code: '160036', name: '매트', value: 'sticker-list-rectangle-90-x-120' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-rectangle-120-x-90' },
            { code: '194002', name: '세로', value: 'sticker-cart-rectangle-90-x-120' }
          ]
        }
      },

      '106015003001': {
        name: '직사각형 스티커 40x26mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-rectangle-40-x-26' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-rectangle-40-x-26' },
            { code: '160019', name: '크라프트', value: 'sticker-list-rectangle-40-x-26' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-rectangle-40-x-26' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-rectangle-40-x-26' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-rectangle-40-x-26' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-rectangle-40-x-26' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-rectangle-40-x-26' },
            { code: '160036', name: '매트', value: 'sticker-list-rectangle-40-x-26' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-rectangle-40-x-26' },
            { code: '194002', name: '세로', value: 'sticker-cart-rectangle-26-x-40' }
          ]
        }
      },
      '106014003001': {
        name: '직사각형 스티커 65x42mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-rectangle-42-x-65' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-rectangle-42-x-65' },
            { code: '160019', name: '크라프트', value: 'sticker-list-rectangle-42-x-65' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-rectangle-42-x-65' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-rectangle-42-x-65' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-rectangle-42-x-65' },
            { code: '160034', name: '소프트', value: 'sticker-list-rectangle-42-x-65' },
            { code: '160036', name: '매트', value: 'sticker-list-rectangle-42-x-65' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-rectangle-42-x-65' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-rectangle-42-x-65' },
            { code: '160036', name: '매트', value: 'sticker-list-rectangle-42-x-65' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-rectangle-65-x-42' },
            { code: '194002', name: '세로', value: 'sticker-cart-rectangle-42-x-65' }
          ]
        }
      },
      '106013003001': {
        name: '직사각형 스티커 85x55mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-rectangle-55-x-85' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-rectangle-55-x-85' },
            { code: '160019', name: '크라프트', value: 'sticker-list-rectangle-55-x-85' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-rectangle-55-x-85' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-rectangle-55-x-85' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-rectangle-55-x-85' },
            { code: '160034', name: '소프트', value: 'sticker-list-rectangle-55-x-85' },
            { code: '160036', name: '매트', value: 'sticker-list-rectangle-55-x-85' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-rectangle-55-x-85' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-rectangle-55-x-85' },
            { code: '160036', name: '매트', value: 'sticker-list-rectangle-55-x-85' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-rectangle-85-x-55' },
            { code: '194002', name: '세로', value: 'sticker-cart-rectangle-55-x-85' }
          ]
        }
      },
      '106041004001': {
        name: '와이드 스티커 60x15mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-wide-15-x-60' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-wide-15-x-60' },
            { code: '160019', name: '크라프트', value: 'sticker-list-wide-15-x-60' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-wide-15-x-60' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-wide-15-x-60' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-wide-15-x-60' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-wide-15-x-60' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-wide-15-x-60' },
            { code: '160036', name: '매트', value: 'sticker-list-wide-15-x-60' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-wide-15-x-60' },
            { code: '194002', name: '세로', value: 'sticker-cart-wide-60-x-15' }
          ]
        }
      },
      '106020004001': {
        name: '와이드 스티커 40x10mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-wide-10-x-40' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-wide-10-x-40' },
            { code: '160019', name: '크라프트', value: 'sticker-list-wide-10-x-40' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-wide-10-x-40' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-wide-10-x-40' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-wide-10-x-40' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-wide-10-x-40' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-wide-10-x-40' },
            { code: '160036', name: '매트', value: 'sticker-list-wide-10-x-40' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-wide-40-x-10' },
            { code: '194002', name: '세로', value: 'sticker-cart-wide-10-x-40' }
          ]
        }
      },
      '106019004001': {
        name: '와이드 스티커 80x20mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-wide-20-x-80' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-wide-20-x-80' },
            { code: '160019', name: '크라프트', value: 'sticker-list-wide-20-x-80' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-wide-20-x-80' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-wide-20-x-80' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-wide-20-x-80' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-wide-20-x-80' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-wide-20-x-80' },
            { code: '160036', name: '매트', value: 'sticker-list-wide-20-x-80' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-wide-80-x-20' },
            { code: '194002', name: '세로', value: 'sticker-cart-wide-20-x-80' }
          ]
        }
      },
      '106018004001': {
        name: '와이드 스티커 120x30mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-wide-30-x-120' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-wide-30-x-120' },
            { code: '160019', name: '크라프트', value: 'sticker-list-wide-30-x-120' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-wide-30-x-120' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-wide-30-x-120' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-wide-30-x-120' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-wide-30-x-120' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-wide-30-x-120' },
            { code: '160036', name: '매트', value: 'sticker-list-wide-30-x-120' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-wide-30-x-120' },
            { code: '194002', name: '세로', value: 'sticker-cart-wide-120-x-30' }
          ]
        }
      },
      '106017004001': {
        name: '와이드 스티커 160x40mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-wide-40-x-160' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-wide-40-x-160' },
            { code: '160019', name: '크라프트', value: 'sticker-list-wide-40-x-160' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-wide-40-x-160' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-wide-40-x-160' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-wide-40-x-160' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-wide-40-x-160' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-wide-40-x-160' },
            { code: '160036', name: '매트', value: 'sticker-list-wide-40-x-160' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-wide-160-x-40' },
            { code: '194002', name: '세로', value: 'sticker-cart-wide-40-x-160' }
          ]
        }
      },
      '106016004001': {
        name: '와이드 스티커 200x50mm',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-wide-50-x-200' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-wide-50-x-200' },
            { code: '160019', name: '크라프트', value: 'sticker-list-wide-50-x-200' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-wide-50-x-200' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-wide-50-x-200' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-wide-50-x-200' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-wide-50-x-200' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-wide-50-x-200' },
            { code: '160036', name: '매트', value: 'sticker-list-wide-50-x-200' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-wide-200-x-50' },
            { code: '194002', name: '세로', value: 'sticker-cart-wide-50-x-200' }
          ]
        }
      },
      '106023005001': {
        name: 'A판형 스티커 A6',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-a' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-a' },
            { code: '160019', name: '크라프트', value: 'sticker-list-a' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-a' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-a' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-a' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-a' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-a' },
            { code: '160036', name: '매트', value: 'sticker-list-a' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-a-horizontal' },
            { code: '194002', name: '세로', value: 'sticker-cart-a-vertical' }
          ]
        }
      },
      '106022005001': {
        name: 'A판형 스티커 A5',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-a' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-a' },
            { code: '160019', name: '크라프트', value: 'sticker-list-a' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-a' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-a' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-a' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-a' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-a' },
            { code: '160036', name: '매트', value: 'sticker-list-a' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-a-horizontal' },
            { code: '194002', name: '세로', value: 'sticker-cart-a-vertical' }
          ]
        }
      },
      '106021005001': {
        name: 'A판형 스티커 A4',
        showcase: {
          paper: [
            { code: '160005', name: '스탠다드 무광', value: 'sticker-list-a' },
            { code: '160006', name: '스탠다드 유광', value: 'sticker-list-a' },
            { code: '160019', name: '크라프트', value: 'sticker-list-a' },
            { code: '160020', name: '홀로그램', value: 'sticker-list-a' },
            { code: '160021', name: '투명 무광', value: 'sticker-list-clean-a' },
            { code: '160022', name: '투명 유광', value: 'sticker-list-clean-a' },
            { code: '160034', name: '소프트 무광', value: 'sticker-list-a' },
            { code: '160035', name: '소프트 유광', value: 'sticker-list-a' },
            { code: '160036', name: '매트', value: 'sticker-list-a' }
          ]
        },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'sticker-cart-a-horizontal' },
            { code: '194002', name: '세로', value: 'sticker-cart-a-vertical' }
          ]
        }
      },
      '201001001001': {
        name: '전단 A4',
        showcase: { value: 'ad-flyer-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'flyer-a-vertical' }
          ]
        }
      },
      '201002001001': {
        name: '전단 A5',
        showcase: { value: 'ad-flyer-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'flyer-a-vertical' }
          ]
        }
      },
      '201003001001': {
        name: '전단 LONG',
        showcase: { value: 'ad-flyer-03-long-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'flyer-long-vertical' }
          ]
        }
      },
      '201005001001': {
        name: '전단 5 x 7',
        showcase: { value: 'ad-flyer-05-5-x-7-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'flyer-57-vertical' }
          ]
        }
      },
      '201004001001': {
        name: '전단 4 x 6',
        showcase: { value: 'ad-flyer-06-4-x-6-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'flyer-46-vertical' }
          ]
        }
      },
      '201006001001': {
        name: '전단 SQUARE',
        showcase: { value: 'ad-flyer-04-square-720-x-880' },
        defaults: {
          directionType: [
            { code: '194003', name: '정사각', value: 'flyer-square' }
          ]
        }
      },
      '202001001001': {
        name: '브로슈어 2단 폴더 A4',
        showcase: { value: 'ad-brochure-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'brochure-a-bi-fold-vertical' }
          ]
        }
      },
      '202002001001': {
        name: '브로슈어 2단 폴더 A5 ',
        showcase: { value: 'ad-brochure-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'brochure-a-bi-fold-vertical' }
          ]
        }
      },
      '202003001001': {
        name: '브로슈어 2단 폴더 Long',
        showcase: { value: 'ad-brochure-03-long-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'brochure-long-bi-fold-vertical' }
          ]
        }
      },
      '202004001001': {
        name: '브로슈어 2단 폴더 Square',
        showcase: { value: 'ad-brochure-04-square-720-x-880' },
        defaults: {
          directionType: [
            { code: '194003', name: '정사각', value: 'brochure-square-bi-fold' }
          ]
        }
      },
      '202001002001': {
        name: '브로슈어 3단 폴더 A4',
        showcase: { value: 'ad-brochure-t-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'brochure-a-tri-fold-vertical' }
          ]
        }
      },
      '202002002001': {
        name: '브로슈어 3단 폴더 A5',
        showcase: { value: 'ad-brochure-t-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'brochure-a-tri-fold-vertical' }
          ]
        }
      },
      '202003002001': {
        name: '브로슈어 3단 폴더 Long',
        showcase: { value: 'ad-brochure-t-03-long-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'brochure-long-tri-fold-vertical' }
          ]
        }
      },
      '202004002001': {
        name: '브로슈어 3단 폴더 Square',
        showcase: { value: 'ad-brochure-t-04-square-720-x-880' },
        defaults: {
          directionType: [
            { code: '194003', name: '정사각', value: 'brochure-square-tri-fold' }
          ]
        }
      },
      '203001001001': {
        name: '메뉴판 플랫 A4',
        showcase: { value: 'ad-menu-flat-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'menu-flat-vertical' }
          ]
        }
      },
      '203002001001': {
        name: '메뉴판 플랫 A5+',
        showcase: { value: 'ad-menu-flat-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'menu-flat-vertical' }
          ]
        }
      },
      '203003001001': {
        name: '메뉴판 플랫 A5',
        showcase: { value: 'ad-menu-flat-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'menu-flat-vertical' }
          ]
        }
      },
      '203001002001': {
        name: '메뉴판 폴더 A4',
        showcase: { value: 'ad-menu-folder-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'menu-bi-fold-vertical' }
          ]
        }
      },
      '203002002001': {
        name: '메뉴판 폴더 A5+',
        showcase: { value: 'ad-menu-folder-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'menu-bi-fold-vertical' }
          ]
        }
      },
      '203003002001': {
        name: '메뉴판 폴더 A5',
        showcase: { value: 'ad-menu-folder-01-a-4-720-x-880' },
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'menu-bi-fold-vertical' }
          ]
        }
      },
      '204001001001': {
        name: '포스트카드',
        showcase: { value: 'ad-postcard-720-x-880' },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'postcard-horizontal' }
          ]
        }
      },
      '205001001001': {
        name: '쿠폰',
        showcase: { value: 'ad-coupon-720-x-880' },
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'coupon-horizontal' }
          ]
        }
      },
      '311001000001': {
        name: '스탠다드 배너 600X1800',
        showcase: { value: 'sp-list-banner-600-x-1800' },
        defaults: {
          frame: [
            { code: '504007', name: 'X형', value: 'sp-cart-banner-x-600-x-1800' },
            { code: '504008', name: 'Y형', value: 'sp-cart-banner-y-600-x-1800' },
            { code: '504009', name: 'I형', value: 'sp-cart-banner-i-600-x-1800' },
            { code: '504003', name: '유리 접착 고무', value: 'sp-cart-banner-600-x-1800-none' },
            { code: '504000', name: '선택 안함', value: 'sp-cart-banner-600-x-1800-none' }
          ]
        }
      },
      '311003000001': {
        name: '스탠다드 배너 B2',
        showcase: { value: 'sp-list-banner-b' },
        defaults: {
          frame: [
            { code: '504010', name: '스탠드 I형', value: 'sp-cart-banner-i-500-x-720' },
            { code: '504003', name: '유리 접착 고무', value: 'sp-cart-banner-b-none' },
            { code: '504000', name: '선택 안함', value: 'sp-cart-banner-b-none' }
          ]
        }
      },
      '311002000001': {
        name: '스탠다드 배너 A1',
        showcase: { value: 'sp-list-banner-a' },
        defaults: {
          frame: [
            { code: '504010', name: '스탠드 I형', value: 'sp-cart-banner-i-594-x-841' },
            { code: '504000', name: '선택 안함', value: 'sp-cart-banner-a-none' }
          ]
        }
      },
      '312001000001': {
        name: '양면 배너',
        showcase: { value: 'sp-list-banner-600-x-1800' },
        defaults: {
          frame: [
            { code: '504018', name: '양면 거치대', value: 'sp-cart-banner-bothsides-600-x-1800' },
            { code: '504003', name: '유리 접착 고무', value: 'sp-cart-banner-bothsides-600-x-1800-none' }
          ]
        }
      },
      '314001000001': {
        name: '롤업 배너',
        showcase: { value: 'sp-list-banner-850-x-2000' },
        defaults: { value: 'sp-cart-banner-850-x-2000' }
      },
      '313001000001': {
        name: '미니 배너 150X300',
        showcase: { value: 'sp-list-banner-150-x-300' },
        defaults: {
          frame: [
            { code: '504011', name: '투명 거치대', value: 'sp-cart-banner-150-x-300' },
            { code: '504000', name: '선택 안함', value: 'sp-cart-banner-150-x-300-none' }
          ]
        }
      },
      '313002000001': {
        name: '미니 배너 180X420',
        showcase: { value: 'sp-list-banner-180-x-420' },
        defaults: {
          frame: [
            { code: '504011', name: '투명 거치대', value: 'sp-cart-banner-180-x-420' },
            { code: '504000', name: '선택 안함', value: 'sp-cart-banner-180-x-420-none' }
          ]
        }
      },
      '303004000001': {
        name: '보드 사인 A4',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-board-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-board-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519004',
              name: 'PET 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519005',
              name: '투명 스티커',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '303003000001': {
        name: '보드 사인 A3',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-board-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-board-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519004',
              name: 'PET 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519005',
              name: '투명 스티커',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '303002000001': {
        name: '보드 사인 A2',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-board-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-board-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519004',
              name: 'PET 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519005',
              name: '투명 스티커',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '303001000001': {
        name: '보드 사인 A1',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-board-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-board-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519004',
              name: 'PET 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519005',
              name: '투명 스티커',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '303007000001': {
        name: '보드 사인 B4',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-board-b-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-board-b' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519004',
              name: 'PET 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519005',
              name: '투명 스티커',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-b' }
              ]
            }
          ]
        }
      },
      '303006000001': {
        name: '보드 사인 B3',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-board-b-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-board-b' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519004',
              name: 'PET 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519005',
              name: '투명 스티커',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-b' }
              ]
            }
          ]
        }
      },
      '303005000001': {
        name: '보드 사인 B2',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-board-b-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-board-b' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519004',
              name: 'PET 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519005',
              name: '투명 스티커',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-board-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-board-b' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-b' }
              ]
            }
          ]
        }
      },
      '304004000001': {
        name: '아크릴 사인 A4',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-acrylic-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-acrylic-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-acrylic-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-acrylic-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '304003000001': {
        name: '아크릴 사인 A3',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-acrylic-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-acrylic-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-acrylic-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-acrylic-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '304002000001': {
        name: '아크릴 사인 A2',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-acrylic-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-acrylic-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-acrylic-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-acrylic-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '304001000001': {
        name: '아크릴 사인 A1',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-acrylic-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-acrylic-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-acrylic-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-acrylic-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '304007000001': {
        name: '아크릴 사인 B4',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-acrylic-b-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-acrylic-b' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-acrylic-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-acrylic-b' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-b' }
              ]
            }
          ]
        }
      },
      '304006000001': {
        name: '아크릴 사인 B3',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-acrylic-b-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-acrylic-b' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-acrylic-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-acrylic-b' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-b' }
              ]
            }
          ]
        }
      },
      '304005000001': {
        name: '아크릴 사인 B2',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-acrylic-b-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-acrylic-b' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-acrylic-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-acrylic-b' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-b' }
              ]
            }
          ]
        }
      },
      '305004000001': {
        name: '메탈 사인 A4',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-metal-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-metal-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-a' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '305003000001': {
        name: '메탈 사인 A3',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-metal-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-metal-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-a' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '305002000001': {
        name: '메탈 사인 A2',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-metal-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-metal-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-a' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '305001000001': {
        name: '메탈 사인 A1',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-metal-a-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-metal-a' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-a' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-a' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-a-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-a' }
              ]
            }
          ]
        }
      },
      '305007000001': {
        name: '메탈 사인 B4',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-metal-b-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-metal-b' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-b' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-b' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-b' }
              ]
            }
          ]
        }
      },
      '305006000001': {
        name: '메탈 사인 B3',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-metal-b-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-metal-b' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-b' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-b' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-b' }
              ]
            }
          ]
        }
      },
      '305005000001': {
        name: '메탈 사인 B2',
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'sp-list-sign-metal-b-horizontal' },
            { code: '194002', name: '세로', value: 'sp-list-sign-metal-b' }
          ]
        },
        defaults: {
          frameOptionCode: [
            {
              code: '519007',
              name: '나무 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-b' }
              ]
            },
            {
              code: '519006',
              name: '금속 벽걸이',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-metal-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-metal-b' }
              ]
            },
            {
              code: '519000',
              name: '선택 안함',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-banner-b-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-banner-b' }
              ]
            }
          ]
        }
      },
      '306004000001': {
        name: '원목 사인 A4',
        showcase: {
          frame: [
            {
              code: '504015',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-34-natural-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-34-natural' }
              ]
            },
            {
              code: '504016',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-34-brown-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-34-brown' }
              ]
            },
            {
              code: '504017',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-34-black-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-34-black' }
              ]
            }
          ]
        },
        defaults: {
          frame: [
            {
              code: '504015',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-34-natural-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-34-natural' }
              ]
            },
            {
              code: '504016',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-34-brown-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-34-brown' }
              ]
            },
            {
              code: '504017',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-34-black-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-34-black' }
              ]
            }
          ]
        }
      },
      '306003000001': {
        name: '원목 사인 A3',
        showcase: {
          frame: [
            {
              code: '504015',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-34-natural-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-34-natural' }
              ]
            },
            {
              code: '504016',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-34-brown-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-34-brown' }
              ]
            },
            {
              code: '504017',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-34-black-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-34-black' }
              ]
            }
          ]
        },
        defaults: {
          frame: [
            {
              code: '504015',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-34-natural-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-34-natural' }
              ]
            },
            {
              code: '504016',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-34-brown-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-34-brown' }
              ]
            },
            {
              code: '504017',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-34-black-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-34-black' }
              ]
            }
          ]
        }
      },
      '306001000001': {
        name: '원목 사인 A1',
        showcase: {
          frame: [
            {
              code: '504015',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-12-natural-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-12-natural' }
              ]
            },
            {
              code: '504016',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-12-brown-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-12-brown' }
              ]
            },
            {
              code: '504017',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-12-black-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-12-black' }
              ]
            }
          ]
        },
        defaults: {
          frame: [
            {
              code: '504015',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-12-natural-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-12-natural' }
              ]
            },
            {
              code: '504016',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-12-brown-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-12-brown' }
              ]
            },
            {
              code: '504017',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-12-black-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-12-black' }
              ]
            }
          ]
        }
      },
      '306002000001': {
        name: '원목 사인 A2',
        showcase: {
          frame: [
            {
              code: '504015',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-12-natural-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-12-natural' }
              ]
            },
            {
              code: '504016',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-12-brown-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-12-brown' }
              ]
            },
            {
              code: '504017',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-list-sign-wood-a-12-black-horizontal' },
                { code: '194002', name: '세로', value: 'sp-list-sign-wood-a-12-black' }
              ]
            }
          ]
        },
        defaults: {
          frame: [
            {
              code: '504015',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-12-natural-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-12-natural' }
              ]
            },
            {
              code: '504016',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-12-brown-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-12-brown' }
              ]
            },
            {
              code: '504017',
              directionType: [
                { code: '194001', name: '가로', value: 'sp-cart-sign-wood-a-12-black-horizontal' },
                { code: '194002', name: '세로', value: 'sp-cart-sign-wood-a-12-black' }
              ]
            }
          ]
        }
      },
      '307004000001': {
        name: '윈도우 데칼 A4',
        showcase: { value: 'sp-list-windowdecal-a' },
        defaults: { value: 'sp-cart-windowdecal-a' }
      },
      '307003000001': {
        name: '윈도우 데칼 A3',
        showcase: { value: 'sp-list-windowdecal-a' },
        defaults: { value: 'sp-cart-windowdecal-a' }
      },
      '307002000001': {
        name: '윈도우 데칼 A2',
        showcase: { value: 'sp-list-windowdecal-a' },
        defaults: { value: 'sp-cart-windowdecal-a' }
      },
      '307001000001': {
        name: '윈도우 데칼 A1',
        showcase: { value: 'sp-list-windowdecal-a' },
        defaults: { value: 'sp-cart-windowdecal-a' }
      },
      '307007000001': {
        name: '윈도우 데칼 B4',
        showcase: { value: 'sp-list-windowdecal-a' },
        defaults: { value: 'sp-cart-windowdecal-a' }
      },
      '307006000001': {
        name: '윈도우 데칼 B3',
        showcase: { value: 'sp-list-windowdecal-a' },
        defaults: { value: 'sp-cart-windowdecal-a' }
      },
      '307005000001': {
        name: '윈도우 데칼 B2',
        showcase: { value: 'sp-list-windowdecal-a' },
        defaults: { value: 'sp-cart-windowdecal-a' }
      },
      '308003000001': {
        name: '테이블 탑 사인 A6',
        showcase: { value: 'sp-list-sign-tabletop-a' },
        defaults: { value: 'sp-cart-sign-tabletop-a' }
      },
      '308002000001': {
        name: '테이블 탑 사인 A5',
        showcase: { value: 'sp-list-sign-tabletop-a' },
        defaults: { value: 'sp-cart-sign-tabletop-a' }
      },
      '308001000001': {
        name: '테이블 탑 사인 A4',
        showcase: { value: 'sp-list-sign-tabletop-a' },
        defaults: { value: 'sp-cart-sign-tabletop-a' }
      },

      '309006000001': {
        name: '카 마그넷 150X100',
        showcase: { value: 'sp-list-carmagnet-600-x-400' },
        defaults: { value: 'sp-cart-carmagnet-600-x-400' }
      },

      '309007000001': {
        name: '카 마그넷 300X200',
        showcase: { value: 'sp-list-carmagnet-600-x-400' },
        defaults: { value: 'sp-cart-carmagnet-600-x-400' }
      },
      '309002000001': {
        name: '카 마그넷 450X300',
        showcase: { value: 'sp-list-carmagnet-600-x-400' },
        defaults: { value: 'sp-cart-carmagnet-600-x-400' }
      },
      '309001000001': {
        name: '카 마그넷 600X400',
        showcase: { value: 'sp-list-carmagnet-600-x-400' },
        defaults: { value: 'sp-cart-carmagnet-600-x-400' }
      },
      '309008000001': {
        name: '카 마그넷 400X97',
        showcase: { value: 'sp-list-carmagnet-1200-x-300' },
        defaults: { value: 'sp-cart-carmagnet-1200-x-300' }
      },
      '309005000001': {
        name: '카 마그넷 800X200',
        showcase: { value: 'sp-list-carmagnet-1200-x-300' },
        defaults: { value: 'sp-cart-carmagnet-1200-x-300' }
      },
      '309004000001': {
        name: '카 마그넷 1000X250',
        showcase: { value: 'sp-list-carmagnet-1200-x-300' },
        defaults: { value: 'sp-cart-carmagnet-1200-x-300' }
      },
      '309003000001': {
        name: '카 마그넷 1200X300',
        showcase: { value: 'sp-list-carmagnet-1200-x-300' },
        defaults: { value: 'sp-cart-carmagnet-1200-x-300' }
      },
      '310001000001': {
        name: 'A 프레임 사인',
        showcase: { value: 'sp-list-sign-aframe-450-x-800' },
        defaults: {
          color: [
            { code: '520001', value: 'sp-cart-sign-aframe-450-x-800-white' },
            { code: '520002', value: 'sp-cart-sign-aframe-450-x-800' },
            { code: '520000', value: 'sp-cart-sign-aframe-450-x-800-none' }
          ]
        }
      },


      "401001001001": {
        name: '캘린더 가로 L',
        defaults: { value: 'calendar-original-width-cart' }
      },

      "401002001001": {
        name: '캘린더 가로 M',
        defaults: { value: 'calendar-opm-width-cart' }
      },

      "401002002001": {
        name: '캘린더 세로 M',
        defaults: { value: 'calendar-opm-height-cart' }
      },

      "401003002001": {
        name: '캘린더 세로 S',
        defaults: { value: 'calendar-mini-height-cart' }
      },



      '701001001001': {
        name: '길단 20수 라운드 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001002001': {
        name: '길단 포켓 라운드 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701002008001': {
        name: '길단 브이넥 반팔(남)',
        defaults: { value: 'dummy-720x720' }
      },
      '701003008001': {
        name: '길단 브이넥 반팔(여)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001003001': {
        name: '길단 래글런 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001004001': {
        name: '길단 링어 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001001002': {
        name: '길단 기능성 라운드 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701002006001': {
        name: '길단 슬림 카라 반팔(남)',
        defaults: { value: 'dummy-720x720' }
      },
      '701003006001': {
        name: '길단 슬림 카라 반팔(여)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001001003': {
        name: '아메리칸어패럴 30수 프리미엄 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701003001001': {
        name: '아메리칸어패럴 30수 프리미엄 반팔(여)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001001004': {
        name: '앤빌 컬러믹스 라운드 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001001005': {
        name: '트리플에이 18수 라운드 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001001006': {
        name: '프린트스타 17수 라운드 반팔(남/여/아동공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001007001': {
        name: '프린트스타 레이어드 카라 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001007002': {
        name: '글리머 기능성 포켓 버튼다운 카라 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001007003': {
        name: '글리머 기능성 포켓 레이어드 버튼다운 카라 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '702001010001': {
        name: '오프린트미 기모 맨투맨(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '702004013001': {
        name: '오프린트미 베이직 후드집업(유아동)',
        defaults: { value: 'dummy-720x720' }
      },
      '702001014001': {
        name: '오프린트미 기모 후드 집업(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '702001011001': {
        name: '오프린트미 베이직 후드티(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '702001015001': {
        name: '오프린트미 드라이 후드 집업(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '704001017003': {
        name: '오프린트미 베이직 에코백(S)',
        defaults: { value: 'dummy-720x720' }
      },
      '703004016001': {
        name: '오프린트미 베이직 팬츠(유아동)',
        defaults: { value: 'dummy-720x720' }
      },
      '703001016001': {
        name: '오프린트미 베이직 팬츠(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '702004009001': {
        name: '오프린트미 베이직 맨투맨(유아동)',
        defaults: { value: 'dummy-720x720' }
      },
      '704001017002': {
        name: '오프린트미 베이직 에코백(M)',
        defaults: { value: 'dummy-720x720' }
      },
      '702004011001': {
        name: '오프린트미 베이직 후드티(유아동)',
        defaults: { value: 'dummy-720x720' }
      },
      '702001012001': {
        name: '오프린트미 기모 후드티(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '704001017001': {
        name: '오프린트미 베이직 에코백(L)',
        defaults: { value: 'dummy-720x720' }
      },
      '702004015001': {
        name: '오프린트미 드라이 후드 집업(유아동)',
        defaults: { value: 'dummy-720x720' }
      },
      '702001013001': {
        name: '오프린트미 베이직 후드집업(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '702001009001': {
        name: '오프린트미 베이직 맨투맨(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },
      '701004001001': {
        name: '프린트스타 17수 라운드 반팔(유아동)',
        defaults: { value: 'dummy-720x720' }
      },
      '701001001007': {
        name: '길단 18수 릴렉스핏 라운드 반팔(남여공용)',
        defaults: { value: 'dummy-720x720' }
      },



      '999001000000': {
        name: '샘플팩',
        showcase: { value: 'samplepack' }
      },

      //핀버튼
      '502001001001': {
        name: '핀 버튼 원형 - 32x32',
        showcase: {
          paper: [
            { code: '160064', name: '32x32', value: 'list-btn-circle-32' },
            { code: '160067', name: '32x32', value: 'list-btn-circle-32' }
          ]
        }
      },
      '502002001001': {
        name: '핀 버튼 원형 - 38x38',
        showcase: {
          paper: [
            { code: '160064', name: '38x38', value: 'list-btn-circle-38' },
            { code: '160067', name: '38x38', value: 'list-btn-circle-38' }
          ]
        }
      },
      '502003001001': {
        name: '핀 버튼 원형 - 44x44',
        showcase: {
          paper: [
            { code: '160064', name: '44x44', value: 'list-btn-circle-44' },
            { code: '160067', name: '44x44', value: 'list-btn-circle-44' }
          ]
        }
      },
      '502004001001': {
        name: '핀 버튼 원형 - 58x58',
        showcase: {
          paper: [
            { code: '160064', name: '58x58', value: 'list-btn-circle-58' },
            { code: '160067', name: '58x58', value: 'list-btn-circle-58' }
          ]
        }
      },
      '502005001001': {
        name: '핀 버튼 원형 - 75x75',
        showcase: {
          paper: [
            { code: '160064', name: '75x75', value: 'list-btn-circle-75' },
            { code: '160067', name: '75x75', value: 'list-btn-circle-75' }
          ]
        }
      },
      '502006002001': {
        name: '핀 버튼 하트 - 57x52',
        showcase: {
          paper: [
            { code: '160064', name: '57x52', value: 'list-btn-heart' },
            { code: '160067', name: '57x52', value: 'list-btn-heart' }
          ]
        }
      },
      '502007003001': {
        name: '핀 버튼 사각 - 37x37',
        showcase: {
          paper: [
            { code: '160064', name: '37x37', value: 'list-btn-square-37' },
            { code: '160066', name: '37x37', value: 'list-btn-square-37' }
          ]
        }
      },
      '502008003001': {
        name: '핀 버튼 사각 - 50x50',
        showcase: {
          paper: [
            { code: '160064', name: '50x50', value: 'list-btn-square-50' },
            { code: '160065', name: '50x50', value: 'list-btn-square-50' }
          ]
        }
      },

      //거울버튼
      '503001001001': {
        name: '버튼 거울 원형 - 58x58',
        showcase: {
          paper: [
            { code: '160064', name: '58x58', value: 'list-btn-circle-58' },
            { code: '160067', name: '58x58', value: 'list-btn-circle-58' }
          ]
        }
      },
      '503002001001': {
        name: '버튼 거울 원형 - 75x75',
        showcase: {
          paper: [
            { code: '160064', name: '75x75', value: 'list-btn-circle-75' },
            { code: '160067', name: '75x75', value: 'list-btn-circle-75' }
          ]
        }
      },

      //자석버튼
      '504001001001': {
        name: '자석버튼 원형 32x32',
        showcase: {
          paper: [
            { code: '160064', name: '32x32', value: 'list-btn-circle-32' },
            { code: '160067', name: '32x32', value: 'list-btn-circle-32' }
          ]
        }
      },
      '504002001001': {
        name: '자석버튼 원형 38x38',
        showcase: {
          paper: [
            { code: '160064', name: '38x38', value: 'list-btn-circle-38' },
            { code: '160067', name: '38x38', value: 'list-btn-circle-38' }
          ]
        }
      },
      '504003001001': {
        name: '자석버튼 원형 44x44',
        showcase: {
          paper: [
            { code: '160064', name: '44x44', value: 'list-btn-circle-44' },
            { code: '160067', name: '44x44', value: 'list-btn-circle-44' }
          ]
        }
      },
      '504004001001': {
        name: '자석버튼 원형 58x58',
        showcase: {
          paper: [
            { code: '160064', name: '58x58', value: 'list-btn-circle-58' },
            { code: '160067', name: '58x58', value: 'list-btn-circle-58' }
          ]
        }
      },
      '504005002001': {
        name: '버튼 자석 하트 - 57x52',
        showcase: {
          paper: [
            { code: '160064', name: '57x52', value: 'list-btn-heart' },
            { code: '160067', name: '57x52', value: 'list-btn-heart' }
          ]
        }
      },
      '504006003001': {
        name: '버튼 자석 사각 - 37x37',
        showcase: {
          paper: [
            { code: '160064', name: '37x37', value: 'list-btn-square-37' },
            { code: '160066', name: '37x37', value: 'list-btn-square-37' }
          ]
        }
      },

      //스마트톡
      '501001001001': {
        name: '스마트톡 원형',
        showcase: {
          color: [
            { code: '520001', name: '화이트', value: 'list-griptok-circle-white' },
            { code: '520002', name: '블랙', value: 'list-griptok-circle-black' }
          ]
        }
      },

      '501002002001': {
        name: '스마트톡 하트형',
        showcase: {
          color: [
            { code: '520001', name: '화이트', value: 'list-griptok-heart-white' },
            { code: '520002', name: '블랙', value: 'list-griptok-heart-black' }
          ]
        }
      },

      //부채
      '506001001001' : {
        name: '부채/동굴이/화이트PP',
        defaults: { value: 'handfan-cart-round-white' },
        showcase: {
          frame: [
            {
              code: '504043',
              directionType: [
                { code: '194003', name: '화이트PP', value: 'handfan-list-round-white' },
              ]
            },
            {
              code: '504044',
              directionType: [
                { code: '194003', name: '화이트PP', value: 'handfan-list-stick-white' },
              ]
            }
          ]
        }
      },

      '507001001001' : {
        name: '부채/동글이/투명PET',
        defaults: { value: 'handfan-cart-round-clear' },
        showcase: {
          frame: [
            {
              code: '504043',
              directionType: [
                { code: '194003', name: '투명PET', value: 'handfan-list-round-clear' },
              ]
            },
            {
              code: '504044',
              directionType: [
                { code: '194003', name: '투명PET', value: 'handfan-list-stick-clear' },
              ]
            }
          ]
        }
      },

      '601001001001' : {
        name: '봉투/일반형/대봉투',
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-cart-standard-big-row-skin' },
            { code: '194002', name: '세로', value: 'envelope-cart-standard-big-col-skin' }
          ]
        },
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-list-standard-big-skin' },
            { code: '194002', name: '세로', value: 'envelope-list-standard-big-skin' }
          ]
        }
      },
      '601002001001' : {
        name: '봉투/일반형/중봉투',
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-cart-standard-medium-row-skin' },
            { code: '194002', name: '세로', value: 'envelope-cart-standard-medium-col-skin' }
          ]
        },
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-list-standard-medium-skin' },
            { code: '194002', name: '세로', value: 'envelope-list-standard-medium-skin' }
          ]
        }
      },
      '601003001001' : {
        name: '봉투/일반형/소봉투',
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-cart-standard-small-row-skin' },
            { code: '194002', name: '세로', value: 'envelope-cart-standard-small-col-skin' }
          ]
        },
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-list-standard-small-skin' },
            { code: '194002', name: '세로', value: 'envelope-list-standard-small-skin' }
          ]
        }
      },
      '601004001001' : {
        name: '봉투/일반형/캘린더 가로L',
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-cart-standard-calendar-row-l-skin' },
            /*{ code: '194002', name: '세로', value: 'envelope-cart-standard-calendar-row-l-skin' }*/
          ]
        },
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-list-standard-calendar-row-l-skin' },
            { code: '194002', name: '세로', value: 'envelope-list-standard-calendar-row-l-skin' }
          ]
        }
      },
      '601005001001' : {
        name: '봉투/일반형/캘린더 가로M',
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-cart-standard-calendar-row-m-skin' },
            /*{ code: '194002', name: '세로', value: 'envelope-cart-standard-calendar-row-l-skin' }*/
          ]
        },
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-list-standard-calendar-row-m-skin' },
            { code: '194002', name: '세로', value: 'envelope-list-standard-calendar-row-m-skin' }
          ]
        }
      },
      '601006001001' : {
        name: '봉투/일반형/캘린더 세로M',
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'envelope-cart-standard-calendar-col-m-skin' },
            /*{ code: '194002', name: '세로', value: 'envelope-cart-standard-calendar-row-l-skin' }*/
          ]
        },
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-list-standard-calendar-col-m-skin' },
            { code: '194002', name: '세로', value: 'envelope-list-standard-calendar-col-m-skin' }
          ]
        }
      },
      '601007001001' : {
        name: '봉투/일반형/캘린더 세로S',
        defaults: {
          directionType: [
            { code: '194002', name: '세로', value: 'envelope-cart-standard-calendar-col-s-skin' },
            /*{ code: '194002', name: '세로', value: 'envelope-cart-standard-calendar-row-l-skin' }*/
          ]
        },
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-list-standard-calendar-col-s-skin' },
            { code: '194002', name: '세로', value: 'envelope-list-standard-calendar-col-s-skin' }
          ]
        }
      },
      '601008002001' : {
        name: '봉투/자켓형/소봉투',
        defaults: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-cart-jacket-small-skin' },
            /*{ code: '194002', name: '세로', value: 'envelope-cart-standard-calendar-row-l-skin' }*/
          ]
        },
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-list-jacket-small-skin' },
            { code: '194002', name: '세로', value: 'envelope-list-jacket-small-skin' }
          ]
        }
      },

    '601010003001' : {
      name: '봉투/안내형/5x7',
      defaults: { value: 'envelope-cart-info-57-skin' },
        showcase: {
        directionType: [
          { code: '194001', name: '가로', value: 'envelope-list-info-57-skin' },
          { code: '194002', name: '세로', value: 'envelope-list-info-57-skin' }
        ]
      }
    },
    '601011003001' : {
      name: '봉투/안내형/4x6',
      defaults: { value: 'envelope-cart-info-46-skin' },
      showcase: {
        directionType: [
          { code: '194001', name: '가로', value: 'envelope-list-info-46-skin' },
          { code: '194002', name: '세로', value: 'envelope-list-info-46-skin' }
        ]
      }
    },
    '601009003001' : {
      name: '봉투/안내형/쿠폰',
      defaults: { value: 'envelope-cart-info-coupon-skin' },
      showcase: {
        directionType: [
          { code: '194001', name: '가로', value: 'envelope-list-info-coupon-skin' },
          { code: '194002', name: '세로', value: 'envelope-list-info-coupon-skin' }
        ]
      }
    },
      '601012003001' : {
        name: '봉투/자켓형/미니',
        defaults: { value: 'envelope-cart-info-mini-skin' },
        showcase: {
          directionType: [
            { code: '194001', name: '가로', value: 'envelope-list-info-mini-skin' },
            { code: '194002', name: '세로', value: 'envelope-list-info-mini-skin' }
          ]
        }
      },
      "602001001001" : {
        name: '쇼핑백/와이드/중',
        showcase: {
          frame: [
            { code: "504046", name: '화이트', value: 'shopping-skin-wide-white-middle' },
            { code: '504047', name: '블랙', value: 'shopping-skin-wide-black-middle' },
            { code: '504048', name: '브라운', value: 'shopping-skin-wide-brown-middle' }
          ]
        }
      },
      "602002001001" : {
        name: '쇼핑백/와이드/소',
        showcase: {
          frame: [
            { code: "504046", name: '화이트', value: 'shopping-skin-wide-white-small' },
            { code: '504047', name: '블랙', value: 'shopping-skin-wide-black-small' },
            { code: '504048', name: '브라운', value: 'shopping-skin-wide-brown-small' }
          ]
        }
      },
      "602003002001" : {
        name: '쇼핑백/세로/대',
        showcase: {
          frame: [
            { code: "504046", name: '화이트', value: 'shopping-skin-col-white-large' },
            { code: '504047', name: '블랙', value: 'shopping-skin-col-black-large' },
            { code: '504048', name: '브라운', value: 'shopping-skin-col-brown-large' }
          ]
        }
      },
      "602004002001" : {
        name: '쇼핑백/세로/중',
        showcase: {
          frame: [
            { code: "504046", name: '화이트', value: 'shopping-skin-col-white-middle' },
            { code: '504047', name: '블랙', value: 'shopping-skin-col-black-middle' },
            { code: '504048', name: '브라운', value: 'shopping-skin-col-brown-middle' }
          ]
        }
      },
      "602005002001" : {
        name: '쇼핑백/세로/소',
        showcase: {
          frame: [
            { code: "504046", name: '화이트', value: 'shopping-skin-col-white-small' },
            { code: '504047', name: '블랙', value: 'shopping-skin-col-black-small' },
            { code: '504048', name: '브라운', value: 'shopping-skin-col-brown-small' }
          ]
        }
      },
      "510001001001" : {
        name: '투명PVC커버 다이어리',
        showcase: { value: 'list-pvc-cover-front' }
      },
      "514001001001" : {
        name: '노트패드',
        defaults: { value: 'cart-note-pad-a-5' }
      },
      "514002001001" : {
        name: '노트패드',
        defaults: { value: 'cart-note-pad-b-5' }
      },
      "513001001001" : {
        name: '메모패드',
        defaults: { value: 'cart-memo-pad-90-x-90' }
      },
      "513002001001" : {
        name: '메모패드',
        defaults: { value: 'cart-memo-pad-90-x-130' }
      }

    };

    this.onUpdateValid = this.onUpdateValid.bind(this);
  }

  getMaskImage() {
    let { productCode, paperCode, frameCode, frameOptionCode, colorCode, directionType, type, skinVersion } = this.props;
    let product = this.mask[ productCode ] ? this.mask[ productCode ][ type ] : {};

    //봉투는 194002 - 세로 001 - 가로
    let filteredProduct = [
      { name: 'paper', value: paperCode },
      { name: 'frame', value: frameCode },
      { name: 'frameOptionCode', value: frameOptionCode },
      { name: 'color', value: colorCode },
      { name: 'directionType', value: directionType },
      { name: 'productCode', value: productCode }
    ].reduce((target, condition) => {
      (target && target[ condition[ 'name' ] ]) &&
      (target = target[ condition[ 'name' ] ].find(item => item[ 'code' ] === condition[ 'value' ]));

      return target;
    }, product);

    if((productCode === "501001001001" || productCode === "501002002001") && colorCode && filteredProduct){
      let fileName = filteredProduct[ 'value' ];

      if(colorCode === "520002" && fileName.indexOf('white') !== -1){
        fileName = fileName.replace("white","black");
      }

      if(colorCode === "520001" && fileName.indexOf('black') !== -1){
        fileName = fileName.replace("black","white");
      }

      filteredProduct = Object.assign({}, filteredProduct, {value : fileName})

    }

    if(productCode === "506001001001" && filteredProduct && (filteredProduct['value'].indexOf("list") === -1)){

      let fileName = 'handfan-cart-round-clear';
      if(frameCode === "504044"){
        fileName = fileName.replace("round", "stick");
      }

      if(paperCode === "160068"){
        fileName = fileName.replace("clear", "white");
      }

      filteredProduct = Object.assign({}, filteredProduct, {value : fileName})
    }

    if(productCode === "507001001001" && filteredProduct && (filteredProduct['value'].indexOf("list") === -1)){

      let fileName = 'handfan-cart-round-clear';
      if(frameCode === "504044"){
        fileName = fileName.replace("round", "stick");
      }

      if(paperCode === "160068"){
        fileName = fileName.replace("clear", "white");
      }


      filteredProduct = Object.assign({}, filteredProduct, {value : fileName})
    }

    if(productCode === "106044208001" && !!frameCode){

      if(frameCode === "504002" && (filteredProduct.value).indexOf("round") === -1 ){
        filteredProduct.value = filteredProduct.value+"-round";
      }
    }

    return filteredProduct && filteredProduct[ 'value' ] && `/images/common/mask/${type}/${filteredProduct[ 'value' ]}${skinVersion ? `-${skinVersion}` : ``}@2x.png`;
  }

  onUpdateValid(isValid) {
    this.setState(update(this.state, {
      ready: { $set: true },
      isValid: { $set: isValid }
    }));
  }

  render() {
    let { className, imageUrl, isEmpty } = this.props;
    let { ready, isValid } = this.state;

    let maskPath = this.getMaskImage();

    return (
      <ImageLoader className={className}
                   imageUrl={imageUrl}
        //  isEmpty={isEmpty}
                   isSizeFixed={true}
                   backgroundColor="#f2f4f7"
                   handleUpdateValid={this.onUpdateValid}>

        {(ready && isValid && maskPath) && (
          <img className="thumbnail-product-mask" src={addCdn(maskPath)}/>
        )}
      </ImageLoader>
    )
  }
}
