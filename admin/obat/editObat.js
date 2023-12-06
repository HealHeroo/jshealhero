export const isiData = (results) => {
    const inputMapping = [
      { id: "nama_obat", path: "obat.nama_obat" },
      { id: "jenis_obat", path: "obat.jenis_obat" },
      { id: "keterangan", path: "obat.keterangan" },
      { id: "harga", path: "obat.harga" },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
  };
  
  const getNestedValue = (obj, path, index, property) => {
    const value = path
      .split(".")
      .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  
    if (
      Array.isArray(value) &&
      value.length > index &&
      value[index].hasOwnProperty(property)
    ) {
      return value[index][property];
    }
  
    return value;
  };
  