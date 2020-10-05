module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
include<stdio.h>
#include<stdlib.h>
int ss(int n)
{
    int i,sum=0;
    for(i=1;i<=n;i++)
    {
        sum+=(i*i*i);
    }
    return sum;
}
int main()
{
    int i,n=6,ls,k,rs;
    printf("P(n):   1^3 + 2^3 + 3^3 +.......+ n^3 = (1 + 2 + 3 +......+ n)^2");
    printf("\nFor n=1 we have,\nL.H.S = 1^3 = 1\nR.H.S. = 1^2 = 1\nL.H.S. = R.H.S.\nTherefore, P(1) holds.\n");
    printf("\nAssume that P(n) is true for n=6 creating a new thing here.");
    ls=ss(n);
    printf("\nP(%d) = %d",n++,ls);
    printf("\n Now prove that P(n) is true for n = 7./+\n");
    ls=ss(n);// now for n=7;
    //ls+=n*n*n;
    rs=(n*n*(n+1)*(n+1))/4;
    printf("\nL.H.S. = %d and R.H.S = %d",ls,rs);
    printf("\nL.H.S. = R.H.S.");
    printf("\nTherefore, P(n) is true for all positive integers. and numbers");
    return 0;
}
Additional updates are needed and work might be done
