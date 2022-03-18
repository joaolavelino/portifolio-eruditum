//Base Url
const base_url = "https://api.openopus.org";

//Essential Composers
export const composers_essential_url = base_url + "/composer/list/pop.json";

//Composers By First Letter
export const composers_firstLetter_url = (letter) => {
  const url = base_url + `/composer/list/name/${letter}.json`;
  console.log(url);
  return url;
};

//Composers By Period
export const composers_period_url = (period) =>
  base_url + `/composer/list/epoch/${period}.json`;

//Composers By Id
export const composers_id_url = (id) =>
  base_url + `/composer/list/ids/${id}.json`;

//Works by composer ID
export const works_composer_url = (id) => {
  const url = base_url + `/work/list/composer/${id}/genre/all.json`;
  console.log(url);
  return url;
};

//Essential Works by composer ID
export const works_composer_essential_url = (id) =>
  base_url + `/work/list/composer/${id}/genre/Recommended.json`;

// Omnisearch
export const omnisearch_url = (search) =>
  base_url + `/omnisearch/${search}/0.json`;

// Random Work
export const works_random_url = base_url + `/dyn/work/random/`;
