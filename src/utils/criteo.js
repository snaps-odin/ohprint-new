import load from 'load-script';

const account = '83492';
const type = (typeof navigator !== "undefined") ? /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d" : "d";
const v_account = { event: "setAccount", account };
const v_type = { event: "setSiteType", type };
const v_email = { event: "setEmail", email: '' };

//신상품 런칭
const prdNameList = {
  "business-card" : "명함",
  "sticker" : "스티커",
  "apparel" : "어패럴",
  "banner" : "배너/현수막",
  "signs-posters" : "사인/포스터",
  "pr" : "홍보물",
  "md" : "md",
  "card" : "카드",
  "accessory" : "액세서리",
  "calendar-desk" : "캘린더",
  "envelope" : "봉투",
  "acrylic-keyring" : "아크릴키링",
  "pin-button" : "핀버튼",
  "magnet-button" : "자석버튼",
  "mirror-button" : "거울버튼",
  "smart-tok" : "스마트톡",
  "fan" : "부채",
  "flyer" : "전단",
  "brochure" : "브로슈어",
  "menu" : "메뉴판",
  "post-card" : "포스트카드",
  "coupon" : "쿠폰",
  "placard-banner" : "현수막",
  "standard-banner" : "스탠다드배너",
  "double-side-banner" : "양면배너",
  "rollup-banner" : "롤업배너",
  "mini-banner" : "미니배너",
  "poster" : "포스터",
  "board-sign" : "보드사인",
  "acrylic-sign" : "아크릴사인",
  "metal-sign" : "메탈사인",
  "wooden-frame-sign" : "원목사인",
  "table-top-sign" : "테이블사인",
  "a-frame-sign" : "A프레임사인",
  "car-magnet" : "카마그넷"
}

