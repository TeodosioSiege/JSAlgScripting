function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  for(let i = 0; i < arr.length; i++){
    if (!Boolean(arr[i])) {
    arr.splice(i,1);
    i--;
  }
}
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
