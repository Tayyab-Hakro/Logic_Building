var merge = function(nums1, m, nums2, n) {

    let result = []
        for(let i = 0 ;i<m ;i++){
            result.push(nums1[i])
        }
          for(let j = 0 ;j<n ;j++){
             result.push(nums2[j])
            console.log(result)
            }
        return result.sort((a,b) => a-b)
    };
    

    console.log(merge([1,2,3,0,0,0],  3,[2,5,6],  3))