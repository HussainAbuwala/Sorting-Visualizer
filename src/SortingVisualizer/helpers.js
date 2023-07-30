const DEFAULT_COLOR = '#97FEED';

export function resetBars(){
    const arrayBars = Array.from(document.getElementsByClassName('array-bar'));
        arrayBars.forEach((bar) => {
            bar.style.backgroundColor = DEFAULT_COLOR;
    }) 
}

// ## Enables all the buttons ## //
export function enableButtons() {
    document.getElementById("reset").disabled = false;
    document.getElementById("bubbleSortButton").disabled = false;
    document.getElementById("selectionSortButton").disabled = false;
    document.getElementById("insertionSortButton").disabled = false;
    document.getElementById("range-slider").style.opacity = 1;
    document.getElementById("range-slider").style.visibility = "visible";
  }
  
  // ## Disables all the buttons ## //
  export function disableButtons() {
    document.getElementById("reset").disabled = true;
    document.getElementById("bubbleSortButton").disabled = true;
    document.getElementById("selectionSortButton").disabled = true;
    document.getElementById("insertionSortButton").disabled = true;
    document.getElementById("range-slider").style.opacity = 0;
    document.getElementById("range-slider").style.visibility = "hidden";
  }