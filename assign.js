// Create a class Mkulima that will keep a list of farms
// , grocery vendors and products. A single farm record should 
// contain id, farm name, farmer, phone number and address
// . A single grocery vendor record should contain id, 
// store name and phone number. A product should have id, name
//  and price fields. 


class Mkulima {
  
  constructor() {
    this.farms = [];
    this.products = [];
    this.orders = [];
    this.add_method=function(farmId,name,phone,address){
      this.farms.push(farmId,name,phone,address)

          
    };
    this.remove_farm=function(x){  //create function for removing specific farm from the array
                                     //find the element using .find,check if  element id  its equal to the id in parameter
         let farm_out=this.farms.find(farmX=>farmX.farmId===x)
             this.farms.splice(this.farms.indexOf(farm_out),1)
                                                //use .splice to remove the element
                                                                                                                                                                                                                                                                                                                  

    }
    //create a get method function with id as parameters
//find the specific element from the array 
//return the object of the farm
  
    this.get_farm=(farmid)=>{
      let findFarm=this.farms.find(farm=>farm.farmId===farmid)
      console.log(findFarm);
    }
    //create function add product,with parameters,name,price
    //add the product to the product array using the .push
    this.add_product=function(productId,name,price){
      this.products.push(productId,name,price);

    }
    //create function remove product with parameters of id
    //find specific product in the array
    //using .splice,remove the specified element

    this.remove_product=function(productX){
      let product_out=this.farms.find(product=>product.productId===productX)
      this.products.splice(this.products.indexOf(product_out),1)


    }
    this.update_product=function(oldproductId,oldName,oldPrice,newProductId,newName,newPrice){
               this.products.push(newProductId,newName,newPrice)

    }
    this.get_product=function(productFind){
      // let product=this.farms.find(product=>product.productId===productFind)
      // console.log(product);


    }
    //create function printProducts no parameters
    //loop through the product array and console product name with prices.
    this.printProducts=function(x,quantity){
      let productPrcing=this.farms.find(product=>product.productId===x)
      console.log();


    }
    //create function calculateOrderCost,
    //parameters productId and quantity

                                                                                                                                                                                                 
  };
  //create function update_farm with parameters as farmid,name,phone,address
  //replace the farm 
  //
 


}
//create a function constructor of add method
farm1=new Mkulima()
farm1.add_method(1234,"Milko","Milko Charles","WER123");
farm2=new Mkulima();
farm2.add_method(568656,"Jako","Jakob Nilo","QQW344")
farm3=new Mkulima()
farm3.add_method(56,"Padi","Padi Byao","QE123")


//  this.farms.push(farm1\);


console.log(farm2);
console