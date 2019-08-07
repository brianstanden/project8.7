try {
    adddlert("Gideon says hi!");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.message;
  }