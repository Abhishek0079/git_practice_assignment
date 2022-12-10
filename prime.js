 function p(num) {
             
            let flag = true
            let count = 0;
          
          
            for(let i = 2; i < num; i++)
                if (num % i == 0) {
                    flag = false;
                   count++;
                }
                 
                
            if (flag == true)
                alert(num + " is prime");
            else
                alert(num + " is not prime");
        }

       p(6)