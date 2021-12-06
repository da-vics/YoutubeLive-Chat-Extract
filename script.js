	 var elementToObserve= document.getElementById('item-scroller'), 
						observer = new MutationObserver((e => { var message = ''; var username = ''; 
                            var authorType = ''; var Donation = '';
						var authornameSet = false; var authorSet= false; var sentDonation = false;
						for (var s = 0; s < e.length; ++s)
						{	
						
						if(e[s].target.getAttribute('author-type')!=null && authorSet == false)
							{ authorType = e[s].target.getAttribute('author-type'); authorSet = true;}
						
						if(e[s].target.nodeName == 'YT-LIVE-CHAT-PAID-MESSAGE-RENDERER' && authornameSet == false)
							{
								username = e[s].target.$['author-name'].innerText;
								authornameSet = true;
								for(var j= s; j< e.length; ++j)
								{
									if(e[j].target.id == 'message' &&  t.length==0){
										message = e[j].target.innerText;
									}
									
									if(e[j].target.className == 'style-scope yt-live-chat-paid-message-renderer' && 
									(e[j].target.innerText.length>0 || e[j].target.innerText) && D.length==0){
										Donation = e[j].target.innerText;
									}		
								}
								break;
						}
						
							if ('author-name' == e[s].target.firstElementChild.id && authornameSet == false) {
								username = e[s].target.firstElementChild.innerText; 
								authornameSet = true;
								for(var j= s; j< e.length; ++j)
								{
									if('message' == e[j].target.id){
										message = e[j].target.textContent; 	
										break;
										}
									}
									break;
								} 					 
					        }				
                               if(r!='' && t!='') { var n = authorType + '&' + username + ':' + message + ':' + Donation; console.log(n);}
                                })); 
					            observer.observe(elementToObserve,{ subtree: !0,childList: !0});