import User from '../data/user';
import JSFile from '../data/data';

const errs = [];
const USE_API = true;

const renderDataAPI = async (id) => {
  let apiErr;
  const apiData = [];
  const links = [
    `http://localhost:3000/user/${id}`,
    `http://localhost:3000/user/${id}/activity`,
    `http://localhost:3000/user/${id}/average-sessions`,
    `http://localhost:3000/user/${id}/performance`
  ];
  let cpt = 0;
  let apiUserFound = false;
  try {
    do {
      // Cette ligne envoie une requête HTTP GET vers l'URL et attend la réponse
      const responseAPI = await fetch(links[cpt]);
      // Si la réponse n'est pas OK, enregistre un msg d'erreur avec responseAPI.status qui fournit le code de statut HTTP de la réponse.
      if (!responseAPI.ok) {
        console.log("test")
        throw new Error(`Erreur lors de la récupération des données de l'API : ${responseAPI.status}`);
      }
      else {
        // Si la réponse est OK, cette ligne convertit la réponse HTTP en format JSON
        const responseData = await responseAPI.json();
        apiData.push(responseData.data);
        apiUserFound = true;
        cpt++;
      }
    } while (cpt < links.length || !apiUserFound);
  }
  catch (error) {
    apiErr = 'Erreur lors de la récupération des données de l\'API';
    errs.push(apiErr);
  }
  return { apiData, apiErr, apiUserFound };
}

const renderDataJS = async (id) => {
  const jsonData = [];
  let jsonErr;
  let jsonUserFound = false;
  try {
    if (JSFile.USER_MAIN_DATA.find(userData => userData.id === id)) {
      jsonUserFound = true;
      jsonData.push(JSFile.USER_MAIN_DATA.find(userData => userData.id === id))
      jsonData.push(JSFile.USER_ACTIVITY.find(userData => userData.userId === id))
      jsonData.push(JSFile.USER_AVERAGE_SESSIONS.find(userData => userData.userId === id))
      jsonData.push(JSFile.USER_PERFORMANCE.find(userData => userData.userId === id))
    }
    else{
      throw new Error('Erreur lors de la récupération des données du fichier JS')
    }
  }
  catch (error) {
    jsonErr = error;
    errs.push(jsonErr);
  }
  return { jsonData, jsonErr, jsonUserFound };
};

const construireUser = (data) => {
  let user = null;
  try {
    const score = data[0].score ? data[0].score : data[0].todayScore;
    user = new User(
      data[0].id,
      data[0].userInfos,
      score,
      data[0].keyData,
      data[1].sessions,
      data[2].sessions,
      data[3].kind,
      data[3].data
    )
  } catch (error) {
    errs.push('Erreur lors de la création de l\'objet user : ', error);
  }
  return user;
}

const fetchData = async (id) => {
  let user = null;
  try {
    if (USE_API) {
      const { apiData, apiErr, apiUserFound } = await renderDataAPI(id);
      if (!apiErr && apiUserFound) {
        user = construireUser(apiData);
      }
    }
    if (user == null) {
      const { jsonData, jsonErr, jsonUserFound } = await renderDataJS(id);
      if (!jsonErr && jsonUserFound) {
        user = construireUser(jsonData);
      }
      else if (!jsonUserFound) {
        user = 'introuvable';
      }
    }
  }
  catch (error) {
    console.error('Erreur lors de la récupération des données', error);
  }
  if (errs.length > 0) console.error(errs.join('\n'));
  return user;
};

export default fetchData;