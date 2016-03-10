 //most the value you can get by experimentation
$(function()
{
	$(window).scroll(function(){

		var winscroll=$(this).scrollTop();
		var winscroll2=winscroll-$(window).height()/1.45	;
		if($(this).scrollTop()<300)//Optimization Technique
		{
			
		$('.logo').css({
			'transform' : 'translate(0px,'+winscroll/1.5+'%)'
		})

		$('.bird').css({
			'transform' : 'translate(0px,-'+winscroll/32+'%)'
		})
		}
		if(winscroll>$('.pics').offset().top-$(window).height()/1.2)
		{
			$('.pics figure').each(function(i)
			{
				setTimeout(function()
					{
					$('.pics figure').eq(i).addClass('is-showing');
					
					},80*(i+1));
			}
			)
	 	}
	 	
	 	var mq = window.matchMedia( "(min-width: 550px)" );
	 	//console.log(winscroll);
	 	//console.log($('.blogs').offset().top-$(window).height());
	 	if(mq.matches)
	 	{
	 	if(winscroll>$('.large-window').offset().top-$(window).height())
	 	{	var opacity=(winscroll-$('.large-window').offset().top+470)/(winscroll/3);
	 		$('.large-window').css({'background-position':'center '+winscroll2+'px'});
	 		$('.tinty').css({'opacity':opacity});
	 	}
	 	if(winscroll>$('.blogs').offset().top-$(window).height()		)
	 	{	
	 		var offset=Math.min(0,(winscroll-$('.blogs').offset().top+$(window).height()/4)-120 );
	 		//console.log(offset);
	 		$('.post1').css({'transform':'translate('+offset+'px,'+-offset*.4+'px'});
	 		offset2=Math.abs(offset)
	 		$('.post3').css({'transform':'translate('+offset2+'px,'+offset2*.4+'px'});
	 	}	
	 	}
	 	else{										//to solve a bug
	 		$('.post1').css({'transform':'translate('+0+'px,'+0+'px'});
	 		$('.post3').css({'transform':'translate('+0+'px,'+0+'px'});
	 	}
	})
	
	

}
)