function TwoSum(numbers, target){

    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < i; j++){
            if(numbers[i] + numbers[j] === target){
                // console.log([i, j])
                // .sort() permet de remettre les indices dans l'ordre croissant, sinon inverser les boucles
                return [i, j].sort((a, b) => a - b)
            }else{
                console.log("pas de paire trouvé")
            }
        }
    }
}
console.log(TwoSum([2, 7, 11, 15], 9))
console.log(TwoSum([3, 2, 4], 6))
console.log(TwoSum([3, 3], 6))

