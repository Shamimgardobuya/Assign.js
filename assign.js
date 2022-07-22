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
    this.add_method= (farmId,name,phone,address) =>{
      this.farms.push({farmId,name,phone,address})
    }      
   
    this.remove_farm=(x) => {  //create function for removing specific farm from the array
                                     //find the element using .find,check if  element id  its equal to the id in parameter
         let farm_out=this.farms.find(farmX=>farmX.farmId===x);
         let farmIndex = this.farms.indexOf(farm_out);
         this.farms.splice(farmIndex,1);
                                                //use .splice to remove the element
                                                                                                                                                                                                                                                                                                                  

    }
    this.updateFarm = (farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress)=>{
      let newFarm = this.farms.find(item => item.farmId ===farmId)
      newFarm.farmId =newFarmId;
      newFarm.farmName =newFarmName;
      newFarm.farmer =newFarmerName;
      newFarm.phone =newPhone;
      newFarm.address =newAddress;
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

    this.remove_product=(productX)=>{
      let product_out=this.farms.find(product=>product.productId===productX)
      this.products.splice(this.products.indexOf(product_out),1)


    }
    this.update_product=(productId,_Name,_oldPrice,newProductId,newName,newPrice)=>{
      let original_product = this.farms.find(item => item.productId ===productId)
      original_product.productId = newProductId;
      original_product._Name =newName;
      original_product._oldPrice=newPrice;
     
    }
    this.get_product=(productFind)=>{

      let product=this.farms.find(product=>product.productId===productFind)
      console.log(product);


    }
    //create function printProducts no parameters
    //loop through the product array and console product name with prices.
    this.printProducts=()=>{
      console.log(this.products);


    }
    //create function calculateOrderCost,
    //parameters productId and quantity
    this.calculateOrderCost = (productName,quantity)=>{
      let pricingProduct = this.product.find(item=>item.productName===productName);
      console.log(`${quantity} ${pricingProduct.productName} for KES ${quantity*pricingProduct.price}`);
  }
                                                                                                                                                                                                 
  };
  //create function update_farm with parameters as farmid,name,phone,address
  //replace the farm
  //
 


}
//create a function constructor of add method
farm1=new Mkulima();
farm1.add_method("1234","Milko","0796656","WER123");
farm1.add_method("5686","Jako","07898545","QQW344");
farm1.add_method("5126","Padi","07889866","QE123");
console.log(farm1.farms);

farm1.remove_farm("5126");
console.log(farm1.farms);

farm1.updateFarm("1234","111","Bayzo Farm","Jane Bayzo","07832122","4563QWERE");
console.log(farm1.farms);

farm1.get_farm("5686");


product1=new Mkulima()
product1.add_product=("434","Kimbo",567);
product1.add_product=("677","Ufuta",200);
product1.add_product=("414","1kg Rice",200);
console.log(product1.products);

product1.remove_product("677");
console.log(product1.products);
product1.get_product("434");

product1.update_product("434","Kimbo",567,"897","Originals book")
product1.update_product("414","1kg Rice",567,"123","Stadler pencilHb");
console.log(products);
product1.printProducts();

product1.calculateOrderCost("Originals Book",5)