//overview
const overview = {
  "/store/business-card/overview" : [
    "storebusiness-cardintrobasic",
    "storebusiness-cardintroopm",
    "storebusiness-cardintrosquare",
    "storebusiness-cardintrooriginal",
    "storebusiness-cardintroluxe",
    "storebusiness-cardintroglossy",
    "storebusiness-cardintrogold",
    "storebusiness-cardintrosilver",
    "storebusiness-cardintrolinen",
    "storebusiness-cardintrofelt",
    "storebusiness-cardintropearl",
    "storebusiness-cardintrocraft",
    "storebusiness-cardintrotransparency",
    "storebusiness-cardintrosoft",
    "storebusiness-cardintropremium_soft",
    "storebusiness-cardintropremium_matt"
  ],
  "/store/sticker/overview" : [
    "storestickerintrodiy",
    "storestickerintrocircle",
    "storestickerintrosquare",
    "storestickerintrorectangle",
    "storestickerintrowide",
    "storestickerintrofree-size",
    "storestickerintrostandard",
    "storestickerintrocraft",
    "storestickerintrohologram",
    "storestickerintrotransparency",
    "storestickerintrosoft2",
    "storestickerintromatt",
    "storestickerintrorepp80",
    "storestickerintroroll"
  ],
  "/store/banner/overview" : [
    "storeplacard-bannerintrodefaults",
    "storestandard-bannerintrodefaults",
    "storedouble-side-bannerintrodefaults",
    "storerollup-bannerintrodefaults",
    "storemini-bannerintrodefaults"
  ],
  "/store/signs-posters/overview" : [
    "storeposterintrodefaults",
    "storeboard-signintrodefaults",
    "storeacrylic-signintrodefaults",
    "storemetal-signintrodefaults",
    "storewooden-frame-signintrodefaults",
    "storetable-top-signintrodefaults",
    "storea-frame-signintrodefaults",
    "storecar-magnetintrodefaults"
  ],
  "/store/pr/overview" : [
    "storeflyerintrodefaults",
    "storebrochureintrodefaults",
    "storemenuintrodefaults",
    "storepost-cardintrodefaults",
    "storecouponintrodefaults"
  ],
  "/store/card/overview" : [
    "storecardintroflat",
    "storecardintrofolder",
    "storecardintro70x98",
    "storecardintro4x6",
    "storecardintro5x7",
    "storecardintroluxe",
    "storecardintroglossy",
    "storecardintrogold",
    "storecardintrosilver",
    "storecardintrosoft",
    "storecardintropremium_soft",
    "storecardintropremium_matt"
  ],
  "/store/accessory/overview" : [
    "storeaccessoryintroleather-wallet",
    "storeaccessoryintroaluminium-case",
    "storeaccessoryintromagnetic-case",
    "storeaccessoryintroenvelope",
    "storeaccessoryintroacrylic-holder",
    "storeaccessoryintrostand",
    "storeaccessoryintroeasel"
  ],
  "/store/md/overview" : [
    "storeacrylic-keyringintrodefaults",
    "storepin-buttonintrodefaults",
    "storemagnet-buttonintrodefaults",
    "storemirror-buttonintrodefaults",
    "storesmart-tokintrodefaults",
    "storefanintrodefaults"
  ],
  "/store/apparel/overview" :[//반팔
    "storeapparelintrogildan-ha00",
    "storeapparelintrochampion-t425",
    "storeapparelintroprintstar-085-cvt"
  ],
  "/store/apparel/overview?productGroupCode=701" :[//반팔
    "storeapparelintrogildan-ha00",
    "storeapparelintrochampion-t425",
    "storeapparelintroprintstar-085-cvt",
    "storeapparelintrogildan-2000",
    "storeapparelintroaaa-1301",
    "storeapparelintroohprintme-opm-p22001",
    "storeapparelintrogildan-4bi00",
    "storeapparelintroamerican-apparel-2001w",
    "storeapparelintroglimmer-331-abp",
    "storeapparelintrogildan-6800",
    "storeapparelintrogildan-76000",
    "storeapparelintroglimmer-315-ayb",
    "storeapparelintrogildan-76000p",
    "storeapparelintrogildan-42000",
    "storeapparelintroprintstar-195-byp",
    "storeapparelintrogildan-2300",
    "storeapparelintrogildan-73800",
    "storeapparelintrogildan-76500",
    "storeapparelintroamerican-apparel-2102w",
    "storeapparelintrogildan-76600",
    "storeapparelintroanvil-6750",
    "storeapparelintrogildan-63v00",
    "storeapparelintrogildan-63v00l",
    "storeapparelintrogildan-73800l",
    "storeapparelintroprintstar-085-cvt-kids",

    "storeapparelintroprintstar-083-bbt",
    "storeapparelintroglimmer-300-act",
    "storeapparelintroglimmer-300-act-kids",
    "storeapparelintromoccasom-mcd1-ts2061",
    "storeapparelintrocomfort-colors-1717",
    "storeapparelintroohprintme-opm-p32103",
  ],
  "/store/apparel/overview?productGroupCode=705" : [//긴팔
    "storeapparelintroprintstar-00102-cvl",
    "storeapparelintroprintstar-00102-cvl-kids",

    "storeapparelintromoccasom-mcd3-ts105",
    "storeapparelintromoccasom-mce4-ts101",
    "storeapparelintromoccasom-mce1-ts109",
    "storeapparelintromoccasom-mce4-ts103",
    "storeapparelintromoccasom-mcd3-ts106",
  ],
  "/store/apparel/overview?productGroupCode=702" : [//맨투맨후드집업
    "storeapparelintroohprintme-opm-100219",
    "storeapparelintroohprintme-opm-100216",
    "storeapparelintroohprintme-opm-100217",
    "storeapparelintroohprintme-opm-100346",
    "storeapparelintroohprintme-opm-100347",
    "storeapparelintroohprintme-opm-100348",
    "storeapparelintroohprintme-opm-100342",
    "storeapparelintroohprintme-opm-100219-kids",
    "storeapparelintroohprintme-opm-100216-kids",
    "storeapparelintroohprintme-opm-100217-kids",
    "storeapparelintroohprintme-opm-100342-kids",

    "storeapparelintroohprintme-opm-p32101",
    "storeapparelintroohprintme-opm-p32102",
  ],
  "/store/apparel/overview?productGroupCode=703" : [
    "storeapparelintroohprintme-opm-100218",
    "storeapparelintroohprintme-opm-100218-kids"
  ],
  "/store/apparel/overview?productGroupCode=704" : [//에코백숄더백
    "storeapparelintroohprintme-opm-100777l",
    "storeapparelintroohprintme-opm-100777m",
    "storeapparelintroohprintme-opm-100777s",
    "storeapparelintroohprintme-opm-p22014m",
    "storeapparelintroohprintme-opm-p22015l",
    "storeapparelintroohprintme-opm-p22016",

    "storeapparelintroohprintme-opm-p32111",
    "storeapparelintroohprintme-opm-p32112",
    "storeapparelintroohprintme-opm-p32113",
    "storeapparelintroohprintme-opm-p32114"
  ],
  "/store/apparel/overview?productGroupCode=706" : [
    "storeapparelintroohprintme-opm-p22011m",
    "storeapparelintroohprintme-opm-p22012m",
    "storeapparelintroohprintme-opm-p22013l"
  ],
  "/store/apparel/overview?productGroupCode=707" : [//원피스
    "storeapparelintroohprintme-opm-p32104"
  ],
  "/store/apparel/overview?genderCommonCode=537003" : [
    "storeapparelintrochampion-t425",
    "storeapparelintroprintstar-085-cvt",
    "storeapparelintrogildan-2000",
    "storeapparelintroohprintme-opm-p22001",
    "storeapparelintrogildan-4bi00",
    "storeapparelintrogildan-6800",
    "storeapparelintrogildan-76000",
    "storeapparelintrogildan-76000p",
    "storeapparelintroamerican-apparel-2102w",
    "storeapparelintrogildan-63v00l" ,
    "storeapparelintrogildan-73800l",
    "storeapparelintroohprintme-opm-100777l",
    "storeapparelintroohprintme-opm-100777m",
    "storeapparelintroohprintme-opm-100777s",
    "storeapparelintroohprintme-opm-p22014m",
    "storeapparelintroohprintme-opm-p22015l",
    "storeapparelintroohprintme-opm-p22016",
    "storeapparelintroohprintme-opm-p22011m",
    "storeapparelintroohprintme-opm-p22012m",
    "storeapparelintroohprintme-opm-p22013l",
    "storeapparelintroohprintme-opm-100219",
    "storeapparelintroohprintme-opm-100216",
    "storeapparelintroohprintme-opm-100217",
    "storeapparelintroohprintme-opm-100346" ,
    "storeapparelintroohprintme-opm-100347" ,
    "storeapparelintroohprintme-opm-100348" ,
    "storeapparelintroohprintme-opm-100342" ,
    "storeapparelintroprintstar-00102-cvl" ,
    "storeapparelintroohprintme-opm-100218"
  ],
  "/store/apparel/overview?genderCommonCode=537002" : [
    "storeapparelintrochampion-t425",
    "storeapparelintroprintstar-085-cvt",
    "storeapparelintrogildan-2000",
    "storeapparelintroohprintme-opm-p22001",
    "storeapparelintrogildan-4bi00",
    "storeapparelintrogildan-6800",
    "storeapparelintrogildan-76000",
    "storeapparelintrogildan-76000p",
    "storeapparelintrogildan-73800",
    "storeapparelintrogildan-63v00",
    "storeapparelintroohprintme-opm-100777l",
    "storeapparelintroohprintme-opm-100777m",
    "storeapparelintroohprintme-opm-100777s",
    "storeapparelintroohprintme-opm-p22014m",
    "storeapparelintroohprintme-opm-p22015l",
    "storeapparelintroohprintme-opm-p22016",
    "storeapparelintroohprintme-opm-p22011m",
    "storeapparelintroohprintme-opm-p22012m",
    "storeapparelintroohprintme-opm-p22013l",
    "storeapparelintroohprintme-opm-100219",
    "storeapparelintroohprintme-opm-100216",
    "storeapparelintroohprintme-opm-100217",
    "storeapparelintroohprintme-opm-100346",
    "storeapparelintroohprintme-opm-100347",
    "storeapparelintroohprintme-opm-100348",
    "storeapparelintroohprintme-opm-100342",
    "storeapparelintroprintstar-00102-cvl",
    "storeapparelintroohprintme-opm-100218"
  ],
  "/store/apparel/overview?genderCommonCode=537004" : [
    "storeapparelintroprintstar-085-cvt-kids",
    "storeapparelintroohprintme-opm-100777l",
    "storeapparelintroohprintme-opm-100777m",
    "storeapparelintroohprintme-opm-100777s",
    "storeapparelintroohprintme-opm-p22014m",
    "storeapparelintroohprintme-opm-p22015l",
    "storeapparelintroohprintme-opm-p22016",
    "storeapparelintroohprintme-opm-p22011m",
    "storeapparelintroohprintme-opm-p22012m",
    "storeapparelintroohprintme-opm-p22013l",
    "storeapparelintroohprintme-opm-100219-kids",
    "storeapparelintroohprintme-opm-100216-kids",
    "storeapparelintroohprintme-opm-100217-kids",
    "storeapparelintroohprintme-opm-100342-kids",
    "storeapparelintroprintstar-00102-cvl-kids",
    "storeapparelintroohprintme-opm-100218-kids"
  ]

}

