
export default function getBubbleSortAnimation(arr){
    const animations = [];

    let i, j,k, temp;
    let swapped;
    for (i = 0; i < arr.length - 1; i++)
    {
        swapped = false;
        for (j = 0; j < arr.length - i - 1; j++)
        {
            animations.push([j, j + 1, true, false, false, false])
            animations.push([j, j + 1, false, true, false, false])
            if (arr[j] > arr[j + 1])
            {
                // swap arr[j] and arr[j+1]
                animations.push([[j, arr[j + 1]], [j + 1, arr[j]], false, false, true, false])

                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
            else{
                animations.push([[j, arr[j]], [j + 1, arr[j + 1]], false, false, true, false])

            }
        }

        animations.push([arr.length - 1 - i, arr.length - 1 - i, false, false, false, true]);

        // IF no two elements were
        // swapped by inner loop, then break
        if (swapped === false){
            for (k = 0; k <= arr.length - i - 1; k++){
                animations.push([k, k, false, false, false, true]);
            }
            break;
        }
        
    }

    return animations
}