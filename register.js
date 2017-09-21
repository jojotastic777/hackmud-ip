function (context, args) {
  let hash = s => {
    return #s.jojotastic.sha256({s:JSON.stringify(s)})
  }
  let id = hash(context.caller);
  if (!(#db.f({
    SID:"register",
    id: id
  })).first()) {
    let new_addr = #s.ip.gen_address_v1();
    let db_entry = {
      SID:"register",
      id: id,
      address: new_addr,
      last_action: Date.now(),
      time_created: Date.now()
    }
    #db.i(db_entry)
    return #s.ip.get_own_registration({friendly:true});
  } else {
    return {ok:false, msg:"You already have an account."}
  }
}