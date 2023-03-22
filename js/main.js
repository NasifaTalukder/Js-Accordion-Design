// ----1st step-----
// ---------------------
function classAddOne() {
    let textShowOne = document.querySelector(".accordion_ItemOne_down");
    let showBtn = document.querySelector(".arrowIconOne");
    let removeBtn = document.querySelector(".down_Arr");
    //    --------p text show----
    textShowOne.classList.add("showTextOne");
    // -----add button show-----
    showBtn.classList.add("showBtn_Add");
    // -------hide remove button--------
    removeBtn.classList.add("removeBtn_show");
}

function classRemoveOne() {
    let textShowOne = document.querySelector(".accordion_ItemOne_down");
    let showBtn = document.querySelector(".arrowIconOne");
    let removeBtn = document.querySelector(".down_Arr");
    // -----#tag hide everything normal------
    textShowOne.classList.remove("showTextOne");
    showBtn.classList.remove("showBtn_Add");
    removeBtn.classList.remove("removeBtn_show");

}
// -------2nd step---------
// ----------------------------
function classAddTwo() {
    let textShowTwo = document.querySelector(".accordion_ItemTwo_down");
    let showBtnTwo = document.querySelector(".arrowIconTwo");
    let removeBtnTwo = document.querySelector(".down_ArrTwo");
    //    --------p text show----
    textShowTwo.classList.add("showTextTwo");
    // -----add button show-----
    showBtnTwo.classList.add("showBtn_AddTwo");
    // // -------hide remove button--------
    removeBtnTwo.classList.add("removeBtn_showTwo");
}

function classRemoveTwo() {
    let textShowTwo = document.querySelector(".accordion_ItemTwo_down");
    let showBtnTwo = document.querySelector(".arrowIconTwo");
    let removeBtnTwo = document.querySelector(".down_ArrTwo");
    // -----#tag hide everything normal------
    textShowTwo.classList.remove("showTextTwo");
    showBtnTwo.classList.remove("showBtn_AddTwo");
    removeBtnTwo.classList.remove("removeBtn_showTwo");
}

// -------3rd step---------
// ----------------------------
function classAddTre() {
    let textShowTre = document.querySelector(".accordion_ItemTre_down");
    let showBtnTre = document.querySelector(".arrowIconTre");
    let removeBtnTre = document.querySelector(".down_ArrTre");
    //    --------p text show----
    textShowTre.classList.add("showTextTre");
    // -----add button show-----
    showBtnTre.classList.add("showBtn_AddTre");
    // // -------hide remove button--------
    removeBtnTre.classList.add("removeBtn_showTre");
}

function classRemoveTre() {
    let textShowTre = document.querySelector(".accordion_ItemTre_down");
    let showBtnTre = document.querySelector(".arrowIconTre");
    let removeBtnTre = document.querySelector(".down_ArrTre");
    // -----#tag hide everything normal------
    textShowTre.classList.remove("showTextTre");
    showBtnTre.classList.remove("showBtn_AddTre");
    removeBtnTre.classList.remove("removeBtn_showTre");
}