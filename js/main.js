var arr=[15,14,8,6,12,17,6,18,13,3];
document.write("The given number:"+arr);
document.write("<br>")
document.write("The even number is:<br>")
for(let i=0;i<arr.length;i++){
	
	if(arr[i]%2==0)
	{
		document.write(arr[i]);
		document.write("<br>");
	}
}