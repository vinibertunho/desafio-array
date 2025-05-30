let precos = [
    129.9,
    399.5,
    259.0,
    89.9,
    599.99,
    39.5,
    999.0
  ];
  
  let precosFormatados = precos.map(valor => 
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  );
  
  console.log(precosFormatados);