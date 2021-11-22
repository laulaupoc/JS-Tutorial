//Laurita
let variableTasks = [
	{
		id: 1,
		taskContent:
			"<div><h1>Which type of variables CAN NOT be re-declared while script is running?</h1> <label> Answer: </label><input id='input1'></input></div>",
		hint: "<div class='hint'><p> hint: this variable is constant </p></div>",
		successMessage: "<div class='successMessage'><p>Correct!</p></div>",
		verifyFunction: () => {
			const input1Correct = document.getElementById("input1").value === "const";
			return input1Correct;
		},
	},
	{
		id: 2,
		taskContent:
			"<div><h1>Create a variable called myFirst, assign the value 50 to it. </h1><input id='input1'></input>  myFirst=50</div>",
		hint: "<div class='hint'><p> var/let/const _ = _ </p></div>",
		successMessage: "<div class='successMessage'><p>Correct!</p></div>",
		verifyFunction: () => {
			const input1Correct = document.getElementById("input1").value === "var";
			const input2Correct = document.getElementById("input1").value === "let";
			const input3Correct = document.getElementById("input1").value === "const";
			return input1Correct || input2Correct || input3Correct;
		},
	},
	{
		id: 3,
		taskContent:
			"<div><h1>Create a variable called myUser, assign the value John Lee to it.</h1> var <input id='input1'></input> = John Lee</div>",
		hint: "<div class='hint'><p> var/let/const _ = _  </p></div>",
		successMessage: "<div class='successMessage'><p>Correct!</p></div>",
		verifyFunction: () => {
			const input1Correct =
				document.getElementById("input1").value === "myUser";
			return input1Correct;
		},
	},
	{
		id: 4,
		taskContent:
			"<div><h1>Which variables CAN BE used to declare a block-scope local variable?</h1> <label>Answer: </label><input id='input1'></input><label>Answer: </label><input id='input2'></input></div>",
		hint: "<div class='hint'><p> There are two variables. </p></div>",
		successMessage: "<div class='successMessage'><p>Correct!</p></div>",
		verifyFunction: () => {
			const inputs = new Set();
			inputs.add(document.getElementById("input1").value);
			inputs.add(document.getElementById("input2").value);
			return inputs.has("let") && inputs.has("const");
		},
	},
	{
		id: 5,
		taskContent:
			"<div><h1>Which type of variables CAN'T have undefined value?</h1> <label>Answer: </label><input id='input1'></input></div>",
		hint: "<div><p> This variable is constant. </p></div>",
		successMessage: "<div><p>Correct!</p></div>",
		verifyFunction: () => {
			const input1Correct = document.getElementById("input1").value === "const";
			return input1Correct;
		},
	},
]; //list of objects
let operatorsTasks = [
	{
		id: 6,
		taskContent:
			"<div><h1>Assign values to variables and add them together</h1>  let x <input id='input1'></input> 5;<br> let y <input id='input2'> 2; <br> let z = x <input id='input3'></input> y;</div>",
		hint: "<div class='hint'><p> This should be a hint </p></div>",
		successMessage: "<div class='successMessage'><p>Correct!</p></div>",
		verifyFunction: () => {
			const input1Correct = document.getElementById("input1").value === "=";
			const input2Correct = document.getElementById("input1").value === "=";
			const input3Correct = document.getElementById("input1").value === "+";
			return input1Correct || input2Correct || input3Correct;
		},
	},
	{
		id: 7,
		taskContent:
			"<div><h1>What of quoteOftoday current value is?</h1>  let quoteOftoday = 'what a very';<br><br>  quoteOftoday += 'nice evening'; <br><br> console.log(quoteOfToday) = <input id='input1'></input>;</div>",
		hint: "<div class='hint'><p> This should be a hint </p></div>",
		successMessage: "<div class='successMessage'><p>Correct!</p></div>",
		verifyFunction: () => {
			const input1Correct =
				document.getElementById("input1").value === "what a very nice evening";
			return input1Correct;
		},
	},
	{
		id: 8,
		taskContent:
			"<div><h1>Multiply 100 with 5, and alert the result:</h1> alert(100 <input id='input1'></input> 5);</div>",
		hint: "<div class='hint'><p> This should be a hint </p></div>",
		successMessage: "<div class='successMessage'><p>Correct!</p></div>",
		verifyFunction: () => {
			const input1Correct = document.getElementById("input1").value === "*";
			return input1Correct;
		},
	},
	{
		id: 9,
		taskContent:
			"<div><h1>Divide 104 by 4, and alert the result:</h1> alert(104 <input id='input1'></input> 4);</div>",
		hint: "<div class='hint'><p> This should be a hint </p></div>",
		successMessage:
			"<div class='successMessage'><p>Correct, in Javascript you do this!</p></div>",
		verifyFunction: () => {
			const input1Correct = document.getElementById("input1").value === "/";
			return input1Correct;
		},
	},
	{
		id: 10,
		taskContent:
			"<div><h1>Use the correct assignment operator that will result in x being 150 (same as x = x + y).</h1>  x = 50; <br><br>  y = 100; <br><br> x <input id='input1'></input> y </div>",
		hint: "<div class='hint'><p> This should be a hint </p></div>",
		successMessage: "<div class='successMessage'><p>Correct!</p></div>",
		verifyFunction: () => {
			const input1Correct = document.getElementById("input1").value === "+=";
			return input1Correct;
		},
	},
]; //list of objects
let dataTypesTasks = [
	{
		id: 11,
		taskContent:
			"<div><h1>Use comments to describe the correct data type of the following variables:</h1>  let x = 18;     // <input id='input1'></input><br><br>  let firstName = 'Laura'     // <input id='input2'> <br><br> const x = { firstName = 'Laura'; lastName = 'Davids'};     //<input id='input3'></input> </div>",
		hint: "<div class='hint'><p> This should be a hint </p></div>",
		successMessage: "<div class='successMessage'><p>Correct!</p></div>",
		verifyFunction: () => {
			const input1Correct =
				document.getElementById("input1").value === "number";
			const input2Correct =
				document.getElementById("input1").value === "string";
			const input3Correct =
				document.getElementById("input1").value === "object";
			return input1Correct || input2Correct || input3Correct;
		},
	},
	{
		id: 12,
		taskContent:
			"<div><h1>Execute the function named addValue.</h1> function addValue (){<br> alert('Hello world!'); <br> } <br> <label> answer: <input id='input1'></input>; </div>",
		hint: "<div class='hint'><p> This should be a hint </p></div>",
		successMessage:
			"<div class='successMessage'><p>Correct, in Javascript you do this!</p></div>",
		verifyFunction: () => {
			const input1Correct =
				document.getElementById("input1").value === "addValue()";
			return input1Correct;
		},
	},
	{
		id: 13,
		taskContent:
			"<div><h1>What is possible values for booleans?</h1><label> answer: <input id='input1'></input> and <input id='input2'></input></div>",
		hint: "<div class='hint'><p> This should be a hint </p></div>",
		successMessage:
			"<div class='successMessage'><p>Correct, in Javascript you do this!</p></div>",
		verifyFunction: () => {
			const inputs = new Set();
			inputs.add(document.getElementById("input1").value);
			inputs.add(document.getElementById("input2").value);
			return inputs.has("true") && inputs.has("false");
		},
	},
	{
		id: 14,
		taskContent:
			"<div><h1>Complete the sentence: When adding a number and a string, JS will treat the number as a <input id='input1'></input></h1> </div>",
		hint: "<div class='hint'><p> let x = 16 + 'Volvo'; console.log (x) = 16Volvo </p></div>",
		successMessage: "<div class='successMessage'><p>Correct!</p></div>",
		verifyFunction: () => {
			const input1Correct =
				document.getElementById("input1").value === "string";
			return input1Correct;
		},
	},
	{
		id: 15,
		taskContent:
			"<div><h1>JS Types are dynamic. What type of value x has in the first statement?</h1><label> 1. let x; <br><label> 2. x = 8; <br><label> 3. x = 'Laura'; <label> answer: <input id='input1'></input></div>",
		hint: "<div class='hint'><p> This should be a hint </p></div>",
		successMessage:
			"<div class='successMessage'><p>Correct, in Javascript you do this!</p></div>",
		verifyFunction: () => {
			const input1Correct =
				document.getElementById("input1").value === "undefined";
			return input1Correct;
		},
	},
]; //list of objects
let allTopics = [
	{
		name: "Variables",
		tasks: variableTasks,
		description: `
                <div class='description'><h3>JavaScript variables are loosely  typed, that is to say, variables can hold values with any type of data.<br> Basically, variables are just named placeholders for values.</div> 
                <div class='description'> To declare a variable, you use the var keyword followed by the variable name as follows:<br><br><div class='difcol'> var message;</div><br>A variable name can be any valid identifier. The message variable is declared and hold a special value undefined.</div>
                <div class='description'> After declaring a variable, you can assign the variable a string as follows:<br><br><div class='difcol'> message = 'Hi';</div></div>
                <div class='description'> To declare a variable and initialize it at the same time, you use the following syntax:<br><br> <div class='difcol'>var varialeName = value;</div></div>
                <div class='description'> For example, the following statement declares the message variable and assign it a value 'Hi' :<br><br><div class= 'difcol'> var message = 'Hi';</div></div> 
                <div class='description'> Also, it could be undefined and undeclared variables. See the following example:<br><br>  <div class = 'difcol'> var message; <br><br> console.log(message);  // undefined<br> console.log (counter); // Reference Error: counter is not defined<div></div></div></div>
                <div class='description'> Lastly, there is three types of variables: <br><br>
                <div class='difcol'> var </div>
                Doesn't support block scope. <br>
                Can be redeclared with same variable againa and again.<br><br> 
                <div class= 'difcol'>let</div>
                Can be used instead of var. <br>
                It is block-scoped variable.<br>
                Doesn't allow redeclaration, but can be reassigned later.
                <div class='difcol'> const</div> 
                It must be assigned once it has declared. <br>
                Once we declare a variable with const, it cannot be changed later.<br>
                Doesn’t allow redeclaration or reassignment.<br>
                It is block-scoped like variable.<br><br>
                </h3></div></div>`,
	},

	{
		name: "Operators",
		tasks: operatorsTasks,
		description:
			"<div class='description'><h3>This should be an explanation about current topic.</h3></div>",
	},

	{
		name: "Data types",
		tasks: dataTypesTasks,
		description:
			"<div class='description'><h3>This should be an explanation about current topic.</h3></div>",
	},
];
//Laurita
