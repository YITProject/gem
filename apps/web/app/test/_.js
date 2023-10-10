const object = {
};

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    object[key] = key.slice(0, 1).toUpperCase() + key.slice(1);
  }
}

console.log(object);
