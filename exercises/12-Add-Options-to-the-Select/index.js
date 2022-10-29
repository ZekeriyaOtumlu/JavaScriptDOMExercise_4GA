let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let mySelection = document.querySelector("#mySelect");

for (let country in countries){
    let opt = document.createElement("option");
    opt.value= country;
    opt.innerHTML = countries(country);
    console,log(opt);
    mySelection.appendChild(opt);

}



// let options = document.querySelector("option");

// options.appendChild(countries);






// let mySelection = document.querySelector("#mySelect");
// mySelection.addEventListener("click", function() {
// 	//your code here
//     // let mySelection = document.querySelector("#mySelect");
//     document.mySelection.appendChild(countries);

	// let elem = document.createElement("div");
    // elem.innerHTML = "Hello World";
    // document.body.appendChild(elem);
    // elem.style.background = "yellow"

	
// });
