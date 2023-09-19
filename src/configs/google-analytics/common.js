export const PRODUCT_TYPE = {
  "business-card" : "business-card",
  "sticker" : "sticker",
  "apparel" : "apparel",
  "banner" : "banner",
  "signs-posters" : "signs-posters",
  "pr" : "pr",
  "packing" : "packing",
  "md" : "md",

  "calendar-desk" : "calendar-desk",

  "color-decal" : "sticker",
  "graphic-decal" : "graphic-decal",

  "placard-banner" : "banner",
  "standard-banner" : "banner",
  "double-side-banner" : "banner",
  "rollup-banner" : "banner",
  "mini-banner" : "banner",

  "poster" : "signs-posters",
  "board-sign" : "signs-posters",
  "acrylic-sign" : "signs-posters",
  "metal-sign" : "signs-posters",
  "wooden-frame-sign" : "signs-posters",
  "window-decal" : "signs-posters",
  "table-top-sign" : "signs-posters",
  "a-frame-sign" : "signs-posters",
  "car-magnet" : "signs-posters",

  "flyer" : "pr",
  "brochure" : "pr",
  "menu" : "pr",
  "post-card" : "pr",
  "coupon" : "pr",

  "shoppingbag" : "packaging",
  "envelope" : "packaging",

  "pvc-diary" : "md",
  "soft-diary" : "md",
  "hard-diary" : "md",
  "basic-pen" : "md",
  "standard-pen" : "md",
  "light-pen" : "md",
  "eco-pen" : "md",
  "acrylic-keyring" : "md",
  "pin-button" : "md",
  "mirror-button" : "md",
  "magnet-button" : "md",
  "smart-tok" : "md",
  "reusable-cup" : "md",
  "eco-tumbler" : "md",
  "note-pad" : "md",
  "memo-pad" : "md",

  "card" : "card",
  "accessory" : "accessory",
}

export const convertCategory = (groupCode) => {
  const firstCode = groupCode.substring(0,1);
  let code = groupCode.substring(0,3);

  switch (firstCode){
    case "1":
      if(code === "102"){
        return "card";
      }

      if(code === "105"){
        return "signs-posters";
      }

      if(code === "104" || code === "106" || code === "108" || code === "109"){
        return "sticker";
      }

      if(code === "109" || code === "108"){
        return "sticker";
      }

      return "business-card";
    case "2": return "pr";
    case "3":
      if(code === "301" || code === "311" || code === "312" || code === "313" || code === "314"){
        return "banner";
      }
      return  "signs-posters";
    case "4": return "calendar-desk";
    case "5": return "md";
    case "6": return "packaging";
    case "7": return "apparel"
    case "9": return "accessory";

  }


}