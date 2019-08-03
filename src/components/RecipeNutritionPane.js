import React from 'react';

const RecipeNutritionPane = (props) => {
  const { nutritionData } = props;

  return (
    <div id="Nutrition" className="tabcontent table-container">
      <table>
        <tbody>
        <tr>
          { typeof nutritionData !== "undefined"
              ?
              Object.keys(nutritionData).map((key,idx) => {
                return <th key={idx}>{key}</th>
              })
              :
              null
          }
        </tr>
        <tr>
          { typeof nutritionData !== "undefined"
              ?
              Object.keys(nutritionData).map((key,idx) => {
                return <td key={idx}>{nutritionData[key]}</td>
              })
              :
              null
          }
        </tr>
      </tbody>
      </table>
    </div>
  );
}

export default RecipeNutritionPane;
