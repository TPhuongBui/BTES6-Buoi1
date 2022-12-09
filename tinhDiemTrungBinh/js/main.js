
tinhDTB = (...value) => {
    let tong = 0
    // for(let i =0; i < value.length; i++){
    //     tong += Number(value[i]);
    // }
    value.map(i => tong+= Number(i))
    return (tong/value.length).toFixed(2);
}


// document.getElementById("btnKhoi1").onclick = (()=>{
//     let e = document.getElementById("inpToan").value
//       , n = document.getElementById("inpLy").value
//       , t = document.getElementById("inpHoa").value;
//     document.getElementById("tbKhoi1").innerHTML = tinhDTB(e, n, t)
// }
// ),
// document.getElementById("btnKhoi2").onclick = (()=>{
//     let e = document.getElementById("inpVan").value
//       , n = document.getElementById("inpSu").value
//       , t = document.getElementById("inpDia").value
//       , d = document.getElementById("inpEnglish").value;
//     document.getElementById("tbKhoi2").innerHTML = tinhDTB(e, n, t, d)
// }

dtbKhoi1 = () => {
    let toan = document.getElementById("inpToan").value
    let ly = document.getElementById("inpLy").value
    let hoa = document.getElementById("inpHoa").value;
    let dtb = tinhDTB(toan, ly, hoa);
    // console.log(dtb);
    $("#tbKhoi1").html("Điểm trung bình của khối 1 là: " + dtb);
}


dtbKhoi2 = () => {
    let van = document.getElementById("inpVan").value
    let su = document.getElementById("inpSu").value
    let dia = document.getElementById("inpDia").value
    let tiengAnh = document.getElementById("inpEnglish").value;
    let dtb2 = tinhDTB(van, su, dia, tiengAnh)
    $("#tbKhoi2").html("Điểm trung bình của khối 2 là: " + dtb2);
}

