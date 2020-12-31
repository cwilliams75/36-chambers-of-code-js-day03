class Problem {

    /**
     * Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. 
     * If so, return the string true, otherwise return the string false. 
     * 
     * For example: if num is 4602225 your program should return the string false because 5 is not an even number.
     */
    simpleEvens(num) {

        //  Step 1. Create a variable that will take in the input parameter to be analyzed. 
        //  Step 2. Create a for loop that will iterate through the input and deterine if the number is even or odd using the (Modulus % = 2).
        //  Step 3. Create a counter to hold each individual number.
        //  Step 4. Create a if statement to determine if each number is even it would return true, if not return false. 
        //  Step 5. Create an else statement to determine for odd numbers.

        let str = num.toString();
        let splitStr = str.split("");
        for (let i = 0; i < splitStr.length; i++) {
            if (splitStr[i] % 2 != 0)
                return false;
        }
        return true;
    }

    /**
     * Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, 
     * and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return 
     * the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program 
     * should return false as well.
     * 
     * For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, 
     * and 3 question marks between 5 and 5 at the end of the string.
     */
    questionsMarks(str) {

        // code goes here  
        return null;
    }

    /**
     * Have the function SnakeCase(str) take the str parameter being passed and return it in proper snake case format where each 
     * word is lowercased and separated from adjacent words via an underscore. The string will only contain letters and some 
     * combination of delimiter punctuation characters separating each word.
     * 
     * For example: if str is "BOB loves-coding" then your program should return the string bob_loves_coding.
     */
    snakeCase(str) {
        // Step 1. Create a variable being passed into the function to be snakecased.
        // Step 2. 

        const toSnakeCase = str => str && str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('_');
       
        console.log(toSnakeCase(str));
        // code goes here  
        return toSnakeCase(str);
    }

    /**
     * Have the function GCF(arr) take the array of numbers stored in arr which will always contain only 
     * two positive integers, and return the greatest common factor of them. 
     * 
     * For example: if arr is [45, 12] then your program should return 3. 
     * There will always be two elements in the array and they will be positive integers.
     */
    gcf(arr) {
        // code goes here  
        return null;
    }


}

module.exports = Problem;