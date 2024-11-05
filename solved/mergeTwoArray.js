var mergeTwoLists = function(list1, list2) {
    var final=list1.concat(list2).sort((a,b)=>a-b) 
    
     console.log(final); 
    };
    mergeTwoLists([1,2,4],[1,3,4])