const asyncScript = () => {
	return new Promise((resolve, reject) => {
		load(`//dynamic.criteo.com/js/ld/ld.js?a=${account}`, { charset: 'utf-8', async : true }, (error, script) => {
			!error ?
				resolve(script)
				:
				reject(error)
		});
	});
};

export const home = () => {
	asyncScript().then(()=>{
		window.criteo_q = window.criteo_q || [];
		window.criteo_q.push(
			v_account,
			v_email,
			//{ event: "setZipcode", zipcode: "" },
			v_type,
			{ event: "viewHome" }
		);
	})
}

export const history = (pathname, params) => {
	(params && params.category) && asyncScript().then(()=>{
		window.criteo_q = window.criteo_q || [];
		let item = [];
		if(!params.subCategory){
		  let category = params.category;

		  let overviewUrl = (category === "apparel") ? `/store/${category}/overview${params.search}` : `/store/${category}/overview`;
            item = overview[`${overviewUrl}`] || [];

              let realItem = item;

              if(item.length >= 3){
                    realItem = [];
                    for(let i=0; i<3; i++){
                      realItem.push(item[i]);
                    }
              }

			window.criteo_q.push(
				v_account,
				v_email,
				//{ event: "setZipcode", zipcode: "##zipcode##" },
				v_type,
				{ event: "viewList",
          item : realItem
				}
			);

		}else{
		  item.push(params.pathname.replace(/\//g,""));
			window.criteo_q.push(
				v_account,
				v_email,
				//{ event: "setZipcode", zipcode: "##zipcode##" },
				v_type,
				{ event: "viewItem",
          item
				}
			);
		}



	})
}



export const cart = (items) => {
	asyncScript().then( async ()=>{
		let item =  [];
		//{id: "##Product Id##", price: ##Price##, quantity: ##Quantity## }
		if(items && items.length > 0){
			//productGroupName
			(items || []).map((items)=>{
				item.push({id: items.productGroupName, price: items.sellPrice, quantity: items.quantity });
			});
		}

		window.criteo_q = window.criteo_q || [];
		window.criteo_q.push(
			v_account,
			v_email,
			//{ event: "setZipcode", zipcode: "##zipcode##" },
			v_type,
			{ event: "viewBasket", item }
		);
	})
}

export const criteoPurchase = (items, orderCode) => {
	asyncScript().then( async ()=>{
		let item =  [];
		//{id: "##Product Id##", price: ##Price##, quantity: ##Quantity## }
		if(items && items.length > 0){
			//productGroupName
			(items || []).map((items)=>{
				item.push({id: items.productGroupName, price: items.amount, quantity: 1 });
			});
		}

		window.criteo_q = window.criteo_q || [];
		window.criteo_q.push(
			v_account,
			v_email,
			//{ event: "setZipcode", zipcode: "##zipcode##" },
			v_type,
			{
			  event: "trackTransaction",
        id:orderCode,
        item
      }
		);
	})
}
