var uiController = (function(){
var DOMstring = {
inputType : '.add__type',
inputDesription : '.add__description',
inputValue : '.add__value',
addBtn : '.add__btn'
};

return {
   getInput : function () {
       return{
           type : document.querySelector(DOMstring.inputType).value,
           description : document.querySelector(DOMstring.inputDesription).value,
           value : document.querySelector(DOMstring.inputValue).value,
       };
   },
   getDOMstring : function () {
       return DOMstring;
       
   }
};

})();
// ********Sanhvvgin controller***********
var financeController = (function(){
var Income = function(id, description, value){
this.id = id ;
this.description = description;
this.value = value;
};

var Expense = function(id, description, value){
    this.id = id ;
    this.description = description;
    this.value = value;
    };

    var data = {
        allItems :{
            inc : [],
            exo : []
        },
        totels : {
            inc : 0 ,
            exp: 0
        }
    }

})();
//****************************** */

var appController = (function(uiController,financeController){
var ctrlAddItem = function () {
    console.log(uiController.getInput());
};

var setupEventlisteners = function () {
    var DOM = uiController.getDOMstring();
    document.querySelector(DOM.addBtn).addEventListener('click', function(){
        ctrlAddItem();
        });
        
        document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        });
    };

return {
    init: function () {
        setupEventlisteners();
    }
}

})(uiController,financeController);


appController.init();