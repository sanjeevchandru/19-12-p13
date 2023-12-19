document.write("13. to add items to a blank array and display them"+"<br>");
document.write("....................................."+"<br>");
function test13(arr){
    var e="<br>";
    for(let i=0;i<arr.length;i++){        
        e=e+"Element "+i+"="+arr[i]+"<br>";
    }
    return e;
}
document.write(test13([23,12,25])+"<br>");