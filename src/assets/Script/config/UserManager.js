let G_MyUserInfo={},G_UserManager={refreshData:function(e){for(var r in e)console.log(r,e[r]),G_MyUserInfo[r]=e[r]},getPortrait:function(){return G_MyUserInfo.portrait},GetUserID:function(){return G_MyUserInfo.id},GetUserIMSign:function(){return G_MyUserInfo.UserSig},GetUserNickName:function(){return G_MyUserInfo.name},GetIsLive:function(){return G_MyUserInfo.islive}};