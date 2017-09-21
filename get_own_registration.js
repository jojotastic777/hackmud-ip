function (context, args) {
  let entry = #db.f({
    SID:"register",
    id: #s.jojotastic.sha256({s:JSON.stringify(context.caller)})
  }).first();
  if (entry) {
    #s.ip.update_last_action();
    if (context.calling_script || (args && !args.friendly && args.friendly !== undefined)) {
      return {
        address: entry.address,
        last_action: entry.last_action,
        time_created: entry.time_created
      }
    } else {
      return [
        `\`AYour Registration Information:\``,
        `  \`Naddress\`      : ${entry.address.split(":").map(a=>"`V"+a).join(":`")}\``,
        `  last_action  : ${entry.last_action}`,
        `  time_created : ${entry.time_created}`
      ].join("\n");
    }
  }
}