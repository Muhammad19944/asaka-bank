import axios from "@/api/axios";

export const get_press_center_category = () => {
  return axios({
    method: "get",
    url: "/1/category/"
  });
};

export const get_press_center_id = id => {
  return axios({
    method: "get",
    url: "/1/news/?page_size=500&?&category=" + id
  });
};

export const get_press_center_link = () => {
  return axios({
    method: "get",
    url: "/1/link/?page_size=500"
  });
};


export default {
  get_press_center_category,
  get_press_center_id,
  get_press_center_link
};