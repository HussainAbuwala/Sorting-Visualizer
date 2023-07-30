import getBubbleSortAnimation from "./getBubbleSortAnimation";
import { resetBars, disableButtons, enableButtons } from "../../helpers";

const DEFAULT_COLOR = '#97FEED';
const COMPARISON_COLOR = '#F86F03';
const FINAL_COLOR = '#7CFC00'

export default function BubbleSort(numbersArray, animationSpeed){

    disableButtons()

    console.log(`BubbleSort called ${numbersArray} ${animationSpeed}`)
    const animations = getBubbleSortAnimation(numbersArray);
    console.log(`Sorted array ${numbersArray} ${animationSpeed}`)

    console.log(`Animations ${animations}`)

    const promises = []

    for (let i = 0; i < animations.length; i++) {

        const arrayBars = document.getElementsByClassName('array-bar');
        const[,,,,isSwap,isFinal] = animations[i]

        //const isColorChange = i % 3 !== 2;
        
        if (isFinal){
            const [barOneIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const promise = new Promise(function (resolve, reject) {
                setTimeout(() => {
                    barOneStyle.backgroundColor = FINAL_COLOR;
                    resolve();
                }, i * animationSpeed);
            })
            promises.push(promise)
        }
        else if(!isSwap){
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = animations[i][2] ? COMPARISON_COLOR : DEFAULT_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * animationSpeed);
        }
        else{
            setTimeout(() => {
                const [barOne, barTwo] = animations[i];
                
                const barOneStyle = arrayBars[barOne[0]].style;
                barOneStyle.height = `${barOne[1]}px`;

                const barTwoStyle = arrayBars[barTwo[0]].style;
                barTwoStyle.height = `${barTwo[1]}px`;

            }, i * animationSpeed);
        }
    }

    Promise.all(promises).then(() => {
        setTimeout(() => {
            resetBars()
            enableButtons()
        }, 1500)
    })

}