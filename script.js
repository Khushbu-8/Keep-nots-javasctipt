let record = [];

const viewR = () => {
    let allL = JSON.parse(localStorage.getItem("note")) ? JSON.parse(localStorage.getItem("note")) : [];

    let tbl = "";

    allL.map((val) => {
        return (
            tbl += `
                <div class="col-12 col-lg-3 p-3">
                    <div class="notes  w-100 h-100 p-4" style=" background-color: #f6ebe7; border-radius: 5px;   position: relative;" >
                        <p style="font-weight:bold; font-size:20px;">${val.title}</p>
                        <p>- ${val.content}<br></p>
                 <button onclick="deletN('${val.id}')" style=" width: 30px; height: 30px; border: 1px solid #000; align-items: center; position: absolute; bottom: 10%;right: 5%; background-color:#cea18e"><i class="fa-regular fa-trash-can"></i></button>
                 </div>
                </div>

                `
        )

    })
    document.getElementById("allnotes").innerHTML = tbl;
}

viewR();

const save = () => {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    if (!title || !content) {
        document.getElementById("alrt").innerHTML = "All Field is Required...";
        document.getElementById("alrt").style.color = "red";
        return;
    }

    let obj = {
        id: Math.floor(Math.random() * 100),
        title: title,
        content: content,
    }
    if (JSON.parse(localStorage.getItem("note")) === null || JSON.parse(localStorage.getItem("note")) === undefined) {
        record.push(obj);
        localStorage.setItem("note", JSON.stringify(record));
    } else {
        let old = JSON.parse(localStorage.getItem("note"));
        old.push(obj);
        localStorage.setItem("note", JSON.stringify(old));
    }

    alert("Saved...")
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    viewR();
}

const deletN = (id) => {

    let allN = JSON.parse(localStorage.getItem("note"));
    let delet = allN.filter((val) => {
        return val.id != id;
    })
    localStorage.setItem("note", JSON.stringify(delet));
    alert("deleted");
    viewR()
}