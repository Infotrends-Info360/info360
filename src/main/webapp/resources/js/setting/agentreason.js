function showAgentreason() {
	
            closeAllHrContent();
            $("#AgentreasonContent").show();
            $("#manageAgentreasonContent").show();
           
            $("button.Agentreason").removeClass("btn-success");
            $("button.Agentreason").addClass("btn-primary");
                  select2();
	}


function select2(){
	 $.ajax({                              
	          url:"http://ws.crm.com.tw:8080/IMWebSocket/RESTful/Select_agentreason",
		         data:{
		        	 flag:0
		        	 },
		         type : "POST",                                                                    
		         dataType:'json',
		         error:function(e){                                                                 
		         alert("失敗");
		         callback(data);
		         },
		         success:function(data){
		        	 $('#agentreason0').remove();
		        	 
		        	 var agentreason00 = "<div class='row ibox' id='agentreason0'></div>"
		        		 document.getElementById("agentreason00").insertAdjacentHTML("BeforeEnd",agentreason00);
		        	 
		        	 var agentreason0 = "<table class='table table-bordered table-hover' id='manageAgentreasonTable' data-pagination='true' data-page-list='[5, 10, 20, 50, 100, 200]'data-search='true' data-url='x'></table>"
		        		 document.getElementById("agentreason0").insertAdjacentHTML("BeforeEnd",agentreason0);
		        	
		        	 $('#manageAgentreasonTable').bootstrapTable({
		         columns: [{
		           
		             field: 'statusname',
		             title: '狀態名'
		         }, {
		             field: 'statusname_cn',
		             title: '狀態名_CN'
		         },{
		             field: 'statusname_en',
		             title: '狀態名_EN'
		         },
		         {
		             field: 'statusname_tw',
		             title: '狀態名_TW'
		         },
		         {
		             field: 'description',
		             title: '註解'
		         },
		         {
		             field: 'alarmduration',
		             title: '告警時間'
		         }, {
		             field: 'alarmcolor',
		             title: '告警顏色'
		         }, {
		             field: 'flag',
		             title: 'flag'
		         }],
		     	data:data.agentreason,
		     	onClickRow : function(row, $element) {
					//alert(JSON.stringify(row));
					document.getElementById("statusname_cn").value=row.statusname_cn;
					document.getElementById("statusname").value=row.statusname;
					document.getElementById("statusname_tw").value=row.statusname_tw;
					document.getElementById("statusname_en").value=row.statusname_en;
					document.getElementById("description").value=row.description;
					document.getElementById("statusname").value=row.statusname;
					document.getElementById("Update_id").value=row.dbid;
					document.getElementById("alarmduration").value=row.alarmduration;
				},
		     	});"json"
	     		console.log("啟用",data);
	     		agentreason2();
		      }	        
	 	}); 

	   $.ajax({                              
		    url:"http://ws.crm.com.tw:8080/IMWebSocket/RESTful/Select_agentreason",
			   data:{
			     flag:1
			        },
			            
			      type : "POST",                                                                    
			      dataType:'json',
			      error:function(e)
			      {                                                                 
			      alert("失敗");
			      callback(data);
			      },
			      success:function(data){
			    	  
			    	  $('#agentreason1').remove();
			        	 
			        	 var agentreason11 = "<div class='row ibox' id='agentreason1'></div>"
			        		 document.getElementById("agentreason11").insertAdjacentHTML("BeforeEnd",agentreason11);
			        	 
			        	 var agentreason1 = "<table class='table table-bordered table-hover' id='banAgentreasonTable' data-pagination='true' data-page-list='[5, 10, 20, 50, 100, 200]'data-search='true' data-url='x'></table>"
			        		 document.getElementById("agentreason1").insertAdjacentHTML("BeforeEnd",agentreason1);	  
			    	  
			    	  
			    $('#banAgentreasonTable').bootstrapTable({
			       columns: [{
			           
			             field: 'statusname',
			             title: '狀態名'
			         }, {
			             field: 'statusname_cn',
			             title: '狀態名_CN'
			         },{
			             field: 'statusname_en',
			             title: '狀態名_EN'
			         },
			         {
			             field: 'statusname_tw',
			             title: '狀態名_TW'
			         },
			         {
			             field: 'description',
			             title: '註解'
			         },
			         {
			             field: 'alarmduration',
			             title: '告警時間'
			         }, {
			             field: 'alarmcolor',
			             title: '告警顏色'
			         }, {
			             field: 'flag',
			             title: '狀態'
			         }],
			     	data:data.agentreason,
			     	onClickRow : function(row, $element) {
						//alert(JSON.stringify(row));
						document.getElementById("statusname_cn").value=row.statusname_cn;
						document.getElementById("statusname").value=row.statusname;
						document.getElementById("statusname_tw").value=row.statusname_tw;
						document.getElementById("statusname_en").value=row.statusname_en;
						document.getElementById("description").value=row.description;
						document.getElementById("statusname").value=row.statusname;
						document.getElementById("Update_id").value=row.dbid;
						document.getElementById("alarmduration").value=row.alarmduration;
					},
			     	});"json"
		     		console.log("停用",data);
		     		agentreason2();
			     }    
			}); 
		};

