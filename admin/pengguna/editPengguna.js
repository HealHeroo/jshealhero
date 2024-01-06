export const isiData = (results) => {
    const inputMapping = [
      { id: "namalengkap", path: "pengguna.namalengkap" },
      { id: "tanggallahir", path: "pengguna.tanggallahir" },
      { id: "jeniskelamin", path: "pengguna.jeniskelamin" },
      { id: "nomorhp", path: "pengguna.nomorhp" },
      { id: "alamat", path: "pengguna.alamat" },
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
  