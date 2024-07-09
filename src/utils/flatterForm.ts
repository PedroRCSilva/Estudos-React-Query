export const flatterForm = (data: HTMLFormElement) => {
  const formData = new FormData(data);
  const dataFlattern: Record<string, FormDataEntryValue> = {};
  formData.forEach((value, key) => {
    dataFlattern[key] = value;
  });
  return dataFlattern;
};
