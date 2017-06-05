define(['jquery'],function($){
	/*选择框交互*/
	var select=function(){
		var show=$('.show');
		var list=$('.list');

		show.click(function(event){
			$(event.target).next().toggle();
		});
		list.click(function(event){
			var text=$(event.target).text();
			var parent=$(event.currentTarget);
	
			parent.hide();
			parent.prev().text(text);
		});
	};
	
	/*判断数据是否为空或null或undefined*/
	var isNull=function(data){
		if(data == '' || typeof(data) == 'undefined' || data == null){
			return '无数据';
		}else{
			return data;
		}
	};
	
	/*表单必填校验*/
	var formCheck={
		isFocus:function(element){//焦点
			element.focus(function(event){
				var value=$(event.target).val();
				if(value == '' || value == null){
					$(event.target).parent().addClass('required');
				}else{
					$(event.target).parent().removeClass('required');
				}
			});
		},
		
		isBlur:function(element){//失去焦点
			element.blur(function(event){
				var value=$(event.target).val();
				if(value == '' || value == null){
					$(event.target).parent().addClass('required');
				}else{
					$(event.target).parent().removeClass('required');
				}
			});
		},
		
		isNull:function(element,error){
			element.bind('input propertychange',function(event){
				var length=element.val().length;
				if(length == 0){
					$(event.target).parent().addClass('required');
				}else{
					error.text('');
					$(event.target).parent().removeClass('required');
				}
			});
		},
		
		isPassword:function(element,error){//密码长度
		    element.bind('input propertychange',function(event){
				var length=element.val().length;
				if(length < 6){
					error.text('密码长度不能少于6位！');
					$(event.target).parent().addClass('required');
				}else{
					error.text('');
					$(event.target).parent().removeClass('required');
				}
			});
		},
		
		isPhone:function(element,error){//手机号码
			element.bind('input propertychange',function(event){
				var length=element.val().length;
				
				if(length != 11){
					error.text('手机号码请输入11位');
					$(event.target).parent().addClass('required');
				}else{
					error.text('');
					$(event.target).parent().removeClass('required');
				}
				
				var pattern = /^1[3|4|5|8][0-9]\d{4,8}$/;
				if(!pattern.test(element.val()) || length != 11){
					error.text('手机号码格式不对');
					$(event.target).parent().addClass('required');
				}else{
					error.text('');
					$(event.target).parent().removeClass('required');
				}
			});
		},
		
		isCardNo:function(element,error){//身份证
		    element.bind('input propertychange',function(event){
				var pattern=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
				if(!pattern.test(element.val())){
					error.text('身份证格式不对');
					$(event.target).parent().addClass('required');
				}else{
					error.text('');
					$(event.target).parent().removeClass('required');
				}
			});
		},
		
		isEmail:function(element,error){//email
			element.bind('input propertychange',function(event){
				var pattern=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
				if(!pattern.test(element.val())){
					error.text('email格式不正确');
					$(event.target).parent().addClass('required');
				}else{
					error.text('');
					$(event.target).parent().removeClass('required');
				}
			});
		}
	};
	
	/*点击导航高亮*/
	var highlight=function(element){
		element.click(function(event){
			event.preventDefault();
			$(event.currentTarget).addClass('highlight').siblings().removeClass('highlight');
		});
	};
	
	/*表格方块多字*/
	var tableBox=function(element){
		for(var i=0;i<element.length;i++){
			if(element[i].innerHTML.length >= 3){
				var self=element[i];
				$(self).addClass('addWidth');
			}
		}
	};
	return {
		select: select,
		isNull:isNull,
		formCheck:formCheck,
		highlight:highlight,
		tableBox:tableBox
	};
		
});
