function(context, args)
{
	#db.u({
    SID:"register",
    id: #s.jojotastic.sha256({s:JSON.stringify(context.caller)})
  }, {"$set":{
		last_action: Date.now()
	}})
	return {ok:true};
}
