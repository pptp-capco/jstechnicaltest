//JST6
//Implement the functions below to make the unit tests pass
const productsData = [
    {product: 'product1', value: 100},
    {product: 'product2', value: 200},
    {product: 'product3', value: 300},
    {product: 'product4', value: 400},
];

function findProductsUnderSpecificCost(data, thresholdcost, isMaxThreshold = true){

}

function applyDiscountWithProducts(data, discountPercentage){

}

function getTotalOfProductsValue(data){

}

describe('Products Data utility functions', ()=>{
    it('tests findProductsUnderSpecificCost when isMaxThreshold is set true and max value is set 200', ()=>{
        const expectedData = [
            {product: 'product1', value: 100},
            {product: 'product2', value: 200},
        ];
        
        const actual = findProductsUnderSpecificCost(productsData, 200)
        expect(actual).toEqual(expectedData);
    })
    
    it('tests findProductsUnderSpecificCost when isMaxThreshold is set false and max value is set 200', ()=>{
        const expectedData = [
            {product: 'product2', value: 200},
            {product: 'product3', value: 300},
            {product: 'product4', value: 400},
        ];
        
        expect(findProductsUnderSpecificCost(productsData, 200, false)).toEqual(expectedData);
    })
    
    it('tests applyDiscountWithProducts with 10% discount', ()=>{
        const expectedData = [
            {product: 'product1', value: 90},
            {product: 'product2', value: 180},
            {product: 'product3', value: 270},
            {product: 'product4', value: 360},
        ];
        
        expect(applyDiscountWithProducts(productsData, 10)).toEqual(expectedData);
    })
    
    it('tests getTotalOfProductsValue', ()=>{
        const total = getTotalOfProductsValue(productsData);
        expect(total).toBe(1000);
    })
})
