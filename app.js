
//Delgetsiin controller
var uiController = (function(){
//index,.html holbol
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
   },
   addListener : function (item, type) {
       var html;
       if (type === 'inc') {
           list = ".income__list";
           html = '<div class="item clearfix" id="income-$$id$$"><div class="item__description">$$description$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
       } else {
        list = ".expenses__list";
        html = '<div class="item clearfix" id="expenses-$$id$$"><div class="item__description">$$description$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
       };
       html =html.replace('$$id$$', item.id);
       html =html.replace('$$description$$', item.description);
       html =html.replace('$$VALUE$$', item.value);
       document.querySelector(list).insertAdjacentHTML('beforeend', html);

   }
}; })();

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
        items :{
            inc : [],
            exp : []
        },
        totels : {
            inc : 0 ,
            exp: 0
        }
    };
    return {
        addItem: function(type, des, val) {
var item, id;
if (data.items[type].length === 0) id = 1;
 else {
 id =   data.items[type][data.items[type].length - 1].id + 1;
}

if (type === 'inc') {
    item = new Income(id, des, val);
} else {
    item = new Expense(id, des, val);
}

       data.items[type].push(item);

       return item ;
        },
        seeData : function () {
           return data;
        }
    };

})();
//****************************** */

var appController = (function(uiController,financeController){
var ctrlAddItem = function () {
    //uiController ooroos irj bgaa utga awah
    var input = uiController.getInput();
    console.log(financeController.seeData());
// financeController ruu oruulah
  var item =  financeController.addItem(input.type, input.description, input.value);
  //olj awsan ogogdloo webiin tohiroh hesegt gargah
  uiController.addListener(item, input.type);
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