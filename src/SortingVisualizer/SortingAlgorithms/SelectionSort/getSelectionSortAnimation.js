export default function getSelectionSortAnimation(array){
    const animations = []; // { currElement, comparingElement, minIndex, doSwap, isFinalElement, finalElement }

    let min_idx;
    for (let i = 0; i < array.length; i++) {
        min_idx = i;
        // Push animation for the current element which has to be sorted.
        animations.push([i,-1], i, [min_idx,-1], false, false, -1);

        for (let j = i + 1; j < array.length; j++) {
        // Push animation for (i)th, (j)th and (min_idx)th index elements.
        animations.push([i,-1], j, [min_idx,-1], false, false, -1);
        if (array[j] < array[min_idx]) {
            min_idx = j;
            // Push animation for changing min_idx element.
            animations.push([i,-1], j, [min_idx,-1], false, false, -1);
        }
        }
        if (min_idx !== i) {
        // Swapping 2 values.
        animations.push([i,array[min_idx]], i, [min_idx, array[i]], true, false, -1);
        [array[i], array[min_idx]] = [array[min_idx], array[i]];
        // Push animation for swapping (i)th index and (min_idx)th index elements.
        }
        // Here, the (i)th indexed element will be sorted. So we need to change its color.
        // Push animation for (i)th indexed element which got its sorted position.
        animations.push([i,-1], i, [i,-1], false, true, i);
    }

    return animations;
}