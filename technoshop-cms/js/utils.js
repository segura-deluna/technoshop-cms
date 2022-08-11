export const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // подробный синтаксис:
    reader.addEventListener('loadend', () => {
      resolve(reader.result);
    });
    reader.addEventListener('error', (err) => {
      reject(err);
    });
    reader.readAsDataURL(file);

    // более короткий синтаксис:
    // reader.readAsDataURL(file);
    // reader.onload = () => resolve(reader.result);
    // reader.onerror = (error) => reject(error);
  });
};