function agentreason2() {
 	  $("#manageAgentreasonTable tbody tr,#banAgentreasonTable tbody tr").on("click",function(){
           var text = $(this).text();
           if (text && text != "") {
               showEditMemberAgentreason();
           }
       });
 	}

//
//
//顯示 啟用表格
function showManage_Agentreason(){
	closeAllHrContent();

	$("#AgentreasonContent").show();
	$("#manageAgentreasonContent").show();
	
	$("button.manageAgentreason").removeClass("btn-success");
    $("button.manageAgentreason").addClass("btn-primary");
 
}
//顯示 停用表格
function showBan_Agentreason(){
	closeAllHrContent();

	$("#AgentreasonContent").show();
	$("#banAgentreasonContent").show();
	
	$("button.ban").removeClass("btn-success");
    $("button.ban").addClass("btn-primary");

}
//
//新增畫面
function showAddMemberAGR() {
    closeAllHrContent();
    $("#AgentreasonContent").show();
    $("#addMemberAGRContent").show();

    $("button.addMember").show();
    $("button.addMember").removeClass("btn-success");
    $("button.addMember").addClass("btn-primary");
}

//關閉新增畫面
function closeAddMemberAGR() {
    closeAllHrContent();
    $("button.addMember").hide();
    
    $("#AgentreasonContent").show();
    $("#manageAgentreasonContent").show();
    
    $("button.manage").removeClass("btn-success");
    $("button.manage").addClass("btn-primary");
}

//新增功能
function sendAddMemberAgentreason() {
	 closeAddMember();
	 var alarmcolor = document.getElementById('Insert_alarmcolor').value;
	 var alarmduration = document.getElementById('Insert_alarmduration').value;
	 var description = document.getElementById('Insert_description').value;
	 var statusname = document.getElementById('Insert_statusname').value;
	 var statusname_cn = document.getElementById('Insert_statusname_cn').value;
	 var statusname_en = document.getElementById('Insert_statusname_en').value;
	 var statusname_tw = document.getElementById('Insert_statusname_tw').value;
	 var createuserid = document.getElementById('Insert_createuserid').value;
	
	 $.ajax({                              
          url:"http://ws.crm.com.tw:8080/IMWebSocket/RESTful/Insert_agentreason",
	         data:{
	        	 flag:0,
	        	 alarmcolor:alarmcolor,
	        	 alarmduration:alarmduration,
	        	 description:description,
	        	 statusname:statusname,
	        	 statusname_cn:statusname_cn,
	        	 statusname_en:statusname_en,
	        	 statusname_tw:statusname_tw,
	        	 createuserid:createuserid
	        	 },
	         type : "POST",                                                                    
	         dataType:'json',
	         
	         error:function(e){                                                                 
	         alert("失敗");
	         callback(data);
	         },
	         success:function(data){
	        	 select2()
	   		     }
	   		        
	   		 });
    showToastSuccess("新增成功");
     closeAllHrContent();
     $("#AgentreasonContent").show();
     $("#manageAgentreasonContent").show();
 }



