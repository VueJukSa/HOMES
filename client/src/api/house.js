import { apiInstance } from "./index.js";

const api = apiInstance();
function upHouseHit(param, success, fail) {
  console.log(param);
  api.put(`/map/hit`, { params: param }).then(success).catch(fail);
}

export { upHouseHit };
