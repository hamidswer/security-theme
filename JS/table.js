const windowsLink = document.querySelector("#windows-protection-link");
const androidLink = document.querySelector("#android-protection-link");
const macosLink = document.querySelector("#macos-protection-link");
const linuxLink = document.querySelector("#linux-protection-link");
const windowsrow = document.querySelector("#windows-protection-row");
const androidrow = document.querySelector("#android-protection-row");
const macosrow = document.querySelector("#macos-protection-row");
const linuxrow = document.querySelector("#linux-protection-row");
const toggleTable = function(e) {
    e.addEventListener("click", function(s){
        s.preventDefault();
        let linkId = e.id;
        let icon = linkId.replace("-protection-link","-icon");
        let iconfinder = document.querySelector(`.${icon}`);
        console.log(iconfinder);
        let linkRowClass = linkId.replace("-link","-row");
        let linkRow = document.querySelector(`#${linkRowClass}`);
        if(linkRow.classList.contains("hidden")) { 
            linkRow.classList.remove("hidden");
            linkRow.classList.add("table-active");
            iconfinder.classList.add("open-arrow");
            iconfinder.classList.remove("closed-arrow");
        }  
        else{
            linkRow.classList.remove("table-active");
            linkRow.classList.add("hidden");
            iconfinder.classList.add("closed-arrow");
            iconfinder.classList.remove("open-arrow");

        }
    })    
};
toggleTable(windowsLink);
toggleTable(androidLink);
toggleTable(macosLink);
toggleTable(linuxLink);