// heading
const heading = document.querySelector(".heading");
console.log(heading.innerHTML);

jumpText = () => {
    tach(heading.innerHTML);
}
// jump = (e => {
//     return [...e].map(e => `<span>${e}</span>`).join("")
// }
// ),
//  heading.innerHTML = jump(heading.innerText);

tach = ([...val]) => {
    // let chuoiSpan = "";
    // for (let i = 0; i < val.length; i++) {
    //     chuoiSpan += (`<span>${[...val][i]}</span>`)
    // }
    let chuoiSpan = [...val].map(i => `<span>${i}</span>`).join("")
    heading.innerHTML = chuoiSpan;
    console.log(chuoiSpan);
}

jumpText()