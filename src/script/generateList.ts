type Planet = {
  name: string;
  image: string;
  id?: string;
};

function generateUniqueID() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 5;
  let id = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    id += characters[randomIndex];
  }

  return id;
}

export default function generateList(list: Planet[]): Planet[] {
  const level = localStorage.getItem("difficult");

  let copyList: Planet[] = [];

  if (level == "easy") {
    copyList.push(...list.slice(0, 6));
  }

  if (level == "hard") {
    copyList.push(...list.slice());
  }

  copyList.push(...copyList);

  copyList = copyList.map((x) => {
    return { name: x.name, image: x.image, id: generateUniqueID() };
  });

  for (let i = copyList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyList[i], copyList[j]] = [copyList[j], copyList[i]];
  }

  return copyList;
}
