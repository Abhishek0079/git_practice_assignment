 function p(num) {
             
            let flag = true
            
          
          
            for(let i = 2; i < num; i++)
                if (num % i == 0) {
                    flag = false;
                   
                }
                 
                
            if (flag == true)
                alert(num + " is prime");
            else
                alert(num + " is not prime");
        }

       p(6)