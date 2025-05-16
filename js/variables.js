		/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
        let myName;
        let myAge;
        const myH1 = document.querySelector("h1");

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
        myName = "Millu";
        myAge = 27;

		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
        myName = "Milla";
        myAge = 28;

		// STEP 4: Variable types (use typeof in the console)
		// Numbers
        let num = 10;

		// Strings (use '' or "")
        let str = "This is a string";

		// Booleans
        let bl = true;

		// Arrays
        let arr = ["1", "2", "3"];
        let mixedArr = [1, true, "hello"];
        
		// Objects
        let obj = {key: 10};
        let dog = {
            color: "black",
            age: 10,
            goodBoy: true
        };
		// STEP 5: Typing (JavaScript is a loosely-typed language)

        Object.entries(dog).forEach(element => {
            console.log(element)
        });
