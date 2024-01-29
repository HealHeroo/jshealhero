import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetPesanan =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/pesanan";

export const tablePesanan = `
<tr>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NAMA#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#ALAMAT#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NOMORHP#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NAMAOBAT#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#QUANTITY#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#HARGA#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#TOTALHARGA#</span
    >
  </div>
</td>
<td class="h-px w-px whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#STATUS#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
  
    <button class="btn btn-outline-danger btn-sm" onclick="deletePesanan('#IDHAPUS#')">Delete</button>
  </td>
</td>
</tr>
`;


export function responseData(results) {
    console.log(results);
     results.forEach(isiRow);
    hide("skeletonLoader");
}


export function isiRow(value) {
  const content = tablePesanan
    .replace("#NAMA#", value.nama)
    .replace("#ALAMAT#", value.alamat)
    .replace("#NOMORHP#", value.nomorhp)
    .replace("#NAMAOBAT#", value.namaobat)
    .replace("#QUANTITY#", value.quantity)
    .replace("#HARGA#", value.harga)
    .replace("#TOTALHARGA#", value.totalharga)
    .replace("#STATUS#", value.status)
    .replace("#IDHAPUS#", value._id);
   
  addInner("tableDaftarPesanan", content);
}

