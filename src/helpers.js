import { capitalize } from 'lodash';

export const openTab = (e) => {
  e.preventDefault();

  const tabSection = e.target.textContent;
  let i, tabContent, tabLinks, tabTarget;

  tabContent = e.target.parentElement.parentElement.querySelectorAll(".tabcontent");

  tabContent.forEach(content => {
    content.style.display = "none";
    content.id === tabSection ? tabTarget = content : null;
  });

  tabLinks = e.target.parentElement.children;

  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  tabTarget.style.display = "block";
  e.currentTarget.className += " active";
}

export const filterNutrition = (data) => {
  if (data === null) return;

  const nutritionList = ["calories", "carbos", "fats", "fibers", "proteins"];

  const filtered = Object.keys(data)
    .filter(key => nutritionList.includes(key))
    .reduce((obj, key) => {
      if (data[key] === "") {
        obj[capitalize(key)] = "N/A";
      } else {
        obj[capitalize(key)] = data[key];
      }

      return obj;
    }, {});

  return filtered;
}
