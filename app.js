import { fetchData } from "./utils/httpReq.js";

async function render() {
  const productData = await fetchData();
}

document.addEventListener("DOMContentLoaded", render);
