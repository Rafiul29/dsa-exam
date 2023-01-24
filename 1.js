function arrayCoherance(arr1,arr2) {

    let newArr=[]
    let lengthArray=[arr1.length,arr2.length]
  
   for(let i=0; i<Math.max(...lengthArray); i++){
     if(arr1[i] == arr2[i]){
       continue;
     }
     if(i<arr1.length){
      
    newArr.push(arr1[i])
     }
    if(i<arr2.length){
      
     newArr.push(arr2[i])
    }
   }
     //bubble sort 

   for(let i=0; i<newArr.length; i++){
    for(let j=0; j<newArr.length-i;j++){
        if(newArr[j]>newArr[j+1]){
            let temp=newArr[j];
            newArr[j]=newArr[j+1]
            newArr[j+1]=temp
        }
    }
   }
   return newArr
  }
  

  //space complexity O(n+m)

  console.log(arrayCoherance([1,2,3,4,5,6],
                            [7,8,3,4,9,10]))