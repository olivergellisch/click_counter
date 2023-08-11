let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    let countHtml = `<div class="entryRow">
                        <div>
                         <span class="entry-date">${getEntryDate()}</span> : 
                         <span class="saved-count">${count}</span>
                        </div>
                    </div>`;
    saveEl.innerHTML += countHtml
    countEl.textContent = 0
    count = 0
}

function getEntryDate(){
    var today = new Date();
    var now = today.toLocaleString();
    return now;
}
