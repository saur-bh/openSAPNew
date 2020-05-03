sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(Controller,MessageToast){
	


			return Controller.extend("opensap.myapp.controller.App",{
				
				onClick:function(){
					
					MessageToast.show("I am from OpenUI"); //add dependencies in scaffolding template
					
				}
				
			}) ;
	
});
