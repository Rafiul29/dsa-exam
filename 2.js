
function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid;
        }else if(target>arr[mid]){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return -1
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],5))

//time complexity O(logn)
//space complexity O(1)