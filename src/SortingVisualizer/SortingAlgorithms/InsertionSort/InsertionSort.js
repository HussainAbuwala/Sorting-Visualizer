import getInsertionSortAnimation from "./getInsertionSortAnimation";
import { resetBars, disableButtons, enableButtons } from "../../helpers";

const DEFAULT_COLOR = '#97FEED';
const COMPARISON_COLOR = '#F86F03';
const FINAL_COLOR = '#7CFC00'

export default function InsertionSort(numbersArray, animationSpeed){
    disableButtons()
    const animations = getInsertionSortAnimation(numbersArray);

    for (let i = 0; i < animations.length; i += 4) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const comparingElement1 = animations[i],
            comparingElement2 = animations[i + 1],
            doSwap = animations[i + 2],
            sortedTill = animations[i + 3];

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        // Changing the color-bar of comparing elements.

        arrayBars[comparingElement1[0]].style.backgroundColor = COMPARISON_COLOR;
        arrayBars[comparingElement2[0]].style.backgroundColor = COMPARISON_COLOR;

        //changeBackgroundColor(comparingElement1, "rgba(255,165,0, 0.9)");
        //changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)");

        if (doSwap === true) {
          // Changing the color-bar of elements which has to be swapped.
          //changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
          //changeBackgroundColor(comparingElement2, "rgba(144,238,144, 0.9)");
          // Actually swapping the elements (heights).
            arrayBars[comparingElement1[0]].style.height = `${comparingElement1[1]}px`;
            arrayBars[comparingElement2[0]].style.height = `${comparingElement2[1]}px`;
          //swapBars(comparingElement1, comparingElement2);
        }
      }, i * animationSpeed);

      // Resolving the promise after the setTimeout ends.
      resolve();
    });

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise2 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        // Changing the color-bars of the elements till sortedTill index.
        for (let j = 0; j <= sortedTill; j++) {
            
          arrayBars[j].style.backgroundColor = FINAL_COLOR;
          //changeBackgroundColor(j, "rgba(0, 164, 86, 0.6)");
          //changeBoxShadow(j, "5px 5px 50px 5px rgba(0, 164, 86, 0.2)");
        }

        // From "getInsertionSortAnimations" function, we know that the array is sorted when both the comparing elements are (array.length - 1).
        // Resolving the promise when the both the comparing elemnts are (array.length - 1).
        if (
          comparingElement1[0] === numbersArray.length - 1 &&
          comparingElement2[0] === numbersArray.length - 1
        )
          resolve();
      }, (i + 4) * animationSpeed);
    });

    Promise.all([promise1, promise2]).then(() => {
        setTimeout(() => {
            resetBars()
            enableButtons()
        }, 1500)
    })

    
  }
}