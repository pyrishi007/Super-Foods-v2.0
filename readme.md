# Swiggy API for testing 
// This is Async - function  which is used to fetch the Async request 
const swiggy_Api = async function(){
  
    // Swiggy API with await for the response
    //Here fetch will just give the respone, rather if the response is ok or not .then will catch the reponse so it important to make a checking critia 
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") 

// catching the request with then and catch
    .then(async(response)=>{
       
        // It will check if the reponse with in the <=200 and >=300 ! means opposite
        // If The response is not ok then this is throw a error
        //If there will be error then this will jump this error to the catch
        if(!response.ok){
            throw new Error("Reponse is nt ok")
        }
        
        //If the response is OK then it is gonna covert the respone into JSON format
         return await response.json()

    }).then((data)=>{

        //Data which is comming from the reponse will be displayed here
         console.log(data);
    }).catch((data)=>{

        // It is gonna catch the response
       console.log(data);
    })

}


swiggy_Api()


TRIAL and ERROR finding's
You have a space between .res_mainBody and :hover.
👉 That means “any element inside .res_mainBody when hovered”, not just .res_mainBody itself.
That’s why children are also getting scaled.

.res_mainBody :hover { ---> inhertied to all child
  cursor: pointer;
  transform: scale(1.2) no;
} 

🔹 “CONFIG-DRIVEN UI”
  # A config-driven UI means the UI is not hardcoded in your components — instead, it is generated dynamically based on a configuration object (JSON, JS object, etc.).

🔹 Why use Config-Driven UI?
  # Flexibility → You don’t need to change code every time; just update config.
  # Scalability → Easy to build large, dynamic forms, menus, dashboards, etc.
  # Reusability → Same component can render different UIs based on config.
  # Low maintenance → Non-developers (or backend) can drive UI by just changing config JSON.

# Good industry pratices 
 - Always make seprate folder for component
   > Start the file name with capital letter with same name as the component.
   > Make different folder for use case - seniro. eg Assets, utlis, components
   > utils folder will have the mock_data and constants into it
   > Name the constants variable in captial letter as per GIP


P-0.01
Object destructuring
  - On the fly
  - Manually 

> Manually 
  - for Object de structuring we should be using {}

   # Inside the Restro card passed porps(properties) 
        <Restro_Card restroName = "KFC" cuisine = "bucket , burger , nuget"/>
        const Restro_Card = (restro_info) => {
        const {restroName, cuisine } = restro_info
       
        - output
            restroName ---> KFC
            cuisine ---> "bucket , burger , nuget"

       # If you want to chnage the name then 
        const {restroName, cuisine:restroCuisine } = restro_info

        - output
            restroName ---> KFC
            restroCuisine ---> "bucket , burger , nuget"
        return (
            //JSX
        );

        };
        
> On the fly
  - for Object de structuring we should be using {}
   # Inside the Restro card passed porps(properties) 
        <Restro_Card restroName = "KFC" cuisine = "bucket , burger , nuget"/>
        const Restro_Card = ({restroName ,cuisine}) => {
       
        - output
            restroName ---> KFC
            cuisine ---> "bucket , burger , nuget"
 
    #  Here if you want to change the name then do same cuisine:restroCuisine
        return (
            //JSX
        );

        };

P-0.02