import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetBeli =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero?id=" +
  beliId;

export const tableBeli = `
<tr>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NAMAOBAT#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
  <div class="flex items-center">
    <span
      class="text-sm font-semibold text-gray-800 dark:text-gray-200"
      >#NAMALENGKAP#</span
    >
  </div>
</td>
<td class="px-6 py-3 whitespace-nowrap">
<div class="flex items-center">
  <span
    class="text-sm font-semibold text-gray-800 dark:text-gray-200"
    >#NOMORHP#</span
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
<td class="h-px w-px whitespace-nowrap">
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
      >#TOTAL#</span
    >
  </div>
</td>
`;


export function responseData(results) {
    console.log(results);
     results.forEach(isiRow);
    hide("skeletonLoader");
}


export function isiRow(value) {
  const content = tableBeli
    .replace("#NAMAOBAT#", value.namaobat)
    .replace("#NAMALENGKAP#", value.namalengkap)
    .replace("#NOMORHP#", value.nomorhp)
    .replace("#ALAMAT#", value.alamat)
    .replace("#TOTAL#", value.total)
  addInner("tableDaftarBeli", content);
}
