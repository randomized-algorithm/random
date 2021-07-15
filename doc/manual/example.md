# Examples
```js
import { randint , randfloat , sample , shuffle } from '@randomized/random' ;

randfloat( 0 , 1 ) ; // 0.19876947347074747
randfloat( 0 , 1 ) ; // 0.23755912738852203

randint( 0 , 100 ) ; // 57
randint( 0 , 100 ) ; // 31

let a = [ 0 , 1 , 2 , 3 ] ;

sample( 1 , a , 0 , 4 ) ;
a ; // [ 0 , 1 , 2 , 3 ]

sample( 1 , a , 0 , 4 ) ;
a ; // [ 1 , 0 , 2 , 3 ]

shuffle( a , 0 , 4 ) ;
a ; // [ 1 , 3 , 0 , 2 ]

shuffle( a , 0 , 4 ) ;
a ; // [ 3 , 2 , 1 , 0 ]
```
