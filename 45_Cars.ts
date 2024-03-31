import { features } from "process";


function storeCarInfo(manufacture: string, modelName: string, ...extraOption: { [key : string]: any } [] ):
Object  {

    const carInfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
}

return carInfo;
};


let answer = storeCarInfo("Toyota", "Corolla", {color: "red"}, {features: ["Navigatin", " Power window"]})

console.log(answer);
