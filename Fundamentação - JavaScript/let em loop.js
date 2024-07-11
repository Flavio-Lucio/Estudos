// etapa 1
{
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  console.log("i =", i);
}

// etapa 2
{
  let funcs = [];

  for (let i = 0; i < 10; i++) {
    funcs.push(function () {
      console.log(i);
    });
  }

  funcs[2]();
  funcs[6]();
  funcs[8]();
}
