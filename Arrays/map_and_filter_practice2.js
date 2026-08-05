        let person = {
            name: 'talal',
            age: 22,
            gender: 'male',
            profession: 'student',
            city: 'Lahore',
            intro: function (){
                return "My name is "+this.name;
            }
        }

        console.log(person.name);
        console.log(person.age);
        console.log(person.gender);
        console.log(person.intro());
        
        person.office = "exd";
        person.uni = 'numl';


        console.log(person.office);
        console.log(person);

        for(let key in person){
            console.log(key, person[key]);
            
        }

        
        let products = [
            {name: 'mouse', price: 1200},
            {name: 'keyboard', price: 5000},
            {name: 'monitor', price: 12000},
            {name: 'mouse-pad', price: 800},
            {description: function (){
                return 'price of mouse is ';  
            }}
        ];
        
        
        console.log(products[0].name+ ": "+products[0].price);
        console.log(products[1].name);
        console.log(products[1].price);
        console.log(products[2].name);
        console.log(products[2].price);
        console.log(products[3].name);
        console.log(products[3].price);
        
        console.log(products[4].description());
        let result = products.filter((p)=>{
            return p.price >1000;
        });
        
        let result2 = result.map((n)=>{
            return n.name +": "+ n.price;
        });
        console.log(result2);


