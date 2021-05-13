function primeFactorize(n) {
    const primeFactors = [];
    let primeFactor = 0;
  
  
    let i = 2;
    while (i <= n / i) {
      if (n % i === 0) {
        primeFactor = i;
        primeFactors.push(i)
        n /= i;
      } else {
        i++;
      }
    }
  
    if (primeFactor < n) primeFactor = n;
    primeFactors.push(n)
  
    return primeFactors;
  }
  
  console.log(primeFactorize(25));
  console.log(primeFactorize(19));
  console.log(primeFactorize(77));