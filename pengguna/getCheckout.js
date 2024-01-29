import { addInner, hide } from "https://jscroot.github.io/element/croot.js";

export const URLGetObat =
  "https://asia-southeast2-peak-equator-402307.cloudfunctions.net/obat_healhero";

export const checkout = `
<tr>
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
      >#HARGA#</span
    >
  </div>
</td>
</tr>
`;

export function isiRow(value) {
  const content = tableCheckout
    .replace("#NAMAOBAT#", value.nama_obat)
    .replace("#HARGA#", value.harga)
  addInner("tableCheckout", content);
}

