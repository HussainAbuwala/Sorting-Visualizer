import getSelectionSortAnimation from "./getSelectionSortAnimation";
import { resetBars, disableButtons, enableButtons } from "../../helpers";

const DEFAULT_COLOR = '#97FEED';
const COMPARISON_COLOR = '#F86F03';
const FINAL_COLOR = '#7CFC00'
const HOLE_COLOR = '#000000'
const CURRENT_MIN = '#3F00FF'
const TRACKER = '#DC143C'

export default function SelectionSort(numbersArray, animationSpeed){
    console.log(`SelectionSort called ${numbersArray} ${animationSpeed}`)
    disableButtons()
    const animations = getSelectionSortAnimation(numbersArray);

    for (let i = 0; i < animations.length; i += 6) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const comparingElement1 = animations[i],
          comparingElement2 = animations[i + 1],
          minIndexElement = animations[i + 2],
          doSwap = animations[i + 3],
          isFinalElement = animations[i + 4],
          finalElement = animations[i + 5];
    
        // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
        const promise1 = new Promise(function (resolve, reject) {
          setTimeout(() => {
            // Changing the color-bar of current elements.


            arrayBars[minIndexElement[0]].style.backgroundColor = CURRENT_MIN;
            arrayBars[comparingElement1[0]].style.backgroundColor = HOLE_COLOR;
            arrayBars[comparingElement2].style.backgroundColor = TRACKER;

            //changeBackgroundColor(minIndexElement, "rgba(0,0,255, 0.9)");
            //changeBackgroundColor(comparingElement1, "rgba(0,0,0, 0.9)");
            //changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)");
    
            if (doSwap === true) {
              // Changing the color-bar of elements which has to be swapped.
              //console.log(minIndexElement, comparingElement1)
              arrayBars[minIndexElement[0]].style.backgroundColor = COMPARISON_COLOR;
              arrayBars[comparingElement1[0]].style.backgroundColor = COMPARISON_COLOR;
              //changeBackgroundColor(minIndexElement, "rgba(144,238,144, 0.9)");
              //changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
              // Actually swapping the elements (heights).

              arrayBars[minIndexElement[0]].style.height = `${minIndexElement[1]}px`;
              arrayBars[comparingElement1[0]].style.height = `${comparingElement1[1]}px`;

              //swapBars(comparingElement1, minIndexElement);
            }
          }, i * animationSpeed);
    
          // Resolving the promise after the setTimeout ends.
          resolve();
        });
    
        // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
        const promise2 = new Promise(function (resolve, reject) {
          setTimeout(() => {
            if (isFinalElement === true) {
              // Changing the color-bar of finalElement index which has taken its final sorted position.
              
              arrayBars[finalElement].style.backgroundColor = FINAL_COLOR;
              //changeBackgroundColor(finalElement, "rgba(0, 164, 86, 0.6)");
              
            } else {
              // Changing the color-bar of elements which has not taken its final sorted position yet.
              arrayBars[comparingElement2].style.backgroundColor = DEFAULT_COLOR;
              arrayBars[minIndexElement[0]].style.backgroundColor = DEFAULT_COLOR;
              //changeBackgroundColor(comparingElement2, "rgba(225, 0, 120, 0.6)");
              //changeBackgroundColor(minIndexElement, "rgba(225, 0, 120, 0.6)");
            }
    
            // From "getSelectionSortAnimations" function, we know that the array is sorted when finalElement is (array.length - 1).
            // Resolving the promise when the finalElement index is (array.length - 1).
            if (finalElement === numbersArray.length - 1) resolve();
          }, (i + 6) * animationSpeed);
        });
    
        Promise.all([promise1, promise2]).then(() => {
            setTimeout(() => {
                resetBars()
                enableButtons()
            }, 1500)
        })
    }
    
    
}