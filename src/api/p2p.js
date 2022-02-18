// import axios from "@/api/axios";
//
// const receiver_card_info = num => {
//   return axios({
//     method: "get",
//     url: process.env.VUE_APP_SESSION_URL + "/rest/p2p/receiver_card_info/" + num,
//     auth: { username: process.env.VUE_APP_USERNAME, password: process.env.VUE_APP_PASSWORD }
//   });
// };

// const card_info = data => {
//   return axios({
//     method: "post",
//     url: process.env.VUE_APP_SESSION_URL + "/rest/p2p/card_info",
//     auth: { username: process.env.VUE_APP_USERNAME, password: process.env.VUE_APP_PASSWORD },
//     data
//   });
// };
// const wu_execute = data => {
//   return axios({
//     method: "post",
//     url: process.env.VUE_APP_SESSION_URL + "/rest/p2p/wu_execute",
//     auth: { username: process.env.VUE_APP_USERNAME, password: process.env.VUE_APP_PASSWORD },
//     data
//   });
// };
//
// const wu_confirm = data => {
//   return axios({
//     method: 'post',
//     url: process.env.VUE_APP_SESSION_URL + '/rest/p2p/wu_confirm',
//     auth: { username: process.env.VUE_APP_USERNAME, password: process.env.VUE_APP_PASSWORD },
//     data
//   })
// }
// export default {
//   receiver_card_info,
//   card_info,
//   wu_execute,
//   wu_confirm
// };