//更新頁面
function showEditMemberAgentreason() {
    closeAllHrContent();
    $("#AgentreasonContent").show();
    $("#editMemberAGRContent").show();

    $("button.editMember").show();
    $("button.editMember").removeClass("btn-success");
    $("button.editMember").addClass("btn-primary");
}
//更新頁面關閉
function closeEditMemberAgentreason() {
    closeAllHrContent();
    $("button.editMember").hide();
    $("#AgentreasonContent").show();
	$("#manageAgentreasonContent").show();

    $("button.manage").removeClass("btn-success");
    $("button.manage").addClass("btn-primary");
}



function sendEditMemberAgentreason() {

 closeEditMember();
 var flag = document.getElementById('Update_flag').value;
 var dbid = document.getElementById('Update_id').value;;
 var alarmcolor = document.getElementById('alarmcolor').value;
 var alarmduration = document.getElementById('alarmduration').value;
 var description = document.getElementById('description').value;
 var statusname = document.getElementById('statusname').value;
 var statusname_cn = document.getElementById('statusname_cn').value;
 var statusname_en = document.getElementById('statusname_en').value;
 var statusname_tw = document.getElementById('statusname_tw').value;

 $.ajax({                              
      url:"http://ws.crm.com.tw:8080/IMWebSocket/RESTful/Update_agentreason",
         data:{
        	 flag:flag,
        	 dbid:dbid,
        	 alarmcolor:alarmcolor,
        	 alarmduration:alarmduration,
        	 description:description,
        	 statusname:statusname,
        	 statusname_cn:statusname_cn,
        	 statusname_en:statusname_en,
        	 statusname_tw:statusname_tw
        	 },
            
         type : "POST",                                                                    
         dataType:'json',
         
         error:function(e){                                                                 
         alert("失敗");
         callback(data);
         },
         success:function(data){
        	 select2()
   		     }
   		        
   		 }); 
showToastSuccess("修改成功");
 	closeAllHrContent();
 	$("#AgentreasonContent").show();
    $("#manageAgentreasonContent").show();
}


//解鎖對話視窗
function unlockAccountAgentreason() {
    $("#unlockButtonAGR").trigger("click");

}


//停用對話視窗
function confirmBanAgentreason() {
    $("#confirmBanButtonAGR").trigger("click");
}

function AgentreasonDelete(message) {
	var dbid = document.getElementById('D_id').value;
  	 
	 $.ajax({                              
         url:"http://ws.crm.com.tw:8080/IMWebSocket/RESTful/Delete_AgentReason",
	         data:{			        
	        	 dbid:dbid
	        	 },
	         type : "POST",                                                                    
	         dataType:'json',
	         error:function(e){                                                                 
	         alert("失敗");
	         callback(data);
	         },
	         success:function(data){
	        	 select2()
	     	}  
	 }); 
   toastr.success(message);
    closeAllHrContent();
 	$("#AgentreasonContent").show();
	$("#manageAgentreasonContent").show();
}


function AgentreasonLuck(message) {
	 var flag = document.getElementById('Delete_flag').value;
	 var dbid = document.getElementById('Delete_id').value;

	 $.ajax({                              
          url:"http://ws.crm.com.tw:8080/IMWebSocket/RESTful/LogicDelete_agentreason",
	         data:{
	        	 flag:flag,
	        	 dbid:dbid
	        	 },
	         type : "POST",                                                                    
	         dataType:'json',
	         error:function(e){                                                                 
	         alert("失敗");
	         callback(data);
	         },
	         success:function(data){
	        	 select2()
	     	}  
	 });
    toastr.error(message);
    closeAllHrContent();
    $("#AgentreasonContent").show();
    $("#manageAgentreasonContent").show();
}

