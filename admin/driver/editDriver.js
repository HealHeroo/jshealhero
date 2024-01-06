export const isiData = (results) => {
    const inputMapping = [
      { id: "namalengkap", path: "driver.namalengkap" },
      { id: "jeniskelamin", path: "driver.jeniskelamin" },
      { id: "nomorhp", path: "driver.nomorhp" },
      { id: "alamat", path: "driver.alamat" },
      { id: "platmotor", path: "driver.platmotor" },
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
  