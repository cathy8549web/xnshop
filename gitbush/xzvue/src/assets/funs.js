//node中: 
//var axios=require("axios");
import axios from "axios"

export default {
  getIndex(callback){
    axios
    .get("/index")
    .then(callback)
  },
  getDetails(lid,callback){
    axios
    .get(
      "/details",
      {
        params:{lid}
      }
    ).then(callback);
  }